import React, { useRef, useEffect } from "react"
import Splash from "../components/Splash"
import Content from "../components/Reveal"
import "../styles/styles.scss"
import "../static/fonts/fonts.scss"
import { Cursor, SEO } from "../components"
import { Home, About, Project } from "../sections"

const Index = () => {
  const content = useRef(null)
  const wrapper = useRef(null)
  const loader = useRef(null)

  useEffect(() => {
    Splash(wrapper.current, loader.current)
    Content(content.current)
  }, [])

  return (
    <div>
      <SEO />
      <Cursor />
      <div className="wrapper" ref={wrapper}>
        <span className="loader" ref={loader}>
          <span className="loader-inner" />
        </span>
      </div>
      <div ref={content}>
        <Home />
        <About />
        <Project />
        <footer className="text-center my-3">
          © 2020 P. All rights reserved
        </footer>
      </div>
    </div>
  )
}

export default Index
