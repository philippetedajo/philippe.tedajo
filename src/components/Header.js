import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { gsap, Power3 } from "gsap"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

const Header = () => {
  const logoRef = useRef(null)
  const aboutRef = useRef(null)
  const homeRef = useRef(null)
  const contactRef = useRef(null)

  const twitterRef = useRef(null)
  const githubRef = useRef(null)
  const linkedinRef = useRef(null)

  useEffect(() => {
    gsap.from(logoRef.current, {
      duration: 0.8,
      autoAlpha: 0,
      delay: 0.5,
      scale: 1.5,
    })
    gsap.from([homeRef.current, aboutRef.current, contactRef.current], {
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
  }, [])

  /* ============ */
  return (
    <div className="header_container d-flex justify-content-center m-0 p-0">
      <div className="header">
        <div className="inner-header">
          <div className="logo">
            <Link to="/" ref={logoRef}>
              P.
            </Link>
          </div>
          <div className="navigation">
            <Link activeClassName="active" to="#home" ref={homeRef}>
              Home
            </Link>
            <Link activeClassName="active" to="#about" ref={aboutRef}>
              About
            </Link>
            <Link activeClassName="active" to="#contact" ref={contactRef}>
              Contact
            </Link>
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
