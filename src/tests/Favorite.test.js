import React from 'react';
import { within, screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Testa CategoryFilters foods', () => {
  test('Testa category filters foods', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorite-recipes');

    const allBtn = screen.findByTestId('filter-by-all-btn');
    const foodBtn = screen.findByTestId('filter-by-food-btn');
    const drinkBtn = screen.findByTestId('filter-by-drink-btn');
    const profileBtn = screen.findByTestId('profile-top-btn');

    userEvent.click(profileBtn);
    expect(history.location.pathname).toBe('/profile');


  });
})