import React from 'react';

import styled from 'styled-components';
import { Col, Row, Input } from 'antd';
import { H1, H2, H3, M14, M16, M20 } from 'globalStyle.js';
import { COLORS } from 'rootConstants';


const listCoin = [{
  name: 'Presale',
  coin: '180,000'
},
{
  name: 'Liquidity',
  coin: '85,000'
},
{
  name: 'Team',
  coin: '35,000'
},
{
  name: 'Marketing',
  coin: '30,000'
},
]
const BuySectionMoney = () => (
  <WrapperComponent>

    <Row gutter={24} align="middle" justify="space-between">

      <Col xs={6}>
        <WrapperListCoin>
          <M16 className="text-center" color={COLORS.colorCountDown}> No Min - Max: 30 BNB </M16>

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
                    {coin.coin} MGB
              </M14>
                </Col>
              </Row>
            ))
          }

        </WrapperListCoin>
      </Col>


      <Col xs={9}>
        <WrapperHeaderCard className="text-center">
          <M20 color={COLORS.colorCountDown} className="pb-2">
            Presale Price

          </M20>

          <M16 color={COLORS.second}>
            1 BNB = 99 MGB
        </M16>
        </WrapperHeaderCard>

        <WrapperContentBottom className="text-center">
          <M20 color={COLORS.colorCountDown} className="pb-2">
            Presale Price

          </M20>

          <M16 color={COLORS.second}>
            1 BNB = 99 MGB
        </M16>
        </WrapperContentBottom>
      </Col>

      <Col xs={9}>
        <WrapperHeaderCard className="text-center">
          <M20 color={COLORS.colorCountDown} className="pb-2">
            Listing Price
          </M20>

          <M16 color={COLORS.second}>
            107.4 BNB
        </M16>
        </WrapperHeaderCard>

        <WrapperContentBottom className="text-center">
          <M20 color={COLORS.colorCountDown} className="pb-2">
            Hard Cap
          </M20>

          <M16 color={COLORS.second}>
            300 BNB
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
      background-image: url(${(props) => props.bgMobile});
      background-repeat: no-repeat;
      background-size: cover;
      background-color: white;
      height: 100%;
      box-shadow:inset 0 0 0 2000px rgb(255, 102, 0, 0.8);
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
