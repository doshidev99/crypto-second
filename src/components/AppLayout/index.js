import React from 'react';

import PropTypes from 'prop-types';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

const AppLayout = ({ children }) => (
  <>
    <AppHeader />
    {children}
    <AppFooter />
  </>
);

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};



export default AppLayout;
