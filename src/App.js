import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Provider from './context/provider';
import GlobalStyles from './assets/styles/global';
import defaulTheme from './assets/styles/themes/default';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Search from './pages/Search';

function App() {
  return (
    <ThemeProvider theme={ defaulTheme }>
      <Provider>
        <Routes>
          <Route exact path="/" element={ <SplashScreen /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="cadastro" element={ <SingUp /> } />
          <Route path="search" element={ <Search /> } />
        </Routes>
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
