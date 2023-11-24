import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <p className="Home-text">
      The online premium
      <br /> Clothing store
    </p>
    <Link to="/shop" className="Home-link">
      Enter
    </Link>
  </div>
);

export default Home;
