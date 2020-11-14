import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = () => {
  const header = useRef(null)
  const logoRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)

  const twitterRef = useRef(null)
  const githubRef = useRef(null)
  const linkedinRef = useRef(null)

  useEffect(() => {
    gsap.to(header.current, {
      visibility: "visible",
    })
    gsap.from(logoRef.current, {
      duration: 0.8,
      autoAlpha: 0,
      delay: 0.5,
      scale: 1.5,
    })
    gsap.from([workRef.current, aboutRef.current, contactRef.current], {
      duration: 0.7,
      autoAlpha: 0,
      y: 25,
      ease: "none",
      stagger: 0.5,
    })
    gsap.to([twitterRef.current, githubRef.current, linkedinRef.current], {
      duration: 0.5,
      opacity: 1,
      ease: "none",
      visibility: "visible",
      delay: 2,
    })
  }, [
    header,
    logoRef,
    aboutRef,
    workRef,
    contactRef,
    twitterRef,
    githubRef,
    linkedinRef,
  ])

  /* ============ */
  return (
    <div className="header_container d-flex justify-content-center m-0 p-0">
      <div className="header" ref={header}>
        <div className="inner-header">
          <div className="logo" ref={logoRef}>
            <AnchorLink to="/#home" title="P." className="logo" />
          </div>
          <div className="navigation">
            <div className="item" ref={workRef}>
              <AnchorLink to="/#work" title="Work" />
            </div>
            <div className="item" ref={aboutRef}>
              <AnchorLink to="/#about" title="About" />
            </div>
            <div className="item" ref={contactRef}>
              <AnchorLink to="/contact" title="Contact" />
            </div>
          </div>
          <div className="social">
            <a
              href="https://twitter.com/Zambou21"
              rel="noopener noreferrer"
              target="_blank"
              ref={twitterRef}
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/philippetedajo"
              rel="noopener noreferrer"
              target="_blank"
              ref={githubRef}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/philippe-tedajo-aa1a298b"
              rel="noopener noreferrer"
              target="_blank"
              ref={linkedinRef}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
