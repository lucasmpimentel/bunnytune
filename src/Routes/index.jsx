import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SplashScreen from '../pages/SplashScreen';
import Login from '../pages/Login';
import SingUp from '../pages/SingUp';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import SpotifyLogin from '../pages/auth/SpotifyLogin';
import Search from '../pages/auth/Search';
import Discovery from '../pages/auth/Discovery';
import Album from '../pages/auth/Album';
import Player from '../pages/auth/Player/player';
import Profile from '../pages/auth/Profile';

export default function index() {
  return (
    <Routes>
      <Route path="/" element={ <SplashScreen /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="cadastro" element={ <SingUp /> } />
      <Route
        path="sync"
        element={
          <PrivateRoute redirectTo="/">
            <SpotifyLogin />
          </PrivateRoute>
        }
      />
      <Route
        path="discovery"
        element={
          <PrivateRoute redirectTo="/">
            <Discovery />
          </PrivateRoute>
        }
      />
      <Route
        path="search"
        element={
          <PrivateRoute redirectTo="/">
            <Search />
          </PrivateRoute>
        }
      />
      <Route
        path="album"
        element={
          <PrivateRoute redirectTo="/">
            <Album />
          </PrivateRoute>
        }
      />
      <Route
        path="player"
        element={
          <PrivateRoute redirectTo="/">
            <Player />
          </PrivateRoute>
        }
      />
      <Route
        path="profile"
        element={
          <PrivateRoute redirectTo="/">
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
