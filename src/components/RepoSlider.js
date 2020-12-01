import React, { useEffect, useRef, useState, createRef } from "react"
import gsap, { Expo } from "gsap"

const RepoSlider = data => {
  const slides = [
    { number: "#00", title: "Ideal", imgSrc: "" },
    { number: "#01", title: "Nature ", imgSrc: "" },
    { number: "#02", title: "Ability", imgSrc: "" },
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

  const titles = useRef(slides.map(() => createRef()))
  const numbers = useRef(slides.map(() => createRef()))

  const startAnimation = (a, b) => {
    switch (animation) {
      case "rigth":
        gsap.from(a, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
          x: 500,
        })
        gsap.from(b, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
          x: 100,
        })

        break
      case "left":
        gsap.from(a, {
          duration: 1,
          scale: 0.7,
          x: -500,
        })
        gsap.from(b, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
          x: -100,
        })
        break
    }
  }

  //====================================================================================================

  useEffect(() => {
    setCurrentSlide({ ...currentSilde, activeIndex })
    const title = titles.current.map(ref => ref.current)
    const number = numbers.current.map(ref => ref.current)

    startAnimation(title[activeIndex], number[activeIndex])
  }, [activeIndex])

  return (
    <div className="d-flex flex-column flex-md-row justify-content-end justify-content-md-between align-items-center h-100 repo-slider">
      {/* slider */}
      <div className={`box-slide`}>
        <div className="repo-number" ref={numbers.current[activeIndex]}>
          {slides[activeIndex].number}
        </div>
        <div
          className={`repo-title text-center`}
          ref={titles.current[activeIndex]}
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
