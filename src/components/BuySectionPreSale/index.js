import { Pie } from '@ant-design/charts';
import { Col, Input, message, Modal, Row } from 'antd';
import IcoinCoin from 'assets/images/ic-coin.png';
import logo from 'assets/images/logo-transparent.png';
import AppButton from 'components/AppButton';
import { H1, H2, M16, M20 } from 'globalStyle.js';
import debounce from "lodash/debounce";
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router';
import { getContract } from 'redux/actions/getContract';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';
import { copyStringToClipboard } from 'utils';
import { WrapperIconCoin } from './styles';


const BuySectionPreSale = () => {

  const { balance, isConnected, account } = useSelector(state => state.w3Reducer)

  const [currentBalance, setCurrentBalance] = useState()
  const [isVisibale, setIsvisible] = useState(false)
  const [currentRef, setCurrentRef] = useState('0x5F6c31525d7c643cb7dbcA8d94a3Ef99384eaEba')

  const dispatch = useDispatch()

  const [currentReceived, setCurrentReceived] = useState('- FNT');

  const { pathname } = useLocation()

  const refUrl = pathname.split('/')[2]

  const onClipBoard = () => {
    copyStringToClipboard(`https://fennecnft.com/buy/${currentRef}`);
    message.success('Copy REF success');
  };

  const handleConnect = () => {
    window?.ethereum?.enable().then(res => res?.length > 0 && window.location.reload());
  }

  const handleBuy = () => {
    if (currentBalance) {

      const payload = {
        currentBalance, account, currentRef
      }

      dispatch(getContract(payload))
    } else {
      message.warn('Please enter your amount BNB');
    }

  }

  useEffect(() => {
    if (refUrl) {
      setCurrentRef(preState => preState !== refUrl ? refUrl : '0x5F6c31525d7c643cb7dbcA8d94a3Ef99384eaEba')
    }
  }, [refUrl])


  const data = [

    {
      type: 'Liquidity',
      value: 70,
    },
    {
      type: 'Referal',
      value: 10,
    },
    {
      type: 'Team',
      value: 20,
    },
  ];
  //
  const config = {
    data: data,
    colorField: 'type',
    color: ['#f29d2c', '#ce4532', '#339be2'],
    angleField: 'value',
    optional: 'png',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
  };

  const toggle = () => {
    setIsvisible(c => !c)
  }
  const getBalance = async () => {
    if (balance) {
      await setCurrentBalance(() => balance)
      await setCurrentReceived(() => (+balance * 2500).toFixed(3))
    }
  }

  const onChangeBlance = (e) => {
    if (+e.target.value >= balance) {
      debouceSearch(balance)
    } else {

      debouceSearch(e.target.value)
    }
  };

  const formatBalance = (value) => {
    setCurrentReceived(() => (+value * 2500).toFixed(3))
    setCurrentBalance(() => (+value))
  }

  const debouceSearch = debounce(formatBalance, 100);


  return (
    <WrapperComponent>
      <Modal title={false} footer={false} closable={false}
        onCancel={toggle}
        visible={isVisibale}
        bodyStyle={{ background: 'unset', padding: 0, overflow: ' hidden', borderRadius: 15 }} >
        <WrapperHeaderCard>
          <Row gutter={24} align="middle" justify="space-between">
            <Col>
              <H2 style={{ fontSize: 20 }} className="mb-0" color={COLORS.colorCountDown}>
                Your REF
              </H2>
            </Col>
          </Row>
        </WrapperHeaderCard>
        <WrapperContent color={COLORS.button} >
          <div style={{ height: '100%' }}>
            <Row align="middle" justify="center" className="pb-3">
              <Col>
                <WrapperLogo>
                  <img src={logo} alt="" />
                </WrapperLogo>
              </Col>
            </Row>

            <Input
              value={`https://fennecnft.com/buy/${currentRef}`}
              type="text" size="small"
              placeholder="Enter BNB amount" addonAfter={
                <WrapperInInput style={{ color: 'white', opacity: 1 }} onClick={onClipBoard}>
                  Save
              </WrapperInInput>
              } />

          </div>
        </WrapperContent>

      </Modal>
      <Row align="middle" justify="center" className="mt-md-0 mt-5">
        <WrapperIconCoin>
          <img src={IcoinCoin} alt="" />
        </WrapperIconCoin>
        <div>
          <H1 color={COLORS.colorCountDown} style={{ fontSize: 42 }} className="text-center pt-4"> Presale </H1>
        </div>
      </Row>
      <H2 className="text-center" style={{ color: '#0a1f37' }} >

        <span style={{ color: COLORS.colorCountDown }}>
          ENDS IN
        </span>
         15:12:25:14
    </H2>

      <Row gutter={24} align="middle" justify="space-between">
        <Col xs={24} md={10}>
          <WrapperHeaderCard>
            <Row gutter={24} align="middle" justify="space-between">
              <Col xs={10}>
                <H2 style={{ fontSize: 20 , color: '#f29d2c'}} className="mb-0">
                  Presale Details
                </H2>
              </Col>
              <Col xs={14} className="text-right">
                <AppButton className="mt-md-0 mt-2 d-inline-block" content="More info" isquestion />
              </Col>
            </Row>
          </WrapperHeaderCard>
          <WrapperChart >
            <div style={{ height: '100%' }}>
              <Pie {...config} style={{ height: '100%' }} />
            </div>
          </WrapperChart>

        </Col>
        <Col xs={24} md={10} className="mt-md-0 mt-4">
          <WrapperHeaderCard>
            <Row gutter={24} align="middle" justify="space-between">
              <Col>
                <H2 style={{ fontSize: 20, color: '#f29d2c' }} className="mb-0" color={COLORS.colorCountDown}>
                  Buy
              </H2>
              </Col>
              <Col>
                <AppButton className="mt-0" content="Referer"
                  isShare
                  onClick={toggle}
                />
              </Col>
            </Row>
          </WrapperHeaderCard>
          <WrapperContent color={COLORS.button} >
            <div style={{ height: '100%' }}>

              <Row align="middle" justify="space-between" className="pb-3">
                <Col>
                  <WrapperLogo>
                    <img src={logo} alt="" />
                  </WrapperLogo>
                </Col>

                <Col>
                  <M20 color={COLORS.second}> No Min - Max: 30 BNB </M20>
                </Col>

                <Col>
                  <WrapperLogo>
                    <img src={logo} alt="" />
                  </WrapperLogo>
                </Col>
              </Row>

              <Input
                value={currentBalance} onChange={onChangeBlance}
                type="number" size="small"
                placeholder="Enter BNB amount" addonAfter={
                  <WrapperInInput onClick={getBalance}>
                    MAX
              </WrapperInInput>
                } />

              <Row gutter={24} align="middle" justify="center" className="py-3">
                <Col>
                  <M16 >Recevied:</M16>
                </Col>
                <Col>
                  <Row align="middle" justify="center">
                    <Col>
                      <WrapperAutoPrice>
                        <M16> {currentReceived}</M16>
                      </WrapperAutoPrice>
                    </Col>
                    <Col className="pl-2">
                      <M16 >Instant</M16>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <div className="text-center">Tokens are ....</div>


              {
                isConnected ? (
                  <AppButton disable={currentBalance ? false : true} onClick={handleBuy} content="Buy" style={{ width: '100%', opacity: isConnected ? 1 : 0.7 }} className="mt-0" />
                ) : (
                  <AppButton onClick={handleConnect} content="Connect Metamask" style={{ width: '100%', opacity: 0.7 }} className="mt-0" />
                )
              }
            </div>
          </WrapperContent>
        </Col>
      </Row>
    </WrapperComponent>
  )
};

