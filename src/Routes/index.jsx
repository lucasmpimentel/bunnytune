import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SplashScreen from '../pages/SplashScreen';
import Login from '../pages/Login';
import SingUp from '../pages/SingUp';
import PrivateRoutes from './PrivateRoutes';
import NotFound from '../pages/NotFound';

export default function index() {
  return (
    <Routes>
      <Route exact path="/" element={ <SplashScreen /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="cadastro" element={ <SingUp /> } />
      <PrivateRoutes />
      <Route element={ <NotFound /> } />
    </Routes>
  );
}
