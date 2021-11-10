import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="row" id="wrapper">
      <div id="hero">
        <div className="header">
          <Link to="/home" className="btn btn-dark">
            ENTRAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
