import { TweenMax, Expo, TimelineMax } from "gsap"

const Splash = (item1, item2) => {
  TweenMax.to(item1, {
    duration: 2,
    top: "-100%",
    ease: Expo.easeInOut,
    delay: 1.5,
  })

  let tl = new TimelineMax()

  tl.to(item2, {
    duration: 2,
    ease: Expo.easeIn,
    opacity: 0,
    y: 120,
    delay: 0.5,
  })
}

export default Splash
