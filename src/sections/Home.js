import React, { useEffect, useRef } from "react"
import { gsap, Power3 } from "gsap"
import { Container } from "../components"
import "../styles/styles.scss"
import "../styles/home.css"
import arrow_down from "../images/down-chevron.png"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const IndexPage = () => {
  /* Home REF ==== */
  const home = useRef(null)
  const title = useRef(null)
  const description = useRef(null)
  const sl1 = useRef(null)
  const sl2 = useRef(null)
  const sl3 = useRef(null)
  const separator = useRef(null)
  const scroller = useRef(null)

  /* Timeline  === */
  useEffect(() => {
    gsap.to(home.current, {
      visibility: "visible",
    })

    gsap.from(
      [
        sl1.current,
        sl2.current,
        sl3.current,
        title.current,
        description.current,
      ],
      {
        duration: 1.6,
        ease: Power3.easeOut,
        y: 164,
        autoAlpha: 0,
        stagger: 0.3,
      }
    )

    gsap.from(scroller.current, {
      duration: 1,
      y: -220,
    })
  }, [home, sl1, sl2, sl3, title, description, separator, scroller])

  return (
    <Container viewHeight="100vh">
      <div
        className="home d-flex justify-content-center align-items-center"
        id="home"
        ref={home}
      >
        <div className="profil">
          <div className="w-user">
            <div className="user-profil text-center text-md-left" ref={title}>
              Philippe Tedajo
            </div>
          </div>
          <div className="w-description">
            <div
              className="description-profil text-center text-md-left"
              ref={description}
            >
              Web developer
            </div>
          </div>

          {/*<div className="separator-bar" ref={separator} />*/}

          <div className="w-slogan">
            <div
              className="slogan text-center text-md-left title hlo"
              ref={sl1}
            >
              Bulding universe
            </div>
          </div>

          <div className="w-slogan">
            <div
              className="slogan text-center text-md-left title hlo"
              ref={sl2}
            >
              one pixel at a
            </div>
          </div>

          <div className="w-slogan">
            <div
              className="slogan text-center text-md-left title hlo"
              ref={sl3}
            >
              time
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-down">
        <img
          style={{ height: "28px" }}
          src={arrow_down}
          alt="arrow-down"
          ref={scroller}
        />
      </div>
    </Container>
  )
}

export default IndexPage
