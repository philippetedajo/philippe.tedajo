import React, { useState, useEffect } from "react";
import "./styles/Slides.css";
import Octicon, { MarkGithub, Star, RepoForked } from "@primer/octicons-react";
import Lotties from "../toolsComponents/Lotties";
import LoaderRing from "../assets/anim/loader-ring.json";

function Slides() {
  const [items, setItems] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const url = "https://api.github.com/users/philippetedajo/repos";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setIsloading(false);
        setItems(data);
      });
  }, []);

  if (isloading) {
    return (
      <div className="mt-5">
        <Lotties
          animationData={LoaderRing}
          lh="5vw"
          lw="5vw"
          mh="10vw"
          mw="10vw"
        ></Lotties>
      </div>
    );
  } else {
    return (
      <div className="repos-container mt-5">
        {items.map(repos => (
          <div key={repos.node_id} className="repo shadow">
            <div className="repo-title">
              <p className="repo-name mt-3">{repos.name}</p>
              <p className="repo-description mt-2">{repos.description}</p>
            </div>
            <div className="repo-details">
              <div className="repo-details-items">
                <div className="details-items mr-3">
                  <span className="mr-1">
                    <Octicon icon={Star} />
                  </span>
                  <p className="repo-stars">{repos.stargazers_count}</p>
                </div>
                <div className="details-items mr-3">
                  <span className="mr-1">
                    <Octicon icon={RepoForked} />
                  </span>
                  <p className="repo-forks">{repos.forks_count}</p>
                </div>
                <a
                  href={repos.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Octicon icon={MarkGithub} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Slides;
