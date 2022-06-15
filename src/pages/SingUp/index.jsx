import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import Context from '../../context/context';
import * as C from './styles';
import BackButton from '../../components/shared/BackButton';
import BlackButtonFW from '../../components/shared/BlackButtonFW';
import './singUp.css';

export default function SingUp() {
  const navigate = useNavigate();
  const { setSingupData } = useContext(Context);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const MIN_PASSWORD = 6;
  const EMAIL_REGEX = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;

  const handleEmail = ({ target: { value } }) => {
    const validateEmail = EMAIL_REGEX.test(value);
    if (validateEmail) return setUserEmail(value);
  };

  const handleConfirmPassword = ({ target: { value } }) => {
    if (value === userPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
    if (setPasswordMatch) setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && userEmail && userPassword) {
      setSingupData({
        name: userName,
        email: userEmail,
        password: userPassword,
      });
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
          <C.Input
            type="text"
            name="name"
            value={ userName }
            onChange={ ({ target }) => setUserName(target.value) }
            placeholder="Nome"
          />
          <C.Input
            type="email"
            name="email"
            value={ userEmail }
            onChange={ handleEmail }
            placeholder="Email"
          />
          <C.Input
            type="password"
            min={ MIN_PASSWORD }
            value={ userPassword }
            onChange={ ({ target }) => setUserPassword(target.value) }
            placeholder="Senha"
          />
          <C.Input
            type="password"
            min={ MIN_PASSWORD }
            value={ confirmPassword }
            onChange={ handleConfirmPassword }
            placeholder="Confirme sua senha"
          />
          <C.Pass
            className={
              passwordMatch || passwordMatch.length === 0 ? 'hidden' : 'show'
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
