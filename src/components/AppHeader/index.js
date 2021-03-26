import {
  Col, Menu, Row, Dropdown, Button,
} from 'antd';
import logo from 'assets/images/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as D from './styled';


import MenuDesktop from 'components/MenuDesktop'

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

const menuMobile = () => (
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
        <D.WrapperConnectMobile>
          Connected
        </D.WrapperConnectMobile>
      </D.WrapperMenu>
    </Menu.Item>

  </Menu>

);

const AppHeader = () => (
  <D.WrapperHeader>
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
          <MenuDesktop />
        </div>
        <div className="d-md-none d-block">
          <Dropdown overlay={menuMobile} placement="bottomCenter">
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

);

AppHeader.propTypes = {

};

export default AppHeader;
