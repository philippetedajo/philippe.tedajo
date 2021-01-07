import React from "react"
import "../styles/home.css"
import arrow_down from "../images/down-chevron.png"

const Home = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center p-lg-5">
      <div className="profil p-md-5">
        <div className="user-profil text-center text-md-left">
          Philippe Tedajo
        </div>
        <div className="description-profil text-center text-md-left">
          Web developer
        </div>
        <div className="slogan text-center text-md-left title">
          Bulding universe one pixel at a time
        </div>
      </div>
      <div className="arrow-down">
        <img src={arrow_down} style={{ height: "28px" }} alt="arrow-down" />
      </div>
    </div>
  )
}

export default Home
