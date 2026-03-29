import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initLenis } from './lenis.js'
import { initAnimations } from './animations.js'
import { initParticles } from './particles.js'
import { initFilmsScroll } from './films.js'

gsap.registerPlugin(ScrollTrigger)

// ── Hero background (set via JS so Vite base path is applied correctly)
const heroSection = document.querySelector('.hero')
if (heroSection) {
  heroSection.style.backgroundImage = `url('${import.meta.env.BASE_URL}assets/images/hero-bg.jpg')`
}

// ── Init smooth scroll
initLenis()
initAnimations()
initParticles()
initFilmsScroll()

// ── Footer year
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()

// ── Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    navToggle.classList.toggle('active')
  })

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
      navToggle.classList.remove('active')
    })
  })
}

// ── Navbar frosted glass on scroll
const navbar = document.querySelector('.navbar')
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50)
  })
}

// ── Email dropdown
const emailBtn = document.getElementById('emailBtn')
const emailDropdown = document.getElementById('emailDropdown')
if (emailBtn && emailDropdown) {
  let dropdownOpen = false
  emailBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    dropdownOpen = !dropdownOpen
    emailDropdown.style.display = dropdownOpen ? 'block' : 'none'
  })
  document.addEventListener('click', (e) => {
    if (!emailBtn.contains(e.target) && !emailDropdown.contains(e.target)) {
      dropdownOpen = false
      emailDropdown.style.display = 'none'
    }
  })
  emailDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      dropdownOpen = false
      emailDropdown.style.display = 'none'
    })
  })
}

// ── Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})
