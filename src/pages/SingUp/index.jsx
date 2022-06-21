import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import bcrypt from 'bcryptjs';
import * as C from './styles';
import BackButton from '../../components/shared/BackButton';
import BlackButtonFW from '../../components/shared/BlackButtonFW';
import Inputs from '../../components/shared/Inputs';
import { singUpConnection } from '../../service/backEndConnection';
import './singUp.css';

export default function SingUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [passwordState, setPasswordState] = useState({
    userPassword: '',
    confirmationPassword: '',
  });
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const MIN_NAME = 3;
  const MIN_PASSWORD = 6;
  const EMAIL_REGEX = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
  const SALT_ROUNDS = 10;
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);

  const handleUserName = ({ target: { value } }) => {
    setUserName(value);
    if (value.length >= MIN_NAME) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const handleEmail = ({ target: { value } }) => {
    setUserEmail(value);
    if (EMAIL_REGEX.test(value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const checkPassword = (password, confirmation) => {
    if (password === confirmation && password.length >= MIN_PASSWORD) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const handlePassword = ({ target: { name, value } }) => {
    setPasswordState({ ...passwordState, [name]: value });
    if (name === 'userPassword') {
      checkPassword(value, passwordState.confirmationPassword);
    } else {
      checkPassword(value, passwordState.userPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validName && validEmail && passwordMatch) {
      const hashPass = bcrypt.hashSync(passwordState.userPassword, salt);
      const singup = ({
        isActive: true,
        name: userName,
        email: userEmail,
        userPassword: hashPass,
      });
      const resp = await singUpConnection(singup);
      if (resp === 'Sucess') {
        navigate('/login');
      } else {
        global.alert(resp.message);
      }
    } else {
      global.alert('Dados Incorretos');
    }
  };

  return (
    <C.Main>
      <C.Glass>
        <BackButton
          type="button"
          name="btnSplashScreen"
          onClick={ () => navigate('/') }
        >
          <TbArrowBackUp />
        </BackButton>
        <C.Title>Cadastro</C.Title>
        <C.Form onSubmit={ handleSubmit }>
          <Inputs
            type="text"
            name="name"
            aria-label="username"
            value={ userName }
            onChange={ handleUserName }
            placeholder="Nome"
          />
          <Inputs
            type="email"
            name="email"
            aria-label="email"
            value={ userEmail }
            onChange={ handleEmail }
            placeholder="Email"
          />
          <Inputs
            type="password"
            aria-label="password"
            min={ MIN_PASSWORD }
            name="userPassword"
            value={ passwordState.userPassword }
            onChange={ handlePassword }
            placeholder="Senha"
          />
          <Inputs
            type="password"
            min={ MIN_PASSWORD }
            aria-label="confirmPassword"
            name="confirmationPassword"
            value={ passwordState.confirmationPassword }
            onChange={ handlePassword }
            placeholder="Confirme sua senha"
          />
          <C.Pass
            className={
              passwordMatch || passwordState.confirmationPassword.length === 0 ? (
                'hidden'
              ) : 'show'
            }
          >
            Senhas não coincidem
          </C.Pass>
          <BlackButtonFW type="submit">
            Cadastrar
          </BlackButtonFW>
        </C.Form>
      </C.Glass>
    </C.Main>
  );
}
