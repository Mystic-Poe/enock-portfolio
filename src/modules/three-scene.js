import * as THREE from 'three'

export function init(container, options = {}) {
  const { background = 0x000000, fov = 75, near = 0.1, far = 1000 } = options

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(background)

  const width = container.clientWidth || window.innerWidth
  const height = container.clientHeight || window.innerHeight
  const camera = new THREE.PerspectiveCamera(fov, width / height, near, far)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  function onResize() {
    const w = container.clientWidth || window.innerWidth
    const h = container.clientHeight || window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  function render() {
    renderer.render(scene, camera)
  }

  function destroy() {
    window.removeEventListener('resize', onResize)
    renderer.dispose()
    container.removeChild(renderer.domElement)
  }

  return { scene, camera, renderer, render, destroy }
}
