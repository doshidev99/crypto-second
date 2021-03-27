import styled from 'styled-components';

const H2 = styled.h2`
color:  ${(props) => props.color};
font-weight: bold;
@media only screen and (max-width: 768px) {
    color: ${(props) => !props.isOrange && 'white'};
  }
`;

const H1 = styled.h1`
  font-weight: bold;
  color:  ${(props) => props.color};
`;

const H3 = styled.h2`
  color:  ${(props) => props.color};
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    color: ${(props) => !props.isOrange && 'white'};
  }
`;


const M20 = styled.h2`
  color:  ${(props) => props.color};
  margin-bottom:0;
  font-size: 16px;
  font-weight: bold;
`;



const M16 = styled.h2`
  color:  ${(props) => props.color};
  margin-bottom:0;
  font-size: 16px;
  font-weight: bold;
`;



const M14 = styled.h2`
  color:  ${(props) => props.color};
  margin-bottom:0;
  font-size: 14px;
  font-weight: bold;

`;



export { H1, H2, H3, M16, M14, M20 }
