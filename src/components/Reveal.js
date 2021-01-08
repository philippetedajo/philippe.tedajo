import { Expo, gsap } from "gsap"

const Content = item1 => {
  gsap.from(item1, {
    duration: 2,
    opacity: 0,
    y: 250,
    ease: Expo.easeInOut,
    delay: 2,
  })
}

export default Content
