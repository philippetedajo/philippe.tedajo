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
    <Container viewHeight="130vh">
      <div className="d-flex flex-column h-100 contact" ref={contact}>
        {/* */}
        <div className="w-banner-title my-5" ref={bannerTitleWrapper}>
          <h6
            className="banner-title text-center text-lg-left"
            ref={bannerTitle}
            id="contact"
          >
            AN INSPIRATION
          </h6>
        </div>
        <div className="banner-image inner-container d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="w-banner-contact mb-5" ref={bannerWrapper}>
            <div className="banner-contact" ref={banner}>
              <Img fluid={data.contact.childImageSharp.fluid} />
            </div>
          </div>

          <div className="box d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start mt-5">
            <div className="col-lg-6 text-center text-lg-left w-title-contact">
              <h2 className="title-contact" ref={title}>
                CONTACT ME
              </h2>
              <form className="d-flex flex-column ">
                <input
                  type="email"
                  className="pf my-2 col-9 p-0"
                  placeholder="Enter your email"
                />

                <input
                  type="email"
                  className="pf my-3 col-9 p-0"
                  placeholder="Leave a message"
                />
                <button className="col-3 send " type="submit">
                  Send
                </button>
              </form>
            </div>
            <div className="col-lg-6 w-subtitle-contact">
              <p
                ref={subtitle}
                className="m-0 text-center text-lg-left subtitle-contact"
              >
                Let's work together to create game-changing experiences that
                will take your brand to another level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact
