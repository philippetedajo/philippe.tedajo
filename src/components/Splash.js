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
    ease: Expo.easeInOut,
    top: "90%",
    borderRadius: "50%",
    height: 20,
    width: 20,
    delay: 0.5,
  })
  tl.to(item2, {
    opacity: 0,
  })
}

export default Splash
