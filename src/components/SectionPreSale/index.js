import { Col, Row } from 'antd';
import { ReactComponent as Contract } from 'assets/images/bscscan.svg';
import bgImage from 'assets/images/hr.png';
import { ReactComponent as Telegram } from 'assets/images/telegram.svg';
import { ReactComponent as Twitter } from 'assets/images/twittersvg.svg';
import AppButton from 'components/AppButton';
import { H2, H3 } from 'globalStyle.js';
import React from 'react';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';





const listSocial = [{ name: 'Telegram', component: Telegram }, { name: 'Twitter', component: Twitter }, { name: 'Contract', component: Contract }]

const PreSale = () => (
  <WrapperComponent imgUrl={bgImage}>
    <Row gutter={24} align="middle">
      <Col xs={24} md={14}>
        <WrapperContent>
          <H2 color={COLORS.primary} isOrange> FENNECNFT </H2>
          <H3 color={COLORS.second} isOrange>Pre-sale Coming Soon</H3>

          <Slogan color={COLORS.second}>
            Fennucnft aims to be the first fully decentralized exchange and on-chain staking protocol that allows users to earn rewards from other liquidity pools as well as perform token swaps.
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
              <span className="font-weight-bold"> FNT</span> </Col>
          </Row>


          <Row gutter={24} style={{ color: COLORS.primary }} justify="flex-start">
            <Col>
              <span style={{ fontWeight: 550 }}>
                Total Supply:
            </span>
              <span className="font-weight-bold"> 800.000.000</span></Col>
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

          <Row gutter={24}>
            <Col xs={6}>
              <WrapperCount color={COLORS.primary}>
                0
              </WrapperCount>
            </Col>
            <Col xs={6}>
              <WrapperCount color={COLORS.primary}>
                10
              </WrapperCount>
            </Col>
            <Col xs={6}>
              <WrapperCount color={COLORS.primary}>
                3
              </WrapperCount>
            </Col>
            <Col xs={6}>
              <WrapperCount color={COLORS.primary}>
                22
              </WrapperCount>
            </Col>
          </Row>

          <BuyNow color={COLORS.primary}>
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
);

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
