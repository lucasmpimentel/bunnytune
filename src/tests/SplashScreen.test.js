import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

const getLoginBtn = () => screen.getByRole(
  'button',
  { name: /login/i},
);
const getSingUpBtn = () => screen.getByRole(
  'button',
  { name: /cadastre-se/i },
);
const getLoginTitle = () => screen.getByRole(
  'heading',
  { level: 1, name: /login/i}
);
const getSingUpTitle = () => screen.getByRole(
  'heading',
  { level: 1, name: /cadastro/i}
);

describe('Teste os elementos da tela: SplashScreen', () => {
  beforeEach(() => renderWithRouter(<App />));

  test('A imagem da logo deve estar presente na tela', () => {
    const logo = screen.getByAltText(/bunnytune logo/i);
    expect(logo).toBeInTheDocument();
  })

  test('Os botões login e cadastro devem estar presentes na página', () => {
    expect(getLoginBtn()).toBeInTheDocument();
    expect(getSingUpBtn()).toBeInTheDocument();
  })
});

describe('Teste as funções da página: SplashScreen', () => {
  beforeEach(() => {
    render(<App />, { wrapper: BrowserRouter })
  });
  
  test('O botão cadastre-se redireciona corretamente para a tela de cadastro', () => {
    userEvent.click(getSingUpBtn());
    expect(getSingUpTitle()).toBeInTheDocument();
    const backBtn = screen.getByRole('button', { name: ""})
    userEvent.click(backBtn);
  })

  test('O botão login redireciona corretamente para tela de Login', async () => {
    userEvent.click(getLoginBtn());
    expect(getLoginTitle()).toBeInTheDocument()
  })
});
