import styled from 'styled-components';
import bg from '../../assets/images/backgroung.jpg';

export const Main = styled.main`background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Glass = styled.div`background-color: #ffffff60;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
  padding: 15px;
`;

export const Logo = styled.img`margin-bottom: 30px;
  margin-top: 15px;
  max-height: 50%;
  width: 100%;
`;

export const Title = styled.h1`font-family: Comfortaa , cursive;
  font-size: 40px;
  height: 40px;
  margin-bottom: 20px;
`;

export const Form = styled.form`margin-bottom: 50px;
  min-height: 60vw;
`;
