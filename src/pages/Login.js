import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Form } from 'react-bootstrap';
import { cleanLocalStorage, saveLocalStorage } from '../services/localStorage';
import {
  BeerIcon,
  WineIcon,
  CocktailIcon,
  JuiceIcon,
  CoffeeIcon,
  HeartIcon,
  LogoIcon,
  ArrowIcon,
} from '../components/DrinkIcons';
import './Login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    cleanLocalStorage();
  }, []);

  useEffect(() => {
    const enabledButton = () => {
      const minimumPassword = 6;
      const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (regExp.test(email) && password.length >= minimumPassword) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };

    enabledButton();
  }, [email, password]);

  const handleEmailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handlePasswordChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  const submitUser = () => {
    const { history } = props;
    const userEmail = {
      email,
    };

    saveLocalStorage(JSON.stringify(userEmail));

    history.push('/foods');
  };

  return (
    <Container className="login-container">
      <div className="login-decorations">
        <BeerIcon />
        <WineIcon />
        <CocktailIcon />
        <JuiceIcon />
        <CoffeeIcon />
        <HeartIcon />
      </div>

      <div className="login-content">
        <div className="login-header">
          <LogoIcon />
          <h1 className="page-title">Recipes</h1>
          <h2 className="page-subtitle">App</h2>
          <p className="login-tagline">Discover Amazing Recipes & Drinks</p>
        </div>

        <Form className="login-form">
          <Form.Group className="form-group">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              className="form-input"
              type="email"
              placeholder="seu@email.com"
              value={ email }
              onChange={ handleEmailChange }
              data-testid="email-input"
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={ password }
              onChange={ handlePasswordChange }
              data-testid="password-input"
            />
          </Form.Group>

          <Button
            variant={ isDisabled ? 'secondary' : 'primary' }
            className="login-button"
            type="button"
            disabled={ isDisabled }
            onClick={ submitUser }
            data-testid="login-submit-btn"
          >
            <span>Enter</span>
            <ArrowIcon />
          </Button>
        </Form>
      </div>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
