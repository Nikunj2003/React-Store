import React from 'react';
import '../styles/Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = ({ onSearchChange }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  return (
    <div className={`Header ${isHome && 'home'} ${isContact && 'contact'}`}>
      <div className={`Header-title ${isHome && 'home'}`}>
        <NavLink to="/">Clothing Heaven</NavLink>
      </div>
      <nav className="Header-nav">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="Header-search">
        <input
          type="text"
          placeholder="Search products..."
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

export default Header;
