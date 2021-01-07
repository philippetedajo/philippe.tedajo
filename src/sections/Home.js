import React from "react"
import "../styles/home.css"

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5 p-md-0 pt-lg-5 pr-lg-5 pl-lg-5 ">
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
    </div>
  )
}

export default Home
