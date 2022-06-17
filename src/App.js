import React from 'react';
import { ThemeProvider } from 'styled-components';
import Provider from './context/provider';
import GlobalStyles from './assets/styles/global';
import defaulTheme from './assets/styles/themes/default';
import RouteMap from './Routes';

function App() {
  return (
    <ThemeProvider theme={ defaulTheme }>
      <Provider>
        <RouteMap />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
