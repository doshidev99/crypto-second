import { Pie } from '@ant-design/charts';
import { Col, Row, Input } from 'antd';
import AppButton from 'components/AppButton';
import { H1, H2, H3, M16 } from 'globalStyle.js';
import React from 'react';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';
import logo from 'assets/images/logo.png';

const BuySectionPreSale = () => {
  const data = [

    {
      type: 'Liquidity',
      value: 70,
    },
    {
      type: 'Referal',
      value: 10,
    },
    {
      type: 'Team',
      value: 20,
    },
  ];
  //
  const config = {
    data: data,
    colorField: 'type',
    color: ['#d62728', '#2ca02c', '#000000'],
    angleField: 'value',
    optional: 'png',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
  };

  return (
    <WrapperComponent>
      <H1 color={COLORS.colorCountDown} style={{ fontSize: 42 }} className="text-center pt-4">
        Presale
    </H1>
      <H2  className="text-center">
        <span style={{color: COLORS.colorCountDown}}>
        ENDS IN
        </span>
         15:12:25:14
    </H2>

      <Row gutter={24} align="middle" justify="space-between">
        <Col xs={24} md={10}>
          <WrapperHeaderCard>
            <Row gutter={24} align="middle" justify="space-between">
              <Col>
                <H2 style={{ fontSize: 20 }} className="mb-0" color={COLORS.colorCountDown}>
                  Presale Details
              </H2>
              </Col>
              <Col>
                <AppButton className="mt-0" content="More info" />
              </Col>
            </Row>
          </WrapperHeaderCard>
          <WrapperChart >
            <div style={{ height: '100%' }}>
              <Pie {...config} style={{ height: '100%' }} />
            </div>
          </WrapperChart>

        </Col>
        <Col xs={24} md={10}>
          <WrapperHeaderCard>
            <Row gutter={24} align="middle" justify="space-between">
              <Col>
                <H2 style={{ fontSize: 20 }} className="mb-0" color={COLORS.colorCountDown}>
                  Buy
              </H2>
              </Col>
              <Col>
                <AppButton className="mt-0" content="Referer" />
              </Col>
            </Row>
          </WrapperHeaderCard>
          <WrapperContent color={COLORS.button} >
            <div style={{ height: '100%' }}>

              <Row align="middle" justify="space-between" className="pb-3">
                <Col>
                  <WrapperLogo>
                    <img src={logo} alt="" />
                  </WrapperLogo>
                </Col>

                <Col>
                  No Min - Max: 30 BNB
              </Col>

                <Col>
                  <WrapperLogo>
                    <img src={logo} alt="" />
                  </WrapperLogo>
                </Col>
              </Row>

              <Input size="small" placeholder="Enter BNB amount" addonAfter={
                <WrapperInInput>
                  MAX
              </WrapperInInput>
              } />

              <Row gutter={24} align="middle" justify="center" className="py-3">
                <Col>
                  <M16 >Recevied:</M16>
                </Col>
                <Col>
                  <Row align="middle" justify="center">
                    <Col>
                      <WrapperAutoPrice>
                        <M16> - MGB</M16>
                      </WrapperAutoPrice>
                    </Col>
                    <Col className="pl-2">
                      <M16 >Instant</M16>

                    </Col>
                  </Row>
                </Col>
              </Row>

              <div className="text-center">Tokens are ....</div>

              <AppButton content="CONNECT" style={{ width: '100%', opacity: 0.7 }} className="mt-0" />
            </div>
          </WrapperContent>
        </Col>
      </Row>
    </WrapperComponent>
  )
};

const WrapperComponent = styled.div`
    background-color: white;
    width: 100%;
    height: 100vh;
    padding: 100px 100px 0px 100px;

    @media only screen and (max-width: 768px) {
      padding: 30px;
      background-image: url(${(props) => props.bgMobile});
      background-repeat: no-repeat;
      background-size: cover;
      background-color: white;
      height: 100%;
      box-shadow:inset 0 0 0 2000px rgb(255, 102, 0, 0.8);
  }

`;


const WrapperHeaderCard = styled.div`
  border: 3px solid #f29d2c;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  padding: 10px 20px;
`

const WrapperChart = styled.div`

  border: 3px solid #f29d2c;
  border-top: 0px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  padding: 20px;

  height: 300px;
`

const WrapperContent = styled.div`
  height: 100%;
  border: 3px solid #f29d2c;
  border-top: 0px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  padding: 20px 50px;

  .input-search {
    border: 1px solid #f29d2c;
    border-radius: 5px;
    overflow: hidden;
  }

  .ant-input-group-wrapper{
    color: black !important;
    border: 1px solid #f29d2c !important;
    height: 38px;
    border-radius: 5px;
    overflow: hidden;

    &:focus {
      border: 1px solid #f29d2c !important;
    }

    input {
      height: 38px;
      outline: none;
    padding-left: 10px;


      &:focus {
        border: none;
      }
      &::placeholder {
        color: black;
        text-align: center;
      }
    }
  }

  .ant-input-group-addon {

    background: ${(props) => props.color};

    border: none;
    color: white;
    opacity: 0.7;

    height: 100%;
  }

  .input-max {
    background: red;
  }

`
const WrapperLogo = styled.div`
width: 50px;

`
const WrapperInInput = styled.div`

`

const WrapperAutoPrice = styled.div`

  border: 1px solid #f29d2c;
  padding: 5px 10px;
  border-radius: 5px;
`

BuySectionPreSale.propTypes = {

};

export default BuySectionPreSale;
