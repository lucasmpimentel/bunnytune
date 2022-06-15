import styled from 'styled-components';
import bg from '../../assets/images/bgLogin.jpg';

export const Main = styled.main`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
  padding: 15px;
`;

export const Logo = styled.img`
  width: 100%;
  max-height: 50%;
  margin-bottom: 30px;
  margin-top: 15px;
`;

export const Title = styled.h1`
  font-family: Comfortaa;
  font-size: 40px;
  height: 40px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  min-height: 60vw;
  margin-bottom: 50px;
`;
