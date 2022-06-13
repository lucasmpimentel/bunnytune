import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import SplashScreen from './pages/SplashScreen';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <SplashScreen /> } />
      <Route exact path="login" element={ <Login /> } />
      <Route path="search" element={ <Search /> } />
    </Routes>
  );
}

export default App;
