import { gsap, Power3 } from "gsap"
import React, { useEffect, useRef } from "react"
import { Container } from "../components"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/about.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(
        relativePath: { eq: "andrew-neel-1-29wyvvLJA-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  /* About REF === */
  const title = useRef(null)
  const subtitle = useRef(null)
  const links = useRef(null)
  const pictureWrapper = useRef(null)
  const picture = useRef(null)

  useEffect(() => {
    gsap.from([title.current, subtitle.current, links.current], {
      duration: 2,
      ease: Power3.easeOut,
      y: 164,
      autoAlpha: 0,
      stagger: 0.4,
    })
    gsap.from(picture.current, {
      duration: 2,
      ease: Power3.easeInOut,
      scale: 2,
      autoAlpha: 0,
    })
  }, [title, subtitle, links, picture])

  return (
    <Container viewHeight="100vh">
      <div className="about d-flex h-100" id="about">
        <div className="inner-container d-flex flex-lg-row flex-column-reverse align-items-center justify-content-center justify-content-lg-between w-100">
          <div className="para col-lg-4 mt-5">
            <div className="w-title-about">
              <h2 className="text-center text-lg-left title-about" ref={title}>
                THE POWER OF IMAGINATION
              </h2>
            </div>
            <div className="my-3 w-subtitle-about">
              <p
                className="text-center text-lg-left subtitle-about"
                ref={subtitle}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae
              </p>
            </div>
            <div className="w-project-links-about">
              <h6
                className="text-center text-lg-left project-links-about"
                ref={links}
              >
                <Link to="/projects">View projects</Link>
              </h6>
            </div>
          </div>
          <div className="w-picture-about" ref={pictureWrapper}>
            <div className="picture-about" ref={picture}>
              <Img fluid={data.about.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
