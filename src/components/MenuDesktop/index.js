import { Menu, Row } from 'antd';
import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as D from './styled';

import { listMenu } from 'rootConstants'

const MenuDesktop = ({ isFooter }) => {
  const { pathname } = useLocation();
  return (
    <WrapperComponent>
      <Menu style={{ background: 'none', border: 'none', fontSize: 16 }}>
        <Row align="middle" justify="space-between">
          {
            listMenu.map((menu) => (
              <Menu.Item>
                <D.WrapperMenu>
                  <NavLink to={menu.path} className={`${menu.path === pathname && 'activeMenu'}`}>
                    {
                      menu.name
                    }

                  </NavLink>
                </D.WrapperMenu>
              </Menu.Item>
            ))
          }

          <Menu.Item>
            <D.WrapperMenu>
              <D.WrapperConnect>
                {
                  isFooter ? 'Connect Wallet' : 'Connected'
                }

              </D.WrapperConnect>
            </D.WrapperMenu>
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
