import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const Provider = ({ children }) => {
  const [singupData, setSingupData] = useState({});
  const context = {
    singupData,
    setSingupData,
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
