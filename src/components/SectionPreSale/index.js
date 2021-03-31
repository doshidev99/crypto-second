import React from 'react';
import { Col, Row } from 'antd';
import Countdown from 'react-countdown';


import bgImage from 'assets/images/hr.png';

import { ReactComponent as Contract } from 'assets/images/bscscan.svg';
import { ReactComponent as Telegram } from 'assets/images/telegram.svg';
import { ReactComponent as Twitter } from 'assets/images/twittersvg.svg';
import AppButton from 'components/AppButton';

import { H2, H3 } from 'globalStyle.js';

import { COLORS } from 'rootConstants';
import styled from 'styled-components';

import { useCountdown } from 'hooks/useCountDown'

const listSocial = [{ name: 'Telegram', component: Telegram, link: 'https://t.me/fennecnftofficial' }, { name: 'Twitter', component: Twitter, link: 'https://twitter.com/FennecNft' }, { name: 'Contract', component: Contract, link: 'https://bscscan.com/token/0x7952a0FABcE6b56dC94dbdb1273afE0bD91b57eC' }]

const PreSale = () => {

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Row gutter={24}>
        <Col xs={6}>
          <WrapperCount color={COLORS.primary}>
            {days}
          </WrapperCount>
        </Col>
        <Col xs={6}>
          <WrapperCount color={COLORS.primary}>
            {hours}
          </WrapperCount>
        </Col>
        <Col xs={6}>
          <WrapperCount color={COLORS.primary}>
            {minutes}
          </WrapperCount>
        </Col>
        <Col xs={6}>
          <WrapperCount color={COLORS.primary}>
            {seconds}
          </WrapperCount>
        </Col>
      </Row>

    )
  };

  const [dayFuture] = useCountdown('2021/12/24');
  return (
    <WrapperComponent imgUrl={bgImage}>
      <Row gutter={24} align="middle">
        <Col xs={24} md={14}>
          <WrapperContent>
            <H2 color={COLORS.primary} isOrange style={{ textDecoration: "underline" }}> FENNECNFT </H2>
            <H3 color={COLORS.second} isOrange>Pre-sale Coming Soon</H3>
            <Slogan color={COLORS.second}>
              NFTs has revolutionized Digital Arts quite simply. Non-fungible token (NFT) is a special token that represents a single asset - in this use case, that asset is Digital Arts. Due to the nature of the NFT, these assets are digitally scarce
          </Slogan>


            <Row gutter={24} style={{ color: COLORS.primary, paddingTop: 40 }} justify="flex-start">
              <Col>
                <span style={{ fontWeight: 550 }}>
                  Name:
              </span>
                <span className="font-weight-bold"> FENNECNFT</span></Col>
              <Col>
                <span style={{ fontWeight: 550 }}>
                  Symbol:
              </span>
                <span className="font-weight-bold"> FNC</span> </Col>
            </Row>


            <Row gutter={24} style={{ color: COLORS.primary }} justify="flex-start">
              <Col>
                <span style={{ fontWeight: 550 }}>
                  Total Max Supply:
              </span>
                <span className="font-weight-bold"> 10.000.000 FNC</span><br></br>
              </Col>
              <Col>
                <span style={{ fontWeight: 550 }}>
                  Platform:
              </span>
                <span className="font-weight-bold"> BSC</span> </Col>
            </Row>

            <AppButton content="Learn more" />
          </WrapperContent>
        </Col>
        <Col xs={24} md={{ span: 9, offset: 1 }}>
          <WrapperTimeSale color={COLORS.button}>
            <H2 color="white"> Pre-sale starts in </H2>

            <Countdown
              date={dayFuture}
              renderer={renderer}
              daysInHours
              intervalDelay={0}
              precision={3}
            />
            <BuyNow color={COLORS.primary} onClick={() => window.location = '/buy'}>
              buy now
          </BuyNow>


            <Row gutter={24}>
              {
                listSocial.map((el) => (
                  <Col xs={8}>
                    <Row align="middle">
                      <Col>
                        <div style={{ width: 15, height: 15 }}>
                          <el.component style={{ color: 'white', width: '100%', height: '100%' }} />
                        </div>
                      </Col>
                      <Col className="text-white pl-2">
                        {el.name}
                      </Col>
                    </Row>
                  </Col>
                ))
              }
            </Row>
          </WrapperTimeSale>
        </Col>
      </Row>
    </WrapperComponent>
  )
}

const WrapperComponent = styled.div`
  padding: 100px;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
    background-size: cover;

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
`;
const WrapperContent = styled.div`
`;

const Slogan = styled.div`
  color:  ${(props) => props.color};
  font-weight: 550;
`;


const WrapperCount = styled.div`
  background: white;
  color:  ${(props) => props.color};

  font-weight: bold;
  font-size: 20px;
  border-radius: 6px;
  height: 50px;
  line-height: 50px;
  text-align: center;

`

const WrapperTimeSale = styled.div`
  background: ${(props) => props.color};
  padding: 30px;
  border-radius: 30px;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    padding: 30px 20px;

    width: 100%;
  }
`

const BuyNow = styled.div`
  color:  ${(props) => props.color};
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;

  background: white;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  margin: 0 auto;

  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

`
PreSale.propTypes = {

};

export default PreSale;
