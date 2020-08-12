import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { Repo, Title, Lotties } from "../components";
import Ring from "../assets/animations/loader-ring.json";
import Cargo from "../assets/others/cargo-ship.svg";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      reposistoryData: [],
    };
  }

  componentDidMount() {
    const url = "https://api.github.com/users/philippetedajo/repos";
    this.setState({ loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ loading: false });
        this.setState({ reposistoryData: data });
      });
  }

  render() {
    //console.log(this.state.reposistoryData[0]);
    return this.state.loading === true ? (
      <Lotties
        animationData={Ring}
        lh="5vw"
        lw="5vw"
        mh="10vw"
        mw="10vw"
      ></Lotties>
    ) : (
      <div className="mt-2 pt-2">
        <Title title="Github projects" icon={Cargo}></Title>

        <RepoContainer>
          {this.state.reposistoryData.map((repo) => (
            <Repo key={repo.id} repoData={repo} />
          ))}
        </RepoContainer>
      </div>
    );
  }
}

export default Work;

const RepoContainer = styled(Col)`
  display: flex;
  flex-wrap: wrap;
`;
