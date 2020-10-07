import React from "react";
import styled from "styled-components";
import Sample from "../pictures/anothersample.jpg";
import { FiGithub } from "react-icons/fi";
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react";

class Repo extends React.Component {
  render() {
    const { name, forks_count, stargazers_count, html_url } = this.props.repoData;
    return (
      <Anchor
        href={html_url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Meta>
          <span className="mr-2">
            <StarIcon /> {stargazers_count}
          </span>
          <span className="mr-2">
            <RepoForkedIcon /> {forks_count}
          </span>
          <span>
            <FiGithub />
          </span>
        </Meta>
        <div>{name}</div>
      </Anchor>
    );
  }
}

export default Repo;

const Anchor = styled.a`
  width: 15rem;
  height: 135px;
  width: 240px;
  margin: 1rem;
  text-decoration: none !important;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-radius: 5px !important;
  padding: 1rem;
  background-image: url(${Sample});
  background-size: contain;
  -webkit-transition: transform 1s cubic-bezier(0.25, 1, 0.25, 1);

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    color: #0994f0;
    transform: scale(1.1);
    -webkit-transition: transform 1s cubic-bezier(0.25, 1, 0.25, 1);
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: flex-end;
`;
