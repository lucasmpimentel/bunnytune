import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, redirectTo }) {
  // const token = localStorage.getItem('bunnyToken');
  const isAuthorized = false;
  return isAuthorized ? children : <Navigate to={ redirectTo } />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
