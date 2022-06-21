import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import Context from '../context/context';
import { tokenValidation } from '../service/backEndConnection';

export default function PrivateRoute({ children, redirectTo }) {
  const { setUser, isAuthorized, setIsAuthorized } = useContext(Context);
  const [proceed, setProceed] = useState(false);

  const callValidation = async (token) => {
    await tokenValidation(token).then((res) => {
      if (res) {
        setProceed(true);
        setUser(res);
        setIsAuthorized(true);
      } else {
        setProceed(false);
        setIsAuthorized(false);
      }
    });
  };

  useEffect(() => {
    try {
      if (isAuthorized) {
        setProceed(true);
      }
      const token = localStorage.getItem('token');
      if (token) {
        callValidation(token);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    proceed || isAuthorized ? children : <Navigate to={ redirectTo } />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
