import React from 'react';
import bunnyWhite from '../../assets/images/bunnytuneLogoWhite.svg';

export default function index() {
  return (
    <div>
      <img
        src={ bunnyWhite }
        alt="bunnytuneLogoWhite"
      />
      <button
        type="button"
        name="loginBtn"
      >
        LOGIN
      </button>
      <button
        type="button"
        name="signBtn"
      >
        CADASTRE-SE
      </button>
    </div>
  );
}
