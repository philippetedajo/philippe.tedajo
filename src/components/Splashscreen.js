import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Splashscreen = () => {
  const splash = useRef(null)

  useEffect(() => {
    gsap.to(splash.current, {
      visibility: "visible",
    })
  }, [splash])

  return (
    <div className="splashscreen " ref={splash}>
      <div className="spashtext text-center">
        "Give, even if you only have a little."
      </div>
    </div>
  )
}

export default Splashscreen
