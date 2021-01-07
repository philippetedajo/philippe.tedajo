import React from "react"
import "../styles/styles.scss"
import "../static/fonts/fonts.scss"
import { Cursor, SEO } from "../components"
import { Home, About, Project } from "../sections"

const Index = () => {
  return (
    <>
      <SEO />
      <Cursor />
      <Home />
      <About />
      <Project />
      <footer className="text-center my-3">
        © 2020 P. All rights reserved
      </footer>
    </>
  )
}

export default Index
