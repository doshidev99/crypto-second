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


export { H1, H2, H3 }