const WrapperComponent = styled.div`
    width: 100%;
    padding: 100px 100px 0px 100px;
    margin-bottom: 30px;

    >.ant-modal-content {
      background: red
    }

    @media only screen and (max-width: 768px) {
      padding: 30px;
      height: 100%;

      background: white;
  }

`;


const WrapperHeaderCard = styled.div`
  border: 3px solid #f29d2c;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  padding: 10px 20px;
`

const WrapperChart = styled.div`

  border: 3px solid #f29d2c;
  border-top: 0px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  padding: 20px;

  height: 300px;
`

const WrapperContent = styled.div`
  height: 100%;
  border: 3px solid #f29d2c;
  border-top: 0px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  padding: 20px 50px;

  .input-search {
    border: 1px solid #f29d2c;
    border-radius: 5px;
    overflow: hidden;
  }

  .ant-input-group-wrapper{
    color: black !important;
    border: 1px solid #f29d2c !important;
    height: 38px;
    border-radius: 5px;
    overflow: hidden;

    &:focus {
      border: 1px solid #f29d2c !important;
    }

    input {
      height: 38px;
      outline: none;
    padding-left: 10px;


      &:focus {
        border: none;
      }
      &::placeholder {
        color: black;
        text-align: center;
      }
    }
  }

  .ant-input-group-addon {

    background: ${(props) => props.color};

    border: none;
    color: white;
    opacity: 0.7;

    height: 100%;
  }

  .input-max {
    background: red;
  }

`
const WrapperLogo = styled.div`
width: 50px;

`
const WrapperInInput = styled.div`
  cursor: pointer;

`

const WrapperAutoPrice = styled.div`

  border: 1px solid #f29d2c;
  padding: 5px 10px;
  border-radius: 5px;
`

BuySectionPreSale.propTypes = {

};

export default memo(BuySectionPreSale);
