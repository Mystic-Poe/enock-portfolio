import gsap from 'gsap'

export function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item img')
  if (!galleryItems.length) return

  galleryItems.forEach(img => {
    img.style.cursor = 'pointer'
    img.addEventListener('click', () => openLightbox(img.src, img.alt))
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox()
  })
}

function openLightbox(src, alt) {
  // Remove any existing lightbox first
  closeLightbox(true)

  const overlay = document.createElement('div')
  overlay.className = 'lightbox-overlay'
  overlay.id = 'lightbox-overlay'
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
    <img src="${src}" alt="${alt}">
  `
  document.body.appendChild(overlay)

  // Prevent body scroll while lightbox is open
  document.body.style.overflow = 'hidden'

  // Animate in
  gsap.to(overlay, { opacity: 1, duration: 0.3, ease: 'power2.out' })
  gsap.to(overlay.querySelector('img'), {
    scale: 1,
    duration: 0.4,
    ease: 'back.out(1.2)',
  })

  overlay.querySelector('.lightbox-close').addEventListener('click', () => closeLightbox())
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox()
  })
}

function closeLightbox(immediate = false) {
  const overlay = document.getElementById('lightbox-overlay')
  if (!overlay) return

  document.body.style.overflow = ''

  if (immediate) {
    overlay.remove()
    return
  }

  gsap.to(overlay, {
    opacity: 0,
    duration: 0.25,
    ease: 'power2.in',
    onComplete: () => overlay.remove(),
  })
}
