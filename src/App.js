import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      {/* <Route>exact path="/" </Route> */}
      <Route exact path="login" element={ <Login /> } />
      <Route path="search" element={ <Search /> } />
    </Routes>
  );
}

export default App;
