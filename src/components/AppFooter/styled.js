import styled from 'styled-components';

const WrapperHeader = styled.div`
  position: absolute;
  top: 0;

  background: rgba(240, 248, 255, 0);
  height: 100px;
  line-height: 100px;
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;

  .text-white {
    color: white;
    font-weight: bold
  }



  @media only screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const WrapperImg = styled.div`
  width: 80px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const WrapperMenu = styled.div`

  a {
    color: white;
    font-weight: bold;
  }
`;

const WrapperMenuMobile = styled.div`
    color: white;
    font-weight: bold;
  &:hover {
    color: darkblue;
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

const WrapperConnectMobile = styled.div`
  color: white;
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

const WrapperButton = styled.div`
button {
  background: red;
  border: none;
  color: white;
  border-radius: 5px;

  &:hover {
    background: red;
    border: none;
    color: white;
    border-radius: 5px;
  }
}
 `;

export {
  WrapperHeader, WrapperImg, WrapperMenu, WrapperMenuMobile, WrapperConnect, WrapperConnectMobile,
  WrapperButton,
};
