import styled from 'styled-components';
import bg from '../../assets/images/backgroung.jpg';

export const Main = styled.main`
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  padding: 16px;
`;

export const Logo = styled.img`
  margin: auto 0;
  max-width: 100vw;
  padding: 16px;
`;

export const BtnDivisor = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100vw;
  padding: 0 16px;
`;
