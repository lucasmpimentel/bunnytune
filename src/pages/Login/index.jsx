import React from 'react';

export default function Login() {
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
