import React from "react"

const RepoSlider = data => {
  console.log(data)
  return (
    <div className="d-flex flex-column flex-md-row justify-content-end justify-content-md-between align-items-center h-100 repo-slider">
      <div className="box-slide">
        <div className="repo-number">#01</div>
        <div className="repo-title">Title 1</div>
      </div>
      <div className="next-control">
        <span>Previous</span>
      </div>
      <div className="previous-control">
        <span>Next</span>
      </div>
    </div>
  )
}

export default RepoSlider
