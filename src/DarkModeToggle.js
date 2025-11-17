import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './DarkModeToggle.css';

const DarkModeToggle = ({ theme, toggleTheme }) => (
  <Button
    variant="light"
    onClick={ toggleTheme }
    className="dark-mode-toggle"
    title={ theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro' }
  >
    {theme === 'light' ? '🌙' : '☀️'}
  </Button>
);

DarkModeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default DarkModeToggle;
