import React from "react"
import "../styles/project.css"

const Project = () => {
  const Project = ["Lorem", "Lorem", "Lorem"]

  return (
    <div className="p-md-5">
      <h2 className="text-center text-lg-left mt-3 mt-lg-0">SOME PROJECTS</h2>
      <ul className="d-flex flex-column">
        {Project.map(p => (
          <a className="projet" href="">
            Lorem ipsum
          </a>
        ))}
      </ul>
    </div>
  )
}

export default Project
