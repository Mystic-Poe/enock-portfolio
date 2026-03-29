import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function init(container, options = {}) {
  const {
    target,
    type = 'video',
    start = 'top top',
    end = 'bottom bottom',
    scrub = true,
  } = options

  const tl = gsap.timeline()

  if (type === 'video' && target) {
    tl.to(target, { currentTime: target.duration || 1, ease: 'none' })
  } else if (type === 'timeline' && target) {
    tl.add(target)
  }

  const trigger = ScrollTrigger.create({
    trigger: container,
    start,
    end,
    scrub,
    animation: tl,
  })

  function destroy() {
    trigger.kill()
    tl.kill()
  }

  return { trigger, tl, destroy }
}
