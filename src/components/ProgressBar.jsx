import React from "react";
import styled from "styled-components";

class ProgressBar extends React.Component {
  render() {
    const { progress, barColor } = this.props;
    return (
      <Bar>
        <Fill
          style={
            progress === 100
              ? {
                  height: progress + "%",
                  background: barColor.primary,
                }
              : {
                  height: progress + "%",
                  background: barColor.secondary,
                }
          }
        ></Fill>
      </Bar>
    );
  }
}

export default ProgressBar;

const Bar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #c2c2c2;
  height: 150px;
  width: 3px;
  border-radius: 5px;
  left: 3rem;
  bottom: 1rem;

  @media (max-width: 992px) {
    left: 2rem;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;
const Fill = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
  transform: background 0.15s ease;
`;
