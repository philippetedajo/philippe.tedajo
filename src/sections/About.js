import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/about.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(
        relativePath: { eq: "xavier-von-erlach-ySv9xncaq3A-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className=" p-4 p-md-5">
      <div className="h-100 d-flex flex-lg-row flex-column-reverse align-items-center justify-content-center justify-content-lg-between w-100">
        <div className="d-flex flex-column col-lg-5 ">
          <h2 className="text-center text-lg-left mt-5 mt-md-3 mt-lg-0">
            A LITTLE ABOUT ME
          </h2>
          <p className="text-center text-lg-left">
            Hello and welcome, as a supporter of "simplicity", I focus on user
            needs to build intuitive digital interfaces, offering a memorable
            user experience. I work at Bhent.inc as a front end developer for
            several types of projects and my area of expertise goes from
            javascript to python programming language.longly inspired by Indian
            philosophy and culture, all my life and work is design by it.
          </p>
        </div>
        <div className="picture-about">
          <Img fluid={data.about.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default About
