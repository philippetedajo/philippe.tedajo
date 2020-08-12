import React from "react";
import styled from "styled-components";
import ProfilePicture from "../pictures/profile.png";
import { FiToggleRight, FiToggleLeft } from "react-icons/fi";

class Header extends React.Component {
  handleOnclikResume = () => {
    console.log("show resume...");
  };

  render() {
    const themeSwitch =
      this.props.onALLthemeProps === "light" ? (
        <FiToggleRight
          style={{ cursor: "pointer", color: "#73737d" }}
          onClick={this.props.onTheming}
          size={30}
        />
      ) : (
        <FiToggleLeft
          style={{ cursor: "pointer", color: "#73737d" }}
          onClick={this.props.onTheming}
          size={30}
        />
      );

    return (
      <HeaderContainer className="mb-4">
        <Head>
          <Name className="font-name">Philippe Tedajo</Name>
          <Switcher>{themeSwitch}</Switcher>
        </Head>

        <ProfileContainer>
          <a
            href="https://github.com/philippetedajo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Profile alt="profile" src={ProfilePicture} />
          </a>
          <SubText>Building Universes One Pixel at a Time</SubText>
        </ProfileContainer>
        <ShowResume
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -30, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <button
            onClick={this.handleOnclikResume}
            style={{ background: "#00D1B2", color: "#fff" }}
            type="button"
            className="btn mt-4 mt-sm-0"
          >
            Resume
          </button>
        </ShowResume>
      </HeaderContainer>
    );
  }
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/* Head */
const Head = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div`
  text-decoration: none;
  margin-bottom: 2rem;
  font-size: 35px;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #2a2a72 0%, #009ffd 45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Switcher = styled.div`
  margin-top: 6.5rem;
  @media (max-width: 540px) {
    margin-top: 5rem;
  }
`;

/* Profil */
const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 1.5rem 0;
`;
const Profile = styled.img`
  padding: 4px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.55);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
  }
`;
const SubText = styled.h6`
  margin: 0 1rem;
  color: #73737d;
`;

/* Resume */
const ShowResume = styled.div`
  display: flex;
  justify-content: flex-end;
`;
