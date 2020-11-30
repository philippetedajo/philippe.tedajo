import React, { useEffect, useRef, useState } from "react"
import gsap, { Expo } from "gsap"

const RepoSlider = data => {
  const slides = [
    { number: "#01", title: "Lorem ipsum 1", imgSrc: "", class: "activeSlide" },
    {
      number: "#02",
      title: "Lorem ipsum 2",
      imgSrc: "",
      class: "activeSlide2",
    },
    {
      number: "#03",
      title: "Lorem ipsum 3",
      imgSrc: "",
      class: "activeSlide3",
    },
  ]

  const boxSlide = useRef(null)
  const repoNumber = useRef(null)
  const repoTitle = useRef(null)

  const [currentSilde, setCurrentSlide] = useState({
    activeIndex: 0,
    totalLength: slides.length,
  })

  let { activeIndex, totalLength } = currentSilde

  const handlePrevious = () => {
    if (activeIndex < 1) {
      activeIndex = totalLength - 1
    } else {
      activeIndex--
    }
    setCurrentSlide({ ...currentSilde, activeIndex })
  }

  const handleNext = () => {
    if (activeIndex === totalLength - 1) {
      activeIndex = 0
    } else {
      activeIndex++
    }
    setCurrentSlide({ ...currentSilde, activeIndex })
  }

  useEffect(() => {
    setCurrentSlide({ ...currentSilde, activeIndex })
  }, [activeIndex])

  return (
    <div className="d-flex flex-column flex-md-row justify-content-end justify-content-md-between align-items-center h-100 repo-slider">
      {/* slider */}
      <div className={`box-slide`}>
        <div className="repo-number"> {slides[activeIndex].number} </div>
        <div
          className={`repo-title text-center ${slides[activeIndex].class}`}
          ref={repoTitle}
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
