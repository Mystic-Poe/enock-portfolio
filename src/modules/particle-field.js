import * as THREE from 'three'

const VERT = `
attribute float size;
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`

const FRAG = `
uniform vec3 color;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = dot(uv, uv);
  if (d > 0.25) discard;
  gl_FragColor = vec4(color, 1.0 - d * 4.0);
}
`

export function init(scene, options = {}) {
  const {
    count = 5000,
    spread = 10,
    color = 0xffffff,
    minSize = 1,
    maxSize = 3,
  } = options

  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * spread
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread
    sizes[i] = minSize + Math.random() * (maxSize - minSize)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: { color: { value: new THREE.Color(color) } },
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
  })

  const points = new THREE.Points(geometry, material)
  scene.add(points)

  function destroy() {
    scene.remove(points)
    geometry.dispose()
    material.dispose()
  }

  return { points, destroy }
}
