import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { gsap, Power3 } from "gsap"
import React, { useRef, useEffect } from "react"
import { Container } from "../components"
import "../styles/contact.css"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      contact: file(
        relativePath: { eq: "African_Art_at_the_British_Museum.jpg" }
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
  const contact = useRef(null)
  const title = useRef(null)
  const subtitle = useRef(null)
  const bannerTitleWrapper = useRef(null)
  const bannerTitle = useRef(null)
  const bannerWrapper = useRef(null)
  const banner = useRef(null)

  useEffect(() => {
    gsap.to(contact.current, {
      visibility: "visible",
    })
    gsap.from([bannerTitle.current, title.current, subtitle.current], {
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
  }, [contact, bannerTitle, title, subtitle, banner])

  return (
    <Container viewHeight="120vh">
      <div className="d-flex flex-column h-100 contact" ref={contact}>
        {/* */}
        <div className="w-banner-title my-5" ref={bannerTitleWrapper}>
          <h6
            className="banner-title text-center text-lg-left"
            ref={bannerTitle}
          >
            AN INSPIRATION
          </h6>
        </div>
        <div className="banner-image inner-container d-flex flex-column align-items-center justify-content-center mt-5">
          <div
            className="w-banner-contact mb-5"
            ref={bannerWrapper}
            id="contact"
          >
            <div className="banner-contact" ref={banner}>
              <Img fluid={data.contact.childImageSharp.fluid} />
            </div>
          </div>

          <div className="box d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start mt-5">
            <div className="col-lg-6 text-center text-lg-left w-title-contact">
              <h2 className="title-contact" ref={title}>
                CONTACT ME
              </h2>
            </div>
            <div className="col-lg-6 w-subtitle-contact">
              <p
                ref={subtitle}
                className="m-0 text-center text-lg-left subtitle-contact"
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

export default Contact
