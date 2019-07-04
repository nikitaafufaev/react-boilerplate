import React from 'react';

import logo from '../assets/logo.png';
import styles from '../styles/App.scss';

const App = () => {
  return (
    <div className={styles.component}>
      <img className={styles.component__img} src={logo} alt="react logo" />
      <h1 className={styles.component__title}>React App</h1>
    </div>
  );
};

export default App;
