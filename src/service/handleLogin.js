import { loginConnection } from './backEndConnection';

async function handleLogin(email, password) {
  const user = await loginConnection(email, password);
  const { token } = user.data;
  localStorage.setItem('token', token);
  return user.data;
}

export default handleLogin;
