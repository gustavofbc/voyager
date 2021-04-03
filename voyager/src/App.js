 import React from 'react';
 import Menu from './components/menu/index';

import './global.css';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes />
    </div>
  );
}

export default App;
