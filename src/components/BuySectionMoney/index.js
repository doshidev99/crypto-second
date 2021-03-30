import { Col, Row } from 'antd';
import { M14, M16, M20 } from 'globalStyle.js';
import React from 'react';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';


const listCoin = [{
  name: 'Presale',
  coin: '1,400,000'
},
{
  name: 'Airdrops',
  coin: '100,000'
},
{
  name: 'Marketing',
  coin: '300.000'
},
{
  name: 'Develope',
  coin: '200.000'
},
]

const BuySectionMoney = () => (
  <WrapperComponent>

    <Row gutter={24} align="middle" justify="space-between">

      <Col md={6} xs={24} >
        <WrapperListCoin>
          <M16 className="text-center" color={COLORS.colorCountDown}> No Min - Max: 10 BNB </M16>

          {
            listCoin.map(coin => (
              <Row align="middle" justify="space-between" className="py-2">
                <Col>
                  <M14 color={COLORS.second}>
                    {coin.name}
                  </M14>
                </Col>
                <Col>
                  <M14 color={COLORS.second}>
                    {coin.coin} FNC
              </M14>
                </Col>
              </Row>
            ))
          }

        </WrapperListCoin>
      </Col>


      <Col md={9} xs={12} className="mt-md-0 mt-3" >
        <WrapperHeaderCard className="text-center">
          <M20 color={COLORS.colorCountDown} className="pb-2">
            Presale Price

          </M20>

          <M16 color={COLORS.second}>
            1 BNB = 2500 FNC
        </M16>
        </WrapperHeaderCard>

        <WrapperContentBottom className="text-center">
          <M20 color={COLORS.colorCountDown} className="pb-2">
            Liquidity Price

          </M20>

          <M16 color={COLORS.second}>
            1 BNB = 1250 FNC
        </M16>
        </WrapperContentBottom>
      </Col>

      <Col md={9} xs={12} className="mt-md-0 mt-3">
        <WrapperHeaderCard className="text-center">
          <M20 color={COLORS.colorCountDown} className="pb-2">
            Total Sold
          </M20>

          <M16 color={COLORS.second}>
            0 BNB
        </M16>
        </WrapperHeaderCard>

        <WrapperContentBottom className="text-center">
          <M20 color={COLORS.colorCountDown} className="pb-2">
            Hard Cap
          </M20>

          <M16 color={COLORS.second}>
            560 BNB
        </M16>
        </WrapperContentBottom>
      </Col>

    </Row>
  </WrapperComponent>
);

const WrapperComponent = styled.div`
   background-color: white;
    width: 100%;
    padding: 0 100px 30px 100px;
    @media only screen and (max-width: 768px) {
      padding: 30px;
      height: 100%;
  }
`;

const WrapperListCoin = styled.div`
  border: 2px solid #f29d2c;
  border-radius: 10px;

  padding: 20px;

`;



const WrapperHeaderCard = styled.div`
  border: 3px solid #f29d2c;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  padding: 10px 20px;
`



const WrapperContentBottom = styled.div`

  border: 3px solid #f29d2c;
  border-top: 0px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  padding: 20px;
`


BuySectionMoney.propTypes = {

};
export default BuySectionMoney;
