import { message } from "antd";
import bg from "assets/images/bgAidrop.jpg";
import IconCoin from "assets/images/Dollarcoin.png";
import AppButton from "components/AppButton";
import { H1, M16, M20 } from "globalStyle.js";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContractWithAirDrop } from "redux/actions/getContract";
import styled from "styled-components";

const AirDrop = () => {
  const dispatch = useDispatch();

  const { account } = useSelector((state) => state.w3Reducer);

  const handleContractAirDrop = () => {
    if (account) {
      const payload = {
        account,
      };
      dispatch(getContractWithAirDrop(payload));
    } else {
      message.warn("Please Connect Wallet");
    }
  };
  return (
    <>
      <WrapperComponent bg={bg}>
        <H1
          className="text-center pt-md-3 pt-5 mt-md-0 mt-5"
          style={{ color: "#0a1f37" }}
        >
          {" "}
          Free FNC Airdrop{" "}
        </H1>
        <M16 className="py-2" style={{ opacity: 0.7 }}>
          Free FNC for everyone on a first-come-first-serve basis{" "}
        </M16>

        <M20 className="py-2">
          {" "}
          <b>To get FNC, please retweet this</b>
          <b className="cl-yellow pl-1"><a href="https://twitter.com/FennecNft">Tweet</a></b> , follow
          <b className="cl-yellow pl-1"><a href="https://twitter.com/FennecNft">FennecNFT Twitter</a></b>, and join
          <b className="cl-yellow pl-1"><a href="https://t.me/fennecnftofficial">FennecNFT Telegram</a></b> & 
          <b className="cl-yellow pl-1"><a href="https://t.me/fennecnftchat">Group</a></b>
        </M20>
        {/* <M20 className="py-2">
          {" "}
          <b>Hot: Now you can buy FNT</b>
          <b className="cl-yellow pl-1">here on PancakeSwap.</b>
        </M20> */}
        <div style={{ width: 170, padding: '50px 0'}} className="mx-auto">
          <img src={IconCoin} alt="" />
        </div>
        <AppButton
          onClick={handleContractAirDrop}
          className="mx-auto d-block"
          style={{ width: 200 }}
          content="GET FNC NOW!"
        />
      </WrapperComponent>
    </>
  );
};

const WrapperComponent = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 100px 100px 150px 100px;
  background-size: cover;
  background-image: url(${(props) => props.bg});
  color: #455c80;
  text-align: center;
  background-position-x: center;
  @media only screen and (max-width: 768px) {
    padding: 30px;
    height: 100%;

    background: white;
  }
`;

AirDrop.propTypes = {};

export default memo(AirDrop);
