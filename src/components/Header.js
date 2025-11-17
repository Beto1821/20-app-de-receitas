import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import './Header.css';

function Header({ pathname }) {
  const [title, setTitle] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    switch (pathname) {
    case '/foods': setTitle('Foods'); break;
    case '/drinks': setTitle('Drinks'); break;
    case '/profile': setTitle('Profile'); break;
    case '/done-recipes': setTitle('Done Recipes'); break;
    default: setTitle('Favorite Recipes');
    }
  }, [pathname]);

  const changeSearchBar = () => {
    setShowSearchBar((oldState) => !oldState);
  };

  const searchIconElement = (
    <button
      className="search-btn"
      type="button"
      onClick={ changeSearchBar }
    >
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="icone de pesquisa"
      />
    </button>
  );

  const getFoodIcon = () => (
    <svg className="header-icon" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" fill="#FFA500" opacity="0.2" />
      <path
        d="M32 10 L38 20 L50 22 L41 31 L43 43 L32 37 L21 43 L23 31 L14 22 L26 20 Z"
        fill="#FFA500"
      />
      <circle cx="32" cy="32" r="15" fill="#FFD700" />
      <path
        d="M25 28 Q32 35 39 28"
        stroke="#8B4513"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="27" cy="26" r="2" fill="#8B4513" />
      <circle cx="37" cy="26" r="2" fill="#8B4513" />
    </svg>
  );

  const getDrinkIcon = () => (
    <svg className="header-icon" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="cocktail-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#C644FC" />
        </linearGradient>
      </defs>
      <path
        d="M20 15 L44 15 L32 35 L32 50 L42 50 L42 55 L22 55 L22 50 L32 50 L32 35 Z"
        fill="url(#cocktail-grad)"
      />
      <ellipse cx="32" cy="15" rx="12" ry="3" fill="#FFC0CB" opacity="0.5" />
      <circle cx="26" cy="20" r="2" fill="#FF1493" opacity="0.6" />
      <circle cx="35" cy="22" r="1.5" fill="#FF69B4" opacity="0.6" />
      <path
        d="M44 12 L48 8 M48 12 L44 8"
        stroke="#FFD700"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="header-wrapper">
      <header className="header-container">
        <Link to="/profile" className="profile-link">
          <img
            src={ profileIcon }
            alt="icone de perfil"
            data-testid="profile-top-btn"
          />
        </Link>

        <div className="header-center">
          {pathname === '/foods' && getFoodIcon()}
          {pathname === '/drinks' && getDrinkIcon()}
          <span className="header-title" data-testid="page-title">
            { title }
          </span>
        </div>

        <div className="header-right">
          {
            (pathname === '/foods' || pathname === '/drinks')
            && searchIconElement
          }
        </div>
      </header>
      {
        showSearchBar && <SearchBar
          showSearchBar={ showSearchBar }
          pathname={ pathname }
        />
      }
    </div>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
