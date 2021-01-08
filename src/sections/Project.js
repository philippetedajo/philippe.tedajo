import React from "react"
import "../styles/project.css"

const Project = () => {
  const projects = [
    { name: "Nextwind.", link: "https://nextwind-snowy.vercel.app/" },
    { name: "Reminder.", link: "https://reminderapp.netlify.app/" },
    { name: "BookCart.", link: "https://bookcart.netlify.app/" },
  ]

  return (
    <div className="projects p-md-5 fade-in">
      <h2 className="text-center text-lg-left mt-3 mt-lg-0">SOME PROJECTS</h2>
      <ul className="d-flex flex-column">
        {projects.map(p => (
          <a className="projet" href={p.link}>
            {p.name}
          </a>
        ))}
      </ul>
    </div>
  )
}

export default Project
