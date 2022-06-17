import React from 'react';
import { ThemeProvider } from 'styled-components';
import Provider from './context/provider';
import GlobalStyles from './assets/styles/global';
import defaulTheme from './assets/styles/themes/default';
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={ defaulTheme }>
      <Provider>
        <Routes />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
