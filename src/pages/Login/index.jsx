import React from 'react';
import bunnyPink from '../../assets/images/bunnytuneLogoPink.svg';
/* import { useHistory } from 'react-router-dom';
 */
export default function Login() {
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
    <div>
      <button
        name="btnSplashScreen"
        type="button"
      >
        Voltar
      </button>
      <img
        alt="bunnytuneLogoPink"
        name="bunnytuneLogoPink"
        src={ bunnyPink }
      />
      <form>
        <h1>Login</h1>
        <input
          name="inputMail"
          placeholder="Email"
          type="text"
        />
        <input
          name="inputPassword"
          placeholder="Password"
          type="password"
        />
        <button
          name="btnLogin"
          type="button"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
