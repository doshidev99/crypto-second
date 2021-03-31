import React from 'react';


import SectionBanner from 'components/SectionBanner';
import SectionMarket from 'components/SectionMarket';
import SectionMinted from 'components/SectionMinted';
import SectionPreSale from 'components/SectionPreSale';



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
