import {
  Scene, PerspectiveCamera, WebGLRenderer,
  BufferGeometry, BufferAttribute, Points, ShaderMaterial,
  AdditiveBlending, Color,
} from 'three'

// Firefly glow: bright core + soft halo, additive blending for natural light bloom
const VERT = `
attribute float size;
attribute float alpha;
varying float vAlpha;
void main() {
  vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (300.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`

const FRAG = `
uniform vec3 color;
varying float vAlpha;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float core = 1.0 - smoothstep(0.0, 0.12, d);
  float halo = 1.0 - smoothstep(0.0, 0.5, d);
  float a = (core * 1.0 + halo * 0.5) * vAlpha;
  gl_FragColor = vec4(color, a);
}
`

export function initParticles() {
  const container = document.getElementById('hero-canvas')
  if (!container) return

  const w = container.clientWidth || window.innerWidth
  const h = container.clientHeight || window.innerHeight

  const scene = new Scene()
  const camera = new PerspectiveCamera(75, w / h, 0.1, 200)
  camera.position.z = 20

  const renderer = new WebGLRenderer({ alpha: true, antialias: false, premultipliedAlpha: false })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  renderer.domElement.style.cssText = 'position:absolute;inset:0;background:transparent;display:block;'
  container.appendChild(renderer.domElement)

  const isMobile = window.matchMedia('(max-width: 768px)').matches
  const count = isMobile ? 40 : 80

  // Camera view bounds at the z=0 plane
  const vFovRad = (75 * Math.PI) / 180
  const halfH = Math.tan(vFovRad / 2) * 20
  const halfW = halfH * (w / h)

  // Per-firefly data
  const basePos  = new Float32Array(count * 3)
  const phases   = new Float32Array(count * 4) // phaseX, speedX, phaseY, speedY
  const positions = new Float32Array(count * 3)
  const sizes    = new Float32Array(count)
  const alphas   = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    // 80% in the dark grass zone (lower half), 20% drifting into sky horizon
    const inGrass = Math.random() < 0.8
    const yMin = inGrass ? -halfH * 0.85 : -halfH * 0.2
    const yMax = inGrass ? -halfH * 0.05 : halfH * 0.05

    basePos[i * 3]     = (Math.random() - 0.5) * halfW * 1.9
    basePos[i * 3 + 1] = yMin + Math.random() * (yMax - yMin)
    basePos[i * 3 + 2] = (Math.random() - 0.5) * 10

    positions[i * 3]     = basePos[i * 3]
    positions[i * 3 + 1] = basePos[i * 3 + 1]
    positions[i * 3 + 2] = basePos[i * 3 + 2]

    phases[i * 4]     = Math.random() * Math.PI * 2  // drift phase X
    phases[i * 4 + 1] = 0.15 + Math.random() * 0.35 // drift speed X
    phases[i * 4 + 2] = Math.random() * Math.PI * 2  // drift phase Y
    phases[i * 4 + 3] = 0.1  + Math.random() * 0.25 // drift speed Y

    // Varied sizes — some fireflies brighter/larger than others
    sizes[i]  = 1.0 + Math.random() * 1.8
    alphas[i] = 0.5 + Math.random() * 0.5
  }

  const geo = new BufferGeometry()
  geo.setAttribute('position', new BufferAttribute(positions, 3))
  geo.setAttribute('size',     new BufferAttribute(sizes, 1))
  geo.setAttribute('alpha',    new BufferAttribute(alphas, 1))

  const mat = new ShaderMaterial({
    uniforms: { color: { value: new Color(0xaaff44) } }, // classic firefly yellow-green
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  })

  scene.add(new Points(geo, mat))

  let rafId
  function animate(time) {
    rafId = requestAnimationFrame(animate)
    const t = time * 0.001

    const pos = geo.attributes.position.array
    const alp = geo.attributes.alpha.array

    for (let i = 0; i < count; i++) {
      // Gentle lazy float — each firefly on its own path
      pos[i * 3]     = basePos[i * 3]     + Math.sin(t * phases[i * 4 + 1] + phases[i * 4])     * 0.9
      pos[i * 3 + 1] = basePos[i * 3 + 1] + Math.sin(t * phases[i * 4 + 3] + phases[i * 4 + 2]) * 0.6

      // Organic flicker using two overlapping sine waves per firefly
      const flicker = 0.5 + 0.5 * Math.sin(t * 2.1 + phases[i * 4] * 3.7)
                          * Math.sin(t * 1.3 + phases[i * 4 + 2] * 2.1)
      alp[i] = Math.max(0.05, flicker)
    }

    geo.attributes.position.needsUpdate = true
    geo.attributes.alpha.needsUpdate = true
    renderer.render(scene, camera)
  }
  requestAnimationFrame(animate)

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId)
    else requestAnimationFrame(animate)
  })

  window.addEventListener('resize', () => {
    const nw = container.clientWidth || window.innerWidth
    const nh = container.clientHeight || window.innerHeight
    camera.aspect = nw / nh
    camera.updateProjectionMatrix()
    renderer.setSize(nw, nh)
  })

  return {
    destroy: () => {
      cancelAnimationFrame(rafId)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    },
  }
}
