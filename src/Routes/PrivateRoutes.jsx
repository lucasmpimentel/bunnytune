import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import SpotifyLogin from '../pages/auth/SpotifyLogin';
import Search from '../pages/auth/Search';
import Discovery from '../pages/auth/Discovery';
import Album from '../pages/auth/Album';
import Player from '../pages/auth/Player/player';
import Profile from '../pages/auth/Profile';

export default function PrivateRoutes() {
  return (
    <>
      <Route
        path="sync"
        element={
          <PrivateRoute redirectTo="/">
            <SpotifyLogin />
          </PrivateRoute>
        }
      />
      <Routes
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
    </>
  );
}
