import axios from 'axios';

const Host = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

async function spotifyLogin(code)

async function singUpConnection(singupData) {
  const CREATED = 201;
  try {
    const res = await Host.post('/users', singupData);
    if (res.status === CREATED) {
      return 'Sucess';
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
}

async function loginConnection(email, password) {
  try {
    const req = {
      email,
      password,
    };
    const user = await Host.post('/login', req);
    return user;
  } catch (error) {
    console.log(error.response.data.message);
  }
}

async function tokenValidation(token) {
  try {
    const user = await Host.get('/login', { headers: { Authorization: token } });
    return user.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
}

export {
  singUpConnection,
  loginConnection,
  tokenValidation,
  spotifyLogin,
};
