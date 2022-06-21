import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoadig] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const context = {
    user,
    setUser,
    isAuthorized,
    setIsAuthorized,
    loading,
    setLoadig,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
