import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Sample from "../pictures/anothersample.jpg";
import { FiGithub } from "react-icons/fi";
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react";

class Repo extends React.Component {
  render() {
    const { name, forks_count, stargazers_count } = this.props.repoData;
    return (
      <CardRepo style={{ width: "15rem" }} className="bg-dark text-white">
        <Card.Img src={Sample} alt="Card image" />
        <CardOverlay>
          <Info>
            <Group>
              <Card.Text className="mr-2">
                <span className="mr-2">
                  <StarIcon /> {stargazers_count}
                </span>
              </Card.Text>
              <Card.Text className="mr-2">
                <span className="mr-2">
                  <RepoForkedIcon /> {forks_count}
                </span>
              </Card.Text>
              <Card.Text>
                <a
                  href="https://github.com/philippetedajo"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mr-2"
                >
                  <FiGithub />
                </a>
              </Card.Text>
            </Group>
            <RepoTitle className="mt-5">{name}</RepoTitle>
          </Info>
        </CardOverlay>
      </CardRepo>
    );
  }
}

export default Repo;

const CardRepo = styled(Card)`
  border: none;
  border-radius: 15px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  & :hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RepoTitle = styled(Card.Text)``;
const CardOverlay = styled(Card.ImgOverlay)`
  margin: 0;
  padding: 8px;
`;
const Group = styled.div`
  display: flex;
  justify-content: flex-end;
`;
