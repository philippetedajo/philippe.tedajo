import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const Home = () => {
  return (
    <div className="mt-5 pt-3">
      <Col className="mb-5 p-0">
        <Title className="font-title">Front-end Developer</Title>
      </Col>
      <P className=" col-11 mb-3 p-0">
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat Nam libero tempore, cum soluta nobis est eligendi
        optio cumque nihil impedit quo minus id quod maxime placeat facere
        possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        Temporibus autem quibusdam et
      </P>
    </div>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 95px;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #2a2a72 0%, #009ffd 45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 55px;
  }
`;

const P = styled.p`
  text-align: justify;
`;
