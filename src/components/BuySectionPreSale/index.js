import { Pie } from '@ant-design/charts';
import { Col, Row } from 'antd';
import AppButton from 'components/AppButton';
import { H1, H2, H3 } from 'globalStyle.js';
import React from 'react';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';

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
      <H1 color={COLORS.colorCountDown} style={{ fontSize: 36 }} className="text-center">
        Presale
    </H1>
      <H2>
        ENDS IN 15:12:25:14
    </H2>

      <Row gutter={24} align="middle">
        <Col xs={24} md={10}>
          <WrapperHeaderCard>
            <Row gutter={24} align="middle" justify="space-between">
              <Col>
                <H2 style={{ fontSize: 20 }} className="mb-0" color={COLORS.primary}>
                  Presale Details
              </H2>
              </Col>
              <Col>
                <AppButton className="mt-0" content="More info" />
              </Col>
            </Row>
          </WrapperHeaderCard>
          <WrapperChart>
            <Pie {...config} />
          </WrapperChart>

        </Col>
      </Row>
    </WrapperComponent>
  )
};

const WrapperComponent = styled.div`
    background-color: white;
    width: 100%;
    height: 100vh;
    padding: 100px;
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

BuySectionPreSale.propTypes = {

};

export default BuySectionPreSale;
