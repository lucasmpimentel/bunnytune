import React, { useState, useContext } from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import BackButton from '../../components/shared/BackButton';
import Inputs from '../../components/shared/Inputs';
import BlackButtonFW from '../../components/shared/BlackButtonFW';
import handleLogin from '../../service/handleLogin';
import bunnyPink from '../../assets/images/bunnytuneLogoPink.svg';
import * as C from './styles';

export default function Login() {
  const { setUser, setIsAuthorized } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const EMAIL_REGEX = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const CheckMail = EMAIL_REGEX.test(email);
    if (CheckMail) {
      const user = await handleLogin(email, password);
      setUser(user);
      setIsAuthorized(true);
      navigate('/sync');
    }
  };

  return (
    <C.Main>
      <C.Glass>
        <BackButton
          name="btnSplashScreen"
          type="button"
          onClick={ () => navigate('/') }
        >
          <TbArrowBackUp />
        </BackButton>
        <img
          alt="bunnytuneLogoPink"
          name="bunnytuneLogoPink"
          src={ bunnyPink }
        />
        <C.Form onSubmit={ handleSubmit }>
          <C.Title>Login</C.Title>
          <Inputs
            type="email"
            name="inputMail"
            aria-label="input-mail"
            placeholder="Email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <Inputs
            type="password"
            name="inputPassword"
            aria-label="password"
            placeholder="Senha"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
          <BlackButtonFW
            name="btnLogin"
            type="submit"
          >
            LOGIN
          </BlackButtonFW>
        </C.Form>
      </C.Glass>
    </C.Main>
  );
}
