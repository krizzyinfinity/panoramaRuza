import styled from 'styled-components';
import defaultImg from "../images/ap5.jpg";

const StyledHero = styled.header`
background: url(${props => props.img? props.img:defaultImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

  
`;

export default StyledHero;