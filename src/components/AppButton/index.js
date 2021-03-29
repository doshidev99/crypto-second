import { Row } from 'antd';
import IconQuestion from 'assets/images/ic-question.png';
import IconShare from 'assets/images/ic-share.png';
import React from 'react';
import { COLORS } from 'rootConstants';
import styled from 'styled-components';

const AppButton = ({ content, style, className, isquestion, isShare, onClick, disable }) => {
  return (
    <LaucherApp className={className} style={style} color={COLORS.button} onClick={onClick} disable={disable}>
      <Row align="middle" justify="center">
        <div>

          {
            isquestion && (
              <div style={{ width: 15 }} className="mr-2">
                <img src={IconQuestion} alt="" />
              </div>
            )
          }

          {
            isShare && (
              <div style={{ width: 15 }} className="mr-2">
                <img src={IconShare} alt="" />
              </div>
            )
          }
        </div>
        <div>
          {content}
        </div>
      </Row>

    </LaucherApp>
  )
}


const LaucherApp = styled.button`
  background: ${(props) => props.color};
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 20px;
  width: 130px;
  text-align: center;
  border: none;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }

  color: white;
  font-weight: bold;
  cursor: pointer;
`;
AppButton.propTypes = {

}

export default AppButton
