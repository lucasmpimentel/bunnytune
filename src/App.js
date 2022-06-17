import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Provider from './context/provider';
import GlobalStyles from './assets/styles/global';
import defaulTheme from './assets/styles/themes/default';
import Login from './pages/Login';
import Search from './pages/Search';
import SplashScreen from './pages/SplashScreen';

function App() {
  return (
    <ThemeProvider theme={ defaulTheme }>
      <Provider>
        <Routes>
          <Route exact path="/" element={ <SplashScreen /> } />
          <Route exact path="login" element={ <Login /> } />
          <Route path="search" element={ <Search /> } />
        </Routes>
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
