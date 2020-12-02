import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { gsap, Power3 } from "gsap"
import React, { useRef, useEffect } from "react"
import { Container } from "../components"
import "../styles/about.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "qpro-3Ynsf8_XCKc-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  /* About REF === */
  const about = useRef(null)
  const title = useRef(null)
  const subtitle = useRef(null)
  const bannerWrapper = useRef(null)
  const banner = useRef(null)

  useEffect(() => {
    gsap.to(about.current, {
      visibility: "visible",
    })
    gsap.from([title.current, subtitle.current], {
      duration: 2,
      ease: Power3.easeOut,
      y: 164,
      autoAlpha: 0,
      stagger: 0.4,
    })
    gsap.from(banner.current, {
      duration: 2,
      ease: Power3.easeInOut,
      scale: 2,
      autoAlpha: 0,
    })
  }, [about, title, subtitle, banner])

  return (
    <Container viewHeight="85vh">
      <div className="d-flex h-100 about" id="about" ref={about}>
        <div className="banner-image inner-container d-flex flex-column align-items-center justify-content-center">
          <div className="w-banner-about mb-5" ref={bannerWrapper}>
            <div className="banner-about" ref={banner}>
              <Img fluid={data.about.childImageSharp.fluid} />
            </div>
          </div>

          <div className="box d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start mt-5">
            <div className="col-lg-6 text-center text-lg-left w-title-about">
              <h2 className="title-about" ref={title}>
                GREAT INNOVATION
              </h2>
            </div>
            <div className="col-lg-6 w-subtitle-about">
              <p
                ref={subtitle}
                className="m-0 text-center text-lg-left subtitle-about"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
