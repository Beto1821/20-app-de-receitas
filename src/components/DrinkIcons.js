/* eslint-disable react/no-multi-comp */
import React from 'react';

export const BeerIcon = () => (
  <svg className="drink-icon drink-1" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="beer-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
    <rect
      x="30"
      y="40"
      width="40"
      height="50"
      rx="5"
      fill="url(#beer-grad)"
      opacity="0.8"
    />
    <ellipse
      cx="50"
      cy="40"
      rx="20"
      ry="5"
      fill="#FFF8DC"
      opacity="0.6"
    />
    <rect x="25" y="35" width="5" height="15" fill="#D4AF37" />
    <circle
      cx="45"
      cy="60"
      r="3"
      fill="#FFF"
      opacity="0.3"
    />
  </svg>
);

export const WineIcon = () => (
  <svg className="drink-icon drink-2" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="wine-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8B0000" />
        <stop offset="100%" stopColor="#DC143C" />
      </linearGradient>
    </defs>
    <path
      d="M35 30 L35 60 Q35 75 50 75 Q65 75 65 60 L65 30 Z"
      fill="url(#wine-grad)"
      opacity="0.8"
    />
    <ellipse
      cx="50"
      cy="30"
      rx="15"
      ry="4"
      fill="#FFE4E1"
      opacity="0.4"
    />
    <rect x="48" y="75" width="4" height="10" fill="#8B4513" />
    <ellipse cx="50" cy="85" rx="8" ry="2" fill="#8B4513" />
  </svg>
);

export const CocktailIcon = () => (
  <svg className="drink-icon drink-3" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="cocktail-grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00CED1" />
        <stop offset="100%" stopColor="#1E90FF" />
      </linearGradient>
    </defs>
    <path
      d="M30 25 L70 25 L50 55 L50 75 L65 75 L65 80 L35 80 L35 75 L50 75 L50 55 Z"
      fill="url(#cocktail-grad2)"
      opacity="0.8"
    />
    <ellipse
      cx="50"
      cy="25"
      rx="20"
      ry="4"
      fill="#E0FFFF"
      opacity="0.5"
    />
    <circle cx="45" cy="30" r="2" fill="#FF69B4" />
    <circle cx="55" cy="33" r="2" fill="#FF1493" />
    <path
      d="M70 20 L75 15 M75 20 L70 15"
      stroke="#FFD700"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const JuiceIcon = () => (
  <svg className="drink-icon drink-4" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="juice-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6347" />
        <stop offset="100%" stopColor="#FF4500" />
      </linearGradient>
    </defs>
    <rect
      x="35"
      y="35"
      width="30"
      height="45"
      rx="3"
      fill="url(#juice-grad)"
      opacity="0.8"
    />
    <rect x="32" y="30" width="36" height="6" fill="#C0C0C0" />
    <rect x="48" y="25" width="4" height="8" fill="#C0C0C0" />
    <circle
      cx="50"
      cy="55"
      r="4"
      fill="#FFF"
      opacity="0.3"
    />
    <path d="M40 65 L42 68 L38 68 Z" fill="#FF1493" />
  </svg>
);

export const CoffeeIcon = () => (
  <svg className="drink-icon drink-5" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="coffee-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8B4513" />
        <stop offset="100%" stopColor="#654321" />
      </linearGradient>
    </defs>
    <rect
      x="30"
      y="40"
      width="35"
      height="40"
      rx="4"
      fill="url(#coffee-grad)"
      opacity="0.9"
    />
    <ellipse
      cx="47.5"
      cy="40"
      rx="17.5"
      ry="4"
      fill="#DEB887"
      opacity="0.5"
    />
    <path
      d="M65 50 Q75 50 75 60 Q75 70 65 70"
      stroke="#8B4513"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M35 35 Q40 30 45 35"
      stroke="#FFF"
      strokeWidth="1"
      fill="none"
      opacity="0.5"
    />
  </svg>
);

export const HeartIcon = () => (
  <svg className="drink-icon drink-6" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="25" fill="#FF69B4" opacity="0.2" />
    <path
      d="M35 55 Q50 70 65 55 Q65 40 50 40 Q35 40 35 55 Z"
      fill="#FF1493"
      opacity="0.7"
    />
    <circle cx="45" cy="48" r="2" fill="#FFF" />
    <circle cx="55" cy="48" r="2" fill="#FFF" />
  </svg>
);

export const LogoIcon = () => (
  <svg className="logo-icon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="#fff" opacity="0.1" />
    <path
      d="M30 40 L40 30 L60 30 L70 40 L70 60 L60 70 L40 70 L30 60 Z"
      fill="#fff"
      opacity="0.2"
    />
    <text
      x="50"
      y="65"
      fontSize="48"
      fill="#fff"
      textAnchor="middle"
      fontWeight="bold"
    >
      🍽️
    </text>
  </svg>
);

export const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
