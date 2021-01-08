import React, { useRef, useEffect } from "react"
import Splash from "../components/Splash"
import "../styles/styles.scss"
import "../static/fonts/fonts.scss"
import { Cursor, SEO } from "../components"
import { Home, About, Project } from "../sections"

const Index = () => {
  const wrapper = useRef(null)
  const loader = useRef(null)

  useEffect(() => {
    Splash(wrapper.current, loader.current)
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
      <div className="content fade-in">
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
