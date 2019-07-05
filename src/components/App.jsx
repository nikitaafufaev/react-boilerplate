import React from 'react';

import logo from '../assets/logo.png';
import '../styles/App.scss';

const App = () => {
  return (
    <div className="component">
      <img className="component__img" src={logo} alt="react logo" />
      <h1 className="component__title">React App</h1>
    </div>
  );
};

export default App;
