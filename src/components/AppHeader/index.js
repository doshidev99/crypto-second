import { Button, Col, Drawer, Menu, Row } from 'antd';
import logo from 'assets/images/logo.png';
import MenuDesktop from 'components/MenuDesktop';
import React, { memo, useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import * as D from './styled';


const listMenu = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'NFT',
    path: '/nft',
  },
  {
    name: 'Bank',
    path: '/bank',
  },
  {
    name: 'Buy',
    path: '/buy',
  },
  {
    name: 'Airdrops',
    path: '/airdrop',
  },
  {
    name: 'Docs',
    path: 'docs',
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
          menu.path === 'docs' ?
            <Menu.Item>
              <D.WrapperMenuMobile>
                <a href="https://docs.fennecnft.com" target="_blank" rel="noreferrer" style={{color: 'white'}}>{menu.name}</a>
              </D.WrapperMenuMobile>
            </Menu.Item> :
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

  const [visible, setVisible] = useState(false)

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
            <D.WrapperButton>
              <Button onClick={() => setVisible(true)}>
                Menu
              </Button>
            </D.WrapperButton>
            <Drawer
              placement="right"
              closable={false}
              visible={visible}
              onClose={() => setVisible(false)}
            >
              <MenuMobile />
            </Drawer>
          </div>
        </Col>
      </Row>

    </D.WrapperHeader >

  )
};

AppHeader.propTypes = {

};

AppHeader.defaultProps = {
  connected: false
}

export default memo(AppHeader);