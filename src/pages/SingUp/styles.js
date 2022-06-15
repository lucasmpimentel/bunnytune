import styled from 'styled-components';
import bg from '../../assets/images/backgroung.jpg';

export const Main = styled.main`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Glass = styled.div`
  background-color: #FFFFFF60;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  min-width: 100vw;
  padding: 15px;
`;

export const Title = styled.h1`
  font-family: Comfortaa, cursive;
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 60px;
  min-height: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 50vh;
  max-height: 80vh;
`;

export const Input = styled.input`
  border: solid black 2px;
  border-radius: 2px;
  font-family: Roboto, monospace;
  font-size: 18px;
  margin-top: 15px;
  min-height: 50px;
  min-width: 100%;
  padding: 15px 20px;
`;

export const Pass = styled.p`
  color: #FFF;
  font-family: Roboto, monospace;
  margin-top: 2px;
  text-transform: lowercase;
  transition: ease-out 0.30ms;
`;
