import React from 'react';
/* import { useHistory } from 'react-router-dom';
 */
export default function Login() {
/*   const history = useHistory();
  const [userState, setUserState] = useState({
    email: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserState({ [name]: value });
  };

  const checkMail = () => {
    const regEx = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
    const { inputEmail } = this.state;
    return regEx.test(inputEmail);
  };

  const checkChars = () => {
    const { inputPassword } = this.state;
    const MIN_CHAR = 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { inputEmail } = this.state;
    dispatch(userLogin(inputEmail));
    history.push('/carteira');
  } */

  return (
    <div>
      <form>
        <h1>Login</h1>
        <input
          placeholder="Email"
          name="inputMail"
          type="text"
        />
        <input
          placeholder="Password"
          name="inputPassword"
          type="password"
        />
      </form>
    </div>
  );
}
