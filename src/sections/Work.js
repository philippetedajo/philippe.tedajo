import { gsap, Power3 } from "gsap"
import React, { useEffect, useRef } from "react"
import { Container } from "../components"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/work.css"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      work: file(relativePath: { eq: "andrew-neel-1-29wyvvLJA-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      # github data
      allGithubData {
        nodes {
          data {
            viewer {
              repositories {
                nodes {
                  description
                  url
                  forkCount
                  stargazers {
                    totalCount
                  }
                }
              }
              name
            }
          }
        }
      }
      #
    }
  `)
  const reponame = data.allGithubData.nodes[0].data.viewer.name

  /* Work REF === */
  const work = useRef(null)
  const title = useRef(null)
  const subtitle = useRef(null)
  const links = useRef(null)
  const projects = useRef(null)
  const pictureWrapper = useRef(null)
  const picture = useRef(null)

  useEffect(() => {
    gsap.to(work.current, {
      visibility: "visible",
    })
    gsap.from(
      [title.current, subtitle.current, links.current, projects.current],
      {
        duration: 2,
        ease: Power3.easeOut,
        y: 164,
        autoAlpha: 0,
        stagger: 0.4,
      }
    )
    gsap.from(picture.current, {
      duration: 2,
      ease: Power3.easeInOut,
      scale: 2,
      autoAlpha: 0,
    })
  }, [work, title, subtitle, links, picture, projects])

  return (
    <>
      <Container viewHeight="80vh">
        <div className="work " id="work" ref={work}>
          <div className="inner-container h-100 d-flex flex-lg-row flex-column-reverse align-items-center justify-content-center justify-content-lg-between w-100 mb-5">
            <div className="para col-lg-4 mt-5">
              <div className="w-title-work">
                <h2 className="text-center text-lg-left title-work" ref={title}>
                  THE POWER OF IMAGINATION
                </h2>
              </div>
              <div className="my-3 w-subtitle-work">
                <p
                  className="text-center text-lg-left subtitle-work"
                  ref={subtitle}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae
                </p>
              </div>
              <div className="w-project-links-work">
                <h6
                  className="text-center text-lg-left project-links-work"
                  ref={links}
                >
                  <Link to="/projects">View more</Link>
                </h6>
              </div>
            </div>
            <div className="w-picture-work" ref={pictureWrapper}>
              <div className="picture-work" ref={picture}>
                <Img fluid={data.work.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* ---- */}
      <Container viewHeight="80vh">
        <div className="projects-container">
          <div className="prj">{reponame}</div>
          <div className="prj">{reponame}</div>
          <div className="prj">{reponame}</div>
          <div className="prj">{reponame}</div>
          <div className="prj">{reponame}</div>
        </div>
      </Container>
    </>
  )
}

export default Work
