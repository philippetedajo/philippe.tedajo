import React from "react"
import "../styles/styles.scss"
import "../styles/components.scss"
import "../static/fonts/fonts.scss"
import { Home, Me, Contact } from "../sections"
import { SEO } from "../components"

const Index = () => {
  return (
    <>
      <SEO />
      <Home />
      <Me />
      <Contact />
    </>
  )
}

export default Index
