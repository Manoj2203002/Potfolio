import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Index = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? 'black' : 'white';
    document.body.style.color = dark ? 'white' : 'black';
  }, [dark]);

  return (
    <div>
      <div className="header">
        <header className="mani">
          <nav className="nav">
            <h1>Manoj Kumaresan</h1>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Services">Services</Link>
            </div>
            <button id="button" onClick={() => setDark(prev => !prev)}>
              {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Index;
