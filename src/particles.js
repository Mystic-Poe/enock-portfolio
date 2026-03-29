import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'
import { init as initParticleField } from './modules/particle-field.js'

export function initParticles() {
  const container = document.getElementById('hero-canvas')
  if (!container) return

  const w = container.clientWidth || window.innerWidth
  const h = container.clientHeight || window.innerHeight

  const scene = new Scene()
  const camera = new PerspectiveCamera(75, w / h, 0.1, 100)
  camera.position.z = 5

  const renderer = new WebGLRenderer({ alpha: true, antialias: false })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  container.appendChild(renderer.domElement)

  // init(scene, options) — returns { points, destroy }
  const { destroy } = initParticleField(scene, {
    count: window.matchMedia('(max-width: 768px)').matches ? 1200 : 3000,
    spread: 10,
    color: 0xffffff,
    minSize: 1,
    maxSize: 3,
  })

  let t = 0
  let rafId
  function animate() {
    rafId = requestAnimationFrame(animate)
    t += 0.001
    scene.rotation.y = t * 0.3
    scene.rotation.x = Math.sin(t) * 0.05
    renderer.render(scene, camera)
  }
  animate()

  // Pause rendering when tab is hidden (battery/performance)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId)
    } else {
      animate()
    }
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
      destroy()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }
}
