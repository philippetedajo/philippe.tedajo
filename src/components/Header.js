import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = () => {
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive)
  }

  const header = useRef(null)
  const logoRef = useRef(null)

  const links = [
    { title: "About", pathname: "/#about" },
    { title: "Work", pathname: "/#work" },
    { title: "Contact", pathname: "/#contact" },
  ]

  const socials = [
    { href: "https://twitter.com/Zambou21", icon: <FaTwitter /> },
    { href: "https://github.com/philippetedajo", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/philippe-tedajo-aa1a298b",
      icon: <FaLinkedin />,
    },
  ]

  const linksRef = useRef([])
  linksRef.current = []
  const addLinkToRefs = el => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el)
    }
  }

  const socialsRef = useRef([])
  socialsRef.current = []
  const addSocialToRefs = el => {
    if (el && !socialsRef.current.includes(el)) {
      socialsRef.current.push(el)
    }
    console.log(socialsRef)
  }

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
    gsap.from(linksRef.current, {
      duration: 0.7,
      autoAlpha: 0,
      y: 25,
      ease: "none",
      stagger: 0.5,
    })
    gsap.to(socialsRef.current, {
      duration: 0.5,
      opacity: 1,
      ease: "none",
      visibility: "visible",
      delay: 2,
    })
  }, [header, logoRef])

  /* ============ */
  return (
    <div className="header_container d-flex justify-content-center m-0 p-0">
      <div className="header" ref={header}>
        <div className="inner-header">
          <div className="logo" ref={logoRef}>
            <AnchorLink to="/#home" title="P." className="logo" />
          </div>
          <div className="navigation">
            {links.map(({ title, pathname }, index) => (
              <div key={index} className="item" ref={addLinkToRefs}>
                <AnchorLink to={pathname} title={title} className={isActive} />
              </div>
            ))}
          </div>
          <div className="social">
            {socials.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                ref={addSocialToRefs}
              >
                {icon}
              </a>
            ))}

            {/* <a
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
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
