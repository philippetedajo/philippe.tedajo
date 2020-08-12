import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return (
    <Text className="mb-5 mt-5 pb-4 pt-4">
      <Icon src={props.icon} alt="title-icon" />
      {props.title}
    </Text>
  );
};

export default Title;

const Text = styled.h1`
  font-weight: 500;
  color: #73737d;
  display: flex;
`;

const Icon = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 2rem;
`;
