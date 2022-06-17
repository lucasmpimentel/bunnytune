import React from 'react';
import { useNavigate } from 'react-router-dom';
import bunnyWhite from '../../assets/images/bunnytuneLogoWhite.svg';
import * as C from './styles';
import BlackButton from '../../components/shared/BlackButton';
import WhiteButton from '../../components/shared/WhiteButton';

export default function SplashScreen() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSingUp = () => {
    navigate('/cadastro');
  };

  return (
    <C.Main>
      <C.Logo
        src={ bunnyWhite }
        alt="bunnytuneLogoWhite"
      />
      <C.BtnDivisor>
        <WhiteButton
          type="button"
          onClick={ handleLogin }
        >
          LOGIN
        </WhiteButton>
        <BlackButton
          type="button"
          onCLick={ handleSingUp }
        >
          CADASTRE-SE
        </BlackButton>
      </C.BtnDivisor>
    </C.Main>
  );
}
