import SectionBanner from 'components/SectionBanner';
import SectionMarket from 'components/SectionMarket';
import SectionMinted from 'components/SectionMinted';
import SectionPreSale from 'components/SectionPreSale';
import React from 'react';


const Home = () => (
  <>
    <SectionBanner />
    <SectionPreSale />
    <SectionMinted />
    <SectionMarket />
  </>
);

Home.propTypes = {

};

export default Home;
