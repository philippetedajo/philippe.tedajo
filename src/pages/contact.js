import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import "../styles/contact.css"

const Contact = () => {
  const contact = useRef(null)

  useEffect(() => {
    gsap.to(contact.current, {
      visibility: "visible",
    })
  }, [contact])

  return <div className="contact">Contact</div>
}

export default Contact
