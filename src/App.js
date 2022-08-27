import React from 'react';
import './styles.css';
import Gifs from './Components/Gifs'
import Like from './Components/Like'

export default function App() {

  return (
    <div className="App">
      <div className="container">
        <Gifs />
        <br />
        <Like />
        </div>
    </div>
  );
  
}
