import { Col, Divider, Row } from 'antd';
import defaultCard from 'assets/images/banner-mobile.jpg';
import homeMoney from 'assets/images/home.png';
import logo from 'assets/images/logo.png';
import AppButton from 'components/AppButton';
import { H2 } from 'globalStyle.js';
import React from 'react';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';





const SectionMinted = () => (
  <WrapperComponent>
    <Row align="middle" gutter={8}>
      <Col>
        <H2 className="mb-md-0" isOrange style={{textDecoration: "underline"}}> Top Minted NFT </H2>
      </Col>
      <Col>
        <AppButton className="mt-0" content="View All NFT" />
      </Col>
    </Row>

    <H2 isOrange className="pt-3 text-md-center text-left" style={{ fontSize: 21 }}> Please Connect Wallet to Proceed </H2>

    <Row gutter={24} justify="space-between">
      {
        [1, 2, 3].map(() => (
          <Col xs={24} md={7} className="mt-md-0 mt-4">
            <WrapperCard color={COLORS.second}>
              <WrapperImage>
                <img src={defaultCard} alt="" />
              </WrapperImage>
              <Row className="w-100 mt-3 mx-0"
                gutter={24}
                justify="space-between"
                align="center">
                <Col xs={10} className="px-0">
                  <WrapperCardChild>
                    <div>You Own</div>
                    <Divider orientation="center" style={{ background: '#fff' }} className="my-1" />
                    <div>- / -</div>
                  </WrapperCardChild>

                </Col>
                <Col xs={10} className="px-0">
                  <WrapperCardChild>
                    <div>Minted</div>
                    <Divider orientation="center" style={{ background: '#fff' }} className="my-1" />
                    <div>-</div>
                  </WrapperCardChild>

                </Col>
              </Row>
            </WrapperCard>
          </Col>
        ))
      }
    </Row>


    <WrapperTag>
      <div style={{ width: 60 }}>
        <img src={logo} alt="" />
      </div>

      <WrapperTagNote color='#f29d2c'>
        FENNECNFT enables the world's first decentralized stablecoin, VAI, built on Binance Smart Chain that is backed by a basket of stablecoins and crypto assets without centralized control.
      </WrapperTagNote>

      <AppButton content="Learn more" />

      <WrapperHome>
        <div>
          <img src={homeMoney} alt="" />
        </div>
      </WrapperHome>
    </WrapperTag>

  </WrapperComponent >
);

const WrapperComponent = styled.div`
  padding: 50px 100px;

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
`;


const WrapperCard = styled.div`
  background: ${(props) => props.color};

  padding: 10px;

  border-radius: 10px;
  color: white;
  text-align: center;
`;

const WrapperImage = styled.div`
  background: #677583;
  border-radius: 10px;

  width: 100%;
  height: 100%;
`;

const WrapperCardChild = styled.div`
 border-radius: 7px;
 background: #f29d2c;

 padding: 5px;

 width: 100%;
`;

const WrapperTag = styled.div`
  position: relative;
  border-radius: 20px;
  background: #0a2037;

  padding: 30px;

  margin-top: 60px;

`;


const WrapperTagNote = styled.p`
  color: ${(props) => props.color};
  font-size: 16px;
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const WrapperHome = styled.div`
  div {
    width: 30%;
    position: absolute;
    top: -15%;
    right: 0;
  }


`

SectionMinted.propTypes = {

};

export default SectionMinted;
