import {
  Col, Menu, Row
} from 'antd';
import { ReactComponent as Contract } from 'assets/images/bscscan.svg';
import logo from 'assets/images/logo.png';
import { ReactComponent as Path } from 'assets/images/PATH.svg';
import { ReactComponent as Telegram } from 'assets/images/telegram.svg';
import { ReactComponent as Twitter } from 'assets/images/twittersvg.svg';
import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { listMenu } from 'rootConstants';
import styled from 'styled-components';


const listSocial = [{ name: 'Telegram', component: Telegram, link: 'https://t.me/fennecnftofficial' }, { name: 'Twitter', component: Twitter, link: 'https://twitter.com/FennecNft' }, { name: 'Contract', component: Contract, link: 'https://bscscan.com/token/0x7952a0FABcE6b56dC94dbdb1273afE0bD91b57eC' }]


const AppFooter = () => {
  const { isConnected } = useSelector((state) => state.w3Reducer);

  const handleConnect = () => {
    window?.ethereum?.enable().then(res => res?.length > 0 && window.location.reload());
  }

  return (
    <WrapperFooter>
      <Row gutter={24} align="middle" justify="space-between">
        <Col xs={24} md={10}>
          <div className="w-100 mb-md-0 mb-5">
            <WrapperImg>
              <img src={logo} alt="" />
            </WrapperImg>
          </div>
        </Col>
        <Col xs={24} md={14} style={{ textAlign: 'right' }}>
          <Menu style={{ background: 'none', border: 'none', fontSize: 16 }}>
            <Row align="middle" justify="space-between" >
              {
                listMenu.map((menu) => (
                  <Menu.Item>
                    <WrapperMenu>
                      <NavLink to={menu.path}>
                        {menu.name}
                      </NavLink>
                    </WrapperMenu>
                  </Menu.Item>
                ))
              }

              <Menu.Item>
                <WrapperMenu className="mt-md-0 mt-4">
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

        </Col>
      </Row>
      <Path style={{ width: '100%' }} />
      <CopyRight>
        <Row gutter={24} justify="space-between" align="middle">
          <Col xs={24} md={10} className="text-white" style={{ opacity: 0.6, fontWeight: 550 }}>
            <div> © 2021 Developed by FennecNFT. </div>
            <div>Licensed & open-source under the MIT License</div>
          </Col>

          <Col xs={24} md={10}>
            <Row gutter={24} className="pt-md-0 pt-3">
              {
                listSocial.map((el) => (
                  <Col xs={8}>
                    <Row align="middle">
                      <Col>
                        <div style={{ width: 15, height: 15 }}>
                          <el.component style={{ color: 'white', width: '100%', height: '100%', opacity: 0.6 }} />
                        </div>
                      </Col>
                      <Col className="text-white pl-2">
                      <a href={el.link} target="_blank" rel="noreferrer" style={{color: 'white'}}>{el.name}</a>
                      </Col>
                    </Row>
                  </Col>
                ))
              }
            </Row>

          </Col>
        </Row>
      </CopyRight>

    </WrapperFooter >

  )
};

const WrapperFooter = styled.div`
  width: 100%;
  background: #183449;

  padding: 70px 150px;

  @media only screen and (max-width: 768px) {
    padding: 70px 30px;

  }

`;

const WrapperImg = styled.div`
  width: 80px;
  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
   margin: 0 auto
  }

`;



const WrapperMenu = styled.div`

  a {
    color: white;
    opacity: 0.6;
    font-weight: bold;
  }
`;


const WrapperConnect = styled.div`
  background: white;
  color: #ff9c5a;
  font-weight: bold;
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: darkblue
  }
`;

const CopyRight = styled.div`

`
AppFooter.propTypes = {

};

export default AppFooter;
