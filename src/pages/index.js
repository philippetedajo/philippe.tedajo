import React, { useRef, useEffect } from "react"
import Splash from "../components/Splash"
import Content from "../components/Reveal"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../styles/styles.scss"
import "../static/fonts/fonts.scss"
import { Cursor, SEO } from "../components"
import photo from "../images/xavier-von-erlach-ySv9xncaq3A-unsplash.jpg"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const Index = () => {
  // const content = useRef(null)
  // const wrapper = useRef(null)
  // const loader = useRef(null)

  const reveal = gsap.utils.toArray(".reveal")

  useEffect(() => {
    reveal.forEach((text, i) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: "active",
        start: "top 90%",
        end: "top 20%",
        marker: true,
      })
    })
  }, [])

  // useEffect(() => {
  //   Splash(wrapper.current, loader.current)
  //   Content(content.current)
  // }, [])

  return (
    <div>
      <SEO />
      <Cursor />
      {/*<div className="wrapper" ref={wrapper}>*/}
      {/*  <span className="loader" ref={loader}>*/}
      {/*    <span className="loader-inner" />*/}
      {/*  </span>*/}
      {/*</div>*/}
      <div>
        {/*ref={content}*/}
        <section>
          <h1 className="reveal">hello title</h1>
          <h2 className="reveal">hello subtitle</h2>
          <img alt="photo" src={photo} />
        </section>
        <section>
          <h1 className="reveal">hello titless</h1>
          <h2 className="reveal">hello subtitle</h2>
          <img alt="photo" src={photo} />
        </section>
        <section>
          <h1 className="reveal">hello title</h1>
          <h2 className="reveal">hello subtitle</h2>
          <img alt="photo" src={photo} />
        </section>
        <footer className="text-center my-3">
          © 2020 P. All rights reserved
        </footer>
      </div>
    </div>
  )
}

export default Index
