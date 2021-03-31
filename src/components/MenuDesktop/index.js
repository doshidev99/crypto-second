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

  // eslint-disable-next-line no-console

  return (
    <WrapperComponent>
      <Menu style={{ background: 'none', border: 'none', fontSize: 16 }}>
        <Row align="middle" justify="space-between">
          {
            listMenu.map((menu) => (
              <Menu.Item key={menu.name}>
                <WrapperMenu>

                  <NavLink exact to={menu.path} className={`${menu.path === pathname && 'activeMenu'}`}>
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
    padding: 5px 15px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(242,157,44,1) 0%, rgba(255,118,26,1) 100%);
    border-radius: 5;
    border-radius: 10px;
  }
`;

MenuDesktop.propTypes = {

};

export default MenuDesktop;
