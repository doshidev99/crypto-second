import AppLayout from 'components/AppLayout';
import BuySectionPreSale from 'components/BuySectionPreSale';
import BuySectionMoney from 'components/BuySectionMoney';
import React from 'react';


const Buy = () => (
  <AppLayout>
    <BuySectionPreSale />
    <BuySectionMoney />
  </AppLayout>
);

Buy.propTypes = {

};

export default Buy;
