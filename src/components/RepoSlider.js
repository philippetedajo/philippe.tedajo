import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const RepoSlider = data => {
  const slides = [
    { number: "#01", title: "Lorem ipsum 1", imgSrc: "" },
    { number: "#02", title: "Lorem ipsum 2", imgSrc: "" },
    { number: "#03", title: "Lorem ipsum 3", imgSrc: "" },
  ]

  const boxSlide = useRef(null)
  const repoNumber = useRef(null)
  const repoTitle = useRef(null)

  const [currentSilde, setCurrentSlide] = useState({
    activeIndex: 0,
    totalLength: slides.length,
  })

  const handlePrevious = () => {
    let { activeIndex, totalLength } = currentSilde
    if (activeIndex < 1) {
      activeIndex = totalLength - 1
    } else {
      activeIndex--
    }
    setCurrentSlide({ ...currentSilde, activeIndex })
  }

  const handleNext = () => {
    let { activeIndex, totalLength } = currentSilde
    if (activeIndex === totalLength - 1) {
      activeIndex = 0
    } else {
      activeIndex++
    }
    setCurrentSlide({ ...currentSilde, activeIndex })
  }

  console.log(currentSilde.activeIndex, currentSilde.totalLength)

  useEffect(() => {
    const showAnimation = gsap.to(boxSlide.current, {
      opacity: 1,
      visibility: "visible",
    })

    const hideAnimation = gsap.from(boxSlide.current, {
      opacity: 0,
      visibility: "hidden",
    })
  }, [boxSlide])

  return (
    <div className="d-flex flex-column flex-md-row justify-content-end justify-content-md-between align-items-center h-100 repo-slider">
      {slides.map((slide, index) => {
        return (
          <div className="box-slide" ref={boxSlide} key={index}>
            <div className="repo-number" ref={repoNumber}>
              {slide.number}
            </div>
            <div className="repo-title text-center" ref={repoTitle}>
              {slide.title}
            </div>
          </div>
        )
      })}
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
