import { gsap, Power3 } from "gsap"
import React, { useEffect, useRef, useState } from "react"
import { Container } from "../components"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import RepoSlider from "../components/RepoSlider"
import "../styles/me.css"

const Me = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(
        relativePath: { eq: "xavier-von-erlach-ySv9xncaq3A-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      # github data
      allGithubData {
        nodes {
          rawResult {
            data {
              viewer {
                bio
                name
                pinnedItems {
                  totalCount
                  nodes {
                    description
                    forkCount
                    id
                    name
                    stargazerCount
                    languages {
                      nodes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const repoData =
    data.allGithubData.nodes[0].rawResult.data.viewer.pinnedItems.nodes

  /* About REF === */
  const about = useRef(null)
  const title = useRef(null)
  const subtitle = useRef(null)
  const links = useRef(null)
  const projects = useRef(null)
  const pictureWrapper = useRef(null)
  const picture = useRef(null)

  useEffect(() => {
    gsap.to(about.current, {
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
  }, [about, title, subtitle, links, picture, projects])

  return (
    <>
      <Container viewHeight="80vh">
        <div className="about " id="about" ref={about}>
          <div className="inner-container h-100 d-flex flex-lg-row flex-column-reverse align-items-center justify-content-center justify-content-lg-between w-100 mb-5">
            <div className="para d-flex flex-column justify-content-center  col-lg-5  pt-5">
              <div className="w-title-about mt-5 ">
                <h2
                  className="text-center text-lg-left title-about "
                  ref={title}
                >
                  A little about me
                </h2>
              </div>
              <div className=" w-subtitle-about">
                <p
                  className="text-center text-lg-left  subtitle-about"
                  ref={subtitle}
                >
                  Hello and welcome, as a supporter of "simplicity", I focus on
                  user needs to build intuitive digital interfaces, offering a
                  memorable user experience. I work at Bhent.inc as a front end
                  developer for several types of projects and my area of
                  expertise goes from javascript to python programming
                  language.longly inspired by Indian philosophy and culture, all
                  my life and work is design by it.
                </p>
              </div>
            </div>
            <div className="w-picture-about" ref={pictureWrapper}>
              <div className="picture-about" ref={picture}>
                <Img fluid={data.about.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* ---- */}
      <div className="w-project-links-about d-flex justify-content-end">
        <h6
          className="text-center text-lg-left project-links-about"
          ref={links}
        >
          <Link to="/projects">POWER OF IMAGINATION</Link>
        </h6>
      </div>
      <Container viewHeight="100vh">
        <RepoSlider data={repoData} />
      </Container>
    </>
  )
}

export default Me
