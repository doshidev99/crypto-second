import React from 'react'
import styled from 'styled-components';
import { COLORS } from 'rootConstants';

const AppButton = ({ content, style, className }) => {
  return (
    <LaucherApp className={className} style={style} color={COLORS.button}>
      {content}
    </LaucherApp>
  )
}


const LaucherApp = styled.div`
  background: ${(props) => props.color};
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 20px;
  width: 130px;
  text-align: center;

  color: white;
  font-weight: bold;
  cursor: pointer;
`;
AppButton.propTypes = {

}

export default AppButton
