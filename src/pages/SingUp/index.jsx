import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import Context from '../../context/context';

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
    console.log(typeof value);
    console.log(typeof userPassword);
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
    <main>
      <button
        type="button"
        name="btnSplashScreen"
        onClick={ () => navigate('/') }
      >
        <TbArrowBackUp />
      </button>
      <h1>Cadastro</h1>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          value={ userName }
          onChange={ ({ target }) => setUserName(target.value) }
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={ userEmail }
          onChange={ handleEmail }
          placeholder="Email"
        />
        <input
          type="password"
          min={ MIN_PASSWORD }
          value={ userPassword }
          onChange={ ({ target }) => setUserPassword(target.value) }
          placeholder="Senha"
        />
        <input
          type="password"
          min={ MIN_PASSWORD }
          value={ confirmPassword }
          onChange={ handleConfirmPassword }
          placeholder="Confirme sua senha"
        />
        { passwordMatch ? '' : <p>Senhas não coincidem</p>}
        <button type="submit">
          Cadastrar
        </button>
      </form>
    </main>
  );
}
