import BuySectionMoney from 'components/BuySectionMoney';
import BuySectionPreSale from 'components/BuySectionPreSale';
import React, { memo } from 'react';


const Buy = ({ connected }) => (
  <>
    <BuySectionPreSale />
    <BuySectionMoney />
  </>
);

Buy.propTypes = {

};

export default memo(Buy);
