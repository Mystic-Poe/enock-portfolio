import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initFilmsScroll() {
  const filmsSection = document.getElementById('films')
  const filmsTrack = document.getElementById('films-track')
  if (!filmsSection || !filmsTrack) return

  const mm = gsap.matchMedia()

  mm.add('(min-width: 769px)', () => {
    const getScrollAmount = () => -(filmsTrack.scrollWidth - window.innerWidth)

    const filmsTween = gsap.to(filmsTrack, {
      x: getScrollAmount,
      ease: 'none',
      duration: 1,
    })

    ScrollTrigger.create({
      trigger: filmsSection,
      start: 'top top',
      end: () => `+=${Math.abs(getScrollAmount())}`,
      pin: true,
      scrub: 1,
      animation: filmsTween,
      invalidateOnRefresh: true,
    })
  })
}
