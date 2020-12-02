import React, { useState } from "react"
import "../styles/styles.scss"
import "../styles/components.scss"
import "../static/fonts/fonts.scss"
import { Home, Work, About } from "../sections"

const Index = () => {
  return (
    <>
      <Home />
      <Work />
      <About />
    </>
  )
}

export default Index
