import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DarkModeToggle = ({ theme, toggleTheme }) => (
  <Button
    variant="secondary"
    onClick={ toggleTheme }
    style={ { position: 'fixed', bottom: '60px', right: '10px', zIndex: 1050 } }
  >
    {theme === 'light' ? '🌙' : '☀️'}
  </Button>
);

DarkModeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default DarkModeToggle;
