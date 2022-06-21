import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import bunnyWhite from '../../assets/images/bunnytuneLogoWhite.svg';
import BlackButton from '../../components/shared/BlackButton';
import WhiteButton from '../../components/shared/WhiteButton';
import Context from '../../context/context';
import * as C from './styles';

export default function SplashScreen() {
  const navigate = useNavigate();
  const { isAuthorized/* , loading, setLoading */ } = useContext(Context);
  const GO_BACK = -1;

  const handleLogin = () => {
    navigate('login');
  };

  const handleSingUp = () => {
    navigate('cadastro');
  };

  return (
    !isAuthorized ? (
      <C.Main>
        <C.Logo
          src={ bunnyWhite }
          alt="bunnytune logo"
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
            onClick={ handleSingUp }
          >
            CADASTRE-SE
          </BlackButton>
        </C.BtnDivisor>
      </C.Main>
    ) : navigate(GO_BACK)
  );
}
