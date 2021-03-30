import bgDesktop from 'assets/images/banner.png';
import bgMobile from 'assets/images/coin.png';
import AppButton from 'components/AppButton';
import { H1, H2 } from 'globalStyle.js';
import React from 'react';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';





const BannerComponent = () => (
  <WrapperComponent imgUrl={bgDesktop} bgMobile={bgMobile}>
    <WrapperContent>
      <H2 color={COLORS.primary}> FENNECNFT </H2>
      <H1 color={COLORS.second}>Money Markets</H1>
      <Slogan color={COLORS.second}>
        A Decentralized Marketplace for Lenders and Borrowers with Borderless Stablecoins.<br></br>
       Coming soon...
    </Slogan>

      <AppButton content="Launch App" />
    </WrapperContent>

  </WrapperComponent>
);


const WrapperComponent = styled.div`
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
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




const WrapperContent = styled.div`
  padding-top: 100px;

  @media only screen and (max-width: 768px) {
    padding-top: 100px;
  }
`

const Slogan = styled.div`
  color:  ${(props) => props.color};
  font-weight: 550;
  font-size: 18px;
  width: 40%;

  padding-bottom: 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;


BannerComponent.propTypes = {
};

export default BannerComponent;
