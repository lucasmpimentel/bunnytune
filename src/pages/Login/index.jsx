import React from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import bunnyPink from '../../assets/images/bunnytuneLogoPink.svg';
import * as C from './styles';
import BackButton from '../../components/shared/BackButton';
import Inputs from '../../components/shared/Inputs';
import BlackButtonFW from '../../components/shared/BlackButtonFW';

export default function Login() {
  const navigate = useNavigate();

  /*  const history = useHistory();
  const [userState, setUserState] = useState({
    email: '',
  });

  validateButton = () => {
    const { email, name } = this.state;
    let validate = false;

    const EMAIL_REGEX = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
    const validateEmail = EMAIL_REGEX.test(email);
    const validateName = name.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { inputEmail } = this.state;
    dispatch(userLogin(inputEmail));
    history.push('/carteira');
  }; */

  return (
    <C.Main>
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
      <C.Form>
        <C.Title>Login</C.Title>
        <Inputs
          name="inputMail"
          placeholder="Email"
          type="text"
        />
        <Inputs
          name="inputPassword"
          placeholder="Password"
          type="password"
        />
        <BlackButtonFW
          name="btnLogin"
          type="button"
        >
          LOGIN
        </BlackButtonFW>
      </C.Form>
    </C.Main>
  );
}
