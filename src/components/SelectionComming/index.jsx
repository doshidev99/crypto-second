
import bg from "assets/images/bgAidrop.jpg";
import { H1 } from "globalStyle.js";
import React, { memo } from "react";
import styled from "styled-components";

const AirDrop = () => {

  return (
    <>
      <WrapperComponent bg={bg}>
        <H1
          className="text-center pt-md-3 pt-5 mt-md-0 mt-5"
          style={{ color: "#0a1f37" }}
        >
          {" "}
          COMING SOON !!!{" "}
        </H1>
      </WrapperComponent>
    </>
  );
};

const WrapperComponent = styled.div`
  box-sizing: border-box;
  min-height: 65vh;
  width: 100%;
  padding: 250px 100px 150px 100px;
  background-size: cover;
  background-image: url(${(props) => props.bg});
  color: #455c80;
  text-align: center;
  background-position-x: center;
  @media only screen and (max-width: 768px) {
    padding: 30px;
    height: 100%;

    background: white;
  }
`;

AirDrop.propTypes = {};

export default memo(AirDrop);
