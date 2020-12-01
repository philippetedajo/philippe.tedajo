import React, { useEffect, useRef, useState, createRef } from "react"
import gsap, { Expo } from "gsap"

const RepoSlider = data => {
  const slides = [
    { number: "#00", title: "Lorem 0", imgSrc: "" },
    { number: "#01", title: "Lorem 1", imgSrc: "" },
    { number: "#02", title: "Lorem 2", imgSrc: "" },
  ]

  const [currentSilde, setCurrentSlide] = useState({
    activeIndex: 0,
    totalLength: slides.length,
  })
  const [animation, setAnimation] = useState("rigth")

  //====================================================================================================
  let { activeIndex, totalLength } = currentSilde

  const handlePrevious = () => {
    setAnimation("left")
    if (activeIndex < 1) {
      activeIndex = totalLength - 1
    } else {
      activeIndex--
    }
    setCurrentSlide({ ...currentSilde, activeIndex })
  }

  //==================================================================================================== Next
  const handleNext = () => {
    setAnimation("rigth")
    if (activeIndex === totalLength - 1) {
      activeIndex = 0
    } else {
      activeIndex++
    }
    setCurrentSlide({ ...currentSilde, activeIndex })
  }

  //====================================================================================================

  const hello = ["a", "b", "c"]

  const repoTitles = useRef(hello.map(() => createRef()))

  const startAnimation = item => {
    if (animation === "rigth") {
      gsap.from(item, {
        duration: 1,
        scale: 0.7,
        x: 500,
      })
    } else {
      gsap.from(item, {
        duration: 1,
        scale: 0.7,
        x: -500,
      })
    }
  }

  //====================================================================================================

  useEffect(() => {
    setCurrentSlide({ ...currentSilde, activeIndex })
    const elements = repoTitles.current.map(ref => ref.current)
    startAnimation(elements[activeIndex])
  }, [activeIndex])

  return (
    <div className="d-flex flex-column flex-md-row justify-content-end justify-content-md-between align-items-center h-100 repo-slider">
      {/* slider */}
      <div className={`box-slide`}>
        <div className="repo-number"> {slides[activeIndex].number} </div>
        <div
          className={`repo-title text-center ${activeIndex}`}
          ref={repoTitles.current[activeIndex]}
        >
          {slides[activeIndex].title}
        </div>
      </div>
      {/*slider controls*/}
      <div className="next-control">
        <span onClick={handlePrevious}>Previous</span>
      </div>
      <div className="previous-control">
        <span onClick={handleNext}>Next</span>
      </div>
    </div>
  )
}

export default RepoSlider
