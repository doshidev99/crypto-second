import { Button, Col, Dropdown, Menu, Row } from 'antd';
import logo from 'assets/images/logo.png';
import MenuDesktop from 'components/MenuDesktop';
import React, { memo } from 'react';
import { useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import * as D from './styled';



const listMenu = [
  {
    name: 'NFT',
    path: '/',
  },
  {
    name: 'Markets',
    path: '/markets',
  },
  {
    name: 'Buy',
    path: '/buy',
  },
  {
    name: 'Exchange',
    path: '/exchange',
  },
  {
    name: 'Docs',
    path: '/docs',
  },
];

const MenuMobile = ({ connected }) => {

  const handleConnect = () => {
    window?.ethereum?.enable().then(res => res?.length > 0 && window.location.reload());
  }
  return (
    <Menu className="menu-mobile">
      {
        listMenu.map((menu) => (
          <Menu.Item>
            <NavLink to={menu.path}>
              <D.WrapperMenuMobile>
                {menu.name}
              </D.WrapperMenuMobile>
            </NavLink>
          </Menu.Item>
        ))
      }

      <Menu.Item>
        <D.WrapperMenu>
          {
            connected ? (
              <D.WrapperConnectMobile>
                Connected
              </D.WrapperConnectMobile>
            ) : (
              <D.WrapperConnectMobile onClick={handleConnect}>
                Connect Metamask
              </D.WrapperConnectMobile>
            )
          }
        </D.WrapperMenu>
      </Menu.Item>

    </Menu>

  )
};

const AppHeader = () => {

  const { pathname } = useLocation();

  const { isConnected } = useSelector((state) => state.w3Reducer);

  return (
    <D.WrapperHeader isBg={pathname !== '/'}>
      <Row gutter={24} align="middle" justify="space-between">
        <Col xs={12} md={10}>
          <div className="w-100">
            <D.WrapperImg>
              <img src={logo} alt="" />
            </D.WrapperImg>
          </div>
        </Col>
        <Col xs={12} md={14} style={{ textAlign: 'right' }}>
          <div className="d-md-block d-none">
            <MenuDesktop connected={isConnected} />
          </div>
          <div className="d-md-none d-block">
            <Dropdown overlay={<MenuMobile connected={isConnected} />} placement="bottomCenter">
              <D.WrapperButton>
                <Button>
                  Open Menu
              </Button>
              </D.WrapperButton>
            </Dropdown>
          </div>
        </Col>
      </Row>

    </D.WrapperHeader>

  )
};

AppHeader.propTypes = {

};

AppHeader.defaultProps = {
  connected: false
}

export default memo(AppHeader);
