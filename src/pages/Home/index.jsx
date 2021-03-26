import React from 'react';

import AppLayout from 'components/AppLayout';
import SectionBanner from 'components/SectionBanner';
import SectionPreSale from 'components/SectionPreSale';
import SectionMinted from 'components/SectionMinted';
import SectionMarket from 'components/SectionMarket';

const Home = () => (
  <AppLayout>
    <SectionBanner />
    <SectionPreSale />
    <SectionMinted />
    <SectionMarket />
  </AppLayout>
);

Home.propTypes = {

};

export default Home;
