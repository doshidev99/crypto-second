import { Col, Row } from 'antd';
import jarMoney from 'assets/images/jar.png';
import { H1, H2 } from 'globalStyle.js';
import React from 'react';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';





const SectionMarket = () => (
  <WrapperComponent>
    <H2 className="mb-md-0  pb-5 text-center" isOrange> Markets </H2>

    <Row gutter={24} justify="space-between" align="middle">
      <Col xs={24} md={12}>
        <div>
          <img src={jarMoney} alt="" />
        </div>
      </Col>
      <Col xs={24} md={12}>

        <WrapperContent>
          <H2 color={COLORS.primary}> Protocol </H2>
          <H1 color={COLORS.second}>Money Markets built on Binance Smart Chain</H1>
          <Slogan color={COLORS.second}>
            You can now tokenize your assets utilizing the Binance Smart Chain and receive portable vTokens that you can freely move around to cold storage, transfer to other users, and more.
        </Slogan>

          <ReadButton>
            Read the Whitepaper
        </ReadButton>
        </WrapperContent>
      </Col>
    </Row>
  </WrapperComponent>
);

const WrapperComponent = styled.div`
  padding: 50px 100px;

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const WrapperContent = styled.div``;


const Slogan = styled.div`
  color:  ${(props) => props.color};
  font-weight: 550;
  font-size: 18px;
  width: 100%;

  padding-bottom: 10px;

`;


const ReadButton = styled.div`
  background: #0a2037;
  padding: 10px 15px;
  margin-top: 20px;
  width: 180px;
  text-align: center;

  color: white;
  font-weight: bold;
  cursor: pointer;

  font-size: 14px;

`
SectionMarket.propTypes = {

};

export default SectionMarket;
