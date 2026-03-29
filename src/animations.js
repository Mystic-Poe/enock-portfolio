import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initAnimations() {
  // ── Hero text: character-by-character reveal
  const titleEl = document.querySelector('.hero-title')
  if (titleEl) {
    const text = titleEl.textContent
    titleEl.innerHTML = text.split('').map(char =>
      char === ' ' ? ' ' : `<span class="char">${char}</span>`
    ).join('')

    const tl = gsap.timeline({ delay: 0.3 })
    tl.to('.hero-title .char', {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.03,
      ease: 'power2.out',
    })
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
    .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .to('.btn-primary', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
  }

  // ── Section reveals (all .reveal elements)
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })

  // ── Skills cards stagger
  const skillsGrid = document.querySelector('.skills-grid')
  if (skillsGrid) {
    gsap.to('.skill-card', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }

  // ── Stat counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count)
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val)
          },
        })
      },
      once: true,
    })
  })

  // ── Gallery items stagger fade-in
  const galleryGrid = document.querySelector('.gallery-grid')
  if (galleryGrid) {
    gsap.to('.gallery-item', {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      stagger: { each: 0.07, from: 'start' },
      scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }

  // ── Vision quote underline draw
  const visionUnderline = document.querySelector('.vision-underline')
  if (visionUnderline) {
    gsap.to('.vision-underline', {
      scaleX: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.vision',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })
  }

  // ── Nav active section highlight
  const sections = document.querySelectorAll('section[id]')
  const navAnchors = document.querySelectorAll('.nav-links a')

  if (sections.length && navAnchors.length) {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: () => {
        let current = ''
        sections.forEach(section => {
          if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id')
          }
        })
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${current}`)
        })
      },
    })
  }
}
