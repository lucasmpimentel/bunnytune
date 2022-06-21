import styled from 'styled-components';
import bg from '../../../assets/images/backgroung.jpg';

export const Main = styled.main`background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Glass = styled.div`background-color: #ffffff60;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  min-width: 100vw;
  padding: 15px;
`;

export const Title = styled.h1`font-family: Comfortaa , cursive;
  font-size: 40px;
  margin: 35px 0;
`;

export const Text = styled.p`font-family: Roboto , Arial , sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

export const Content = styled.div`display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 15px;
  min-height: 70vh;
`;

export const Section = styled.section`align-items: center;
  align-self: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 75vw;
  min-height: 60%;
  padding: 0 30px;
  text-align: center;
`;

export const SpotifyButton = styled.button`align-items: center;
  align-self: center;
  background-color: #1db954;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 2px 3px -1px #090909;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 20px;
  max-width: 180px;
  min-width: 70px;
  padding: 10px;
  transition: ease;

  &:hover {
    background-color: rgb(0, 100, 46);
  }

  &:active {
    background-color: black;
  }
`;

export const SpotifyLogo = styled.img`max-width: 100%;
`;
