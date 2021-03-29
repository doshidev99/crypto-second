import { Menu, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { listMenu } from 'rootConstants';
import styled from 'styled-components';
import { WrapperConnect, WrapperMenu } from './styled';

const MenuDesktop = ({ isFooter }) => {

  const { pathname } = useLocation();
  const { isConnected } = useSelector((state) => state.w3Reducer);

  const handleConnect = () => {
    window?.ethereum?.enable().then(res => res?.length > 0 && window.location.reload());
  }

  return (
    <WrapperComponent>
      <Menu style={{ background: 'none', border: 'none', fontSize: 16 }}>
        <Row align="middle" justify="space-between">
          {
            listMenu.map((menu) => (
              <Menu.Item key={menu.name}>
                <WrapperMenu>
                  <NavLink to={menu.path} className={`${menu.path === pathname && 'activeMenu'}`}>
                    {
                      menu.name
                    }

                  </NavLink>
                </WrapperMenu>
              </Menu.Item>
            ))
          }

          <Menu.Item>
            <WrapperMenu>
              {
                isConnected ? (
                  <WrapperConnect>
                    Connected
                  </WrapperConnect>
                ) : (
                  <WrapperConnect onClick={handleConnect}>
                    Connect Metamask
                  </WrapperConnect>
                )
              }
            </WrapperMenu>
          </Menu.Item>
        </Row>
      </Menu>
    </WrapperComponent>
  )
}

const WrapperComponent = styled.div`

  .activeMenu {
    border-bottom: 2px solid red;
    padding-bottom: 10;
    border-radius: 5;
  }
`;

MenuDesktop.propTypes = {

};

export default MenuDesktop;
