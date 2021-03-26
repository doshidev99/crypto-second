import { Menu, Row } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as D from './styled';

import {listMenu} from 'rootConstants'

const MenuDesktop = ({ isFooter }) => (
  <WrapperComponent>
    <Menu style={{ background: 'none', border: 'none', fontSize: 16 }}>
      <Row align="middle" justify="space-between">
        {
          listMenu.map((menu) => (
            <Menu.Item>
              <D.WrapperMenu>
                <NavLink to={menu.path}>
                  {menu.name}
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
);

const WrapperComponent = styled.div``;

MenuDesktop.propTypes = {

};

export default MenuDesktop;
