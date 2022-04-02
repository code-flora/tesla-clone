import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  // generate state for burger menu toggle
  const [burgerStatus, setBurgerStatus] = useState(false);

  let openMenu = () => {
    setBurgerStatus(true);
  }

  let closeMenu = () => {
    setBurgerStatus(false);
  }
  return (
    <div className="App">
      <Header openMenu={openMenu} closeMenu={closeMenu} burgerStatus={burgerStatus} />
      <Home menuOpen={burgerStatus} />
    </div>
  );
}

export default App;
