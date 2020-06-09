import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This my first React App
          <br />Stay Tuned!
          Follow me for more interesting Projects
        </p>
      </header>
      <footer>
        <p>
          Created by <a href="https://www.instagram.com/tgf476">The Great Faizan</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
