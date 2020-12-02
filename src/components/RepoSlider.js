import React, { useEffect, useRef, useState, createRef } from "react"
import gsap from "gsap"
import s1 from "../images/slides/marek-piwnicki-7iV2hWUQzxE-unsplash.jpg"
import { HiStar } from "react-icons/hi"
import { VscRepoForked } from "react-icons/vsc"
import { Container } from "./index"

const RepoSlider = data => {
  data = data.data

  const [currentSilde, setCurrentSlide] = useState({
    activeIndex: 0,
    totalLength: data.length,
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

  const titles = useRef(data.map(() => createRef()))
  const numbers = useRef(data.map(() => createRef()))
  const pictures = useRef(data.map(() => createRef()))
  const details = useRef(data.map(() => createRef()))

  const startAnimation = (title, number, picture, detail) => {
    switch (animation) {
      case "rigth":
        gsap.from(title, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
          x: 500,
        })
        gsap.from(number, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
          x: 100,
        })
        gsap.from(picture, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
        })
        gsap.from(detail, {
          duration: 0.9,
          scale: 0.7,
          opacity: 0,
        })

        break
      case "left":
        gsap.from(title, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
          x: -500,
        })
        gsap.from(number, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
          x: -100,
        })
        gsap.from(picture, {
          duration: 1,
          opacity: 0,
          scale: 0.7,
        })
        gsap.from(detail, {
          duration: 0.9,
          opacity: 0,
        })
        break
    }
  }

  //====================================================================================================

  useEffect(() => {
    setCurrentSlide({ ...currentSilde, activeIndex })
    const title = titles.current.map(ref => ref.current)
    const number = numbers.current.map(ref => ref.current)
    const picture = pictures.current.map(ref => ref.current)
    const detail = details.current.map(ref => ref.current)

    startAnimation(
      title[activeIndex],
      number[activeIndex],
      picture[activeIndex],
      detail[activeIndex]
    )
  }, [activeIndex])

  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-end justify-content-md-between align-items-center h-100 repo-slider"
      id="work"
    >
      {/* slider */}
      <div className={`box-slide`}>
        <img
          src={s1}
          alt="repo"
          ref={pictures.current[activeIndex]}
          style={{ width: "100%" }}
        />
        <div
          className={`repo-title text-center`}
          ref={titles.current[activeIndex]}
        >
          {data[activeIndex].name}
        </div>
        <div className="box-slide-details" ref={details.current[activeIndex]}>
          <h3 className="mb-3">{data[activeIndex].description}</h3>
          <h3 className="mb-3">
            <HiStar /> : {data[activeIndex].stargazerCount}
          </h3>
          <h3 className="mb-3">
            <VscRepoForked /> : {data[activeIndex].forkCount}
          </h3>
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
