import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando recipe in progress', () => {
  test('Testando os botao de share drink', async () => {
    const { history } = renderWithRouter(<App />);

    history.push('drinks/15997/in-progress');

    const title = await screen.findByText('GG');
    expect(title).toBeInTheDocument();

    const btnComp = screen.getByTestId('share-btn');
    expect(btnComp).toBeInTheDocument();

    window.document.execCommand = jest.fn(() => true)
    userEvent.click(btnComp)
    expect(await screen.findByText('Link copied!'))

  });
  test('Testando check dos ingredientes', async () => {
    const { history } = renderWithRouter(<App />);

    history.push('/drinks/15997');

    const btnStart = await screen.findByTestId('start-recipe-btn');
    expect(btnStart.innerHTML).toBe('Start Recipe');
    userEvent.click(btnStart);
    expect(history.location.pathname).toBe('/drinks/15997/in-progress');

    history.push('/drinks/15997/in-progress');

    const labelCheck0 = await screen.findByTestId('0-ingredient-step');
    expect(labelCheck0).toBeInTheDocument();

    const check0 = screen.getByRole('checkbox', {name: /galliano/i});
    expect(check0).toBeInTheDocument();

    expect(check0.checked).toBe(false);
    userEvent.click(check0);

    expect(check0.checked).toBe(true);
    userEvent.click(check0);

    expect(check0.checked).toBe(false);
    userEvent.click(check0);

    const labelCheck1 = await screen.findByTestId('1-ingredient-step');
    expect(labelCheck1).toBeInTheDocument();

    const check1 = screen.getByRole('checkbox', {name: /ginger ale/i});
    expect(check1).toBeInTheDocument();

    expect(check1.checked).toBe(false);

    userEvent.click(check1);
    expect(check0.checked).toBe(true);
    expect(check1.checked).toBe(true);

    userEvent.click(check1);
    expect(check0.checked).toBe(true);
    expect(check1.checked).toBe(false);

    history.push('drinks/15997/in-progress');

    expect(check0.checked).toBe(true);
    expect(check1.checked).toBe(false);

    history.push('/drinks/14610/in-progress');

    const titleAqua = await screen.findByText('ACID');
    expect(titleAqua).toBeInTheDocument()

    const check2 = screen.getByRole('checkbox', {name: /wild turkey/i});
    expect(check2).toBeInTheDocument();
    userEvent.click(check2);
    expect(check2.checked).toBe(true);

    history.push('drinks/15997/in-progress');

    expect(check0.checked).toBe(true);
    expect(check1.checked).toBe(false);
    expect(check2.checked).toBe(true);

    history.push('/drinks/15997');

    const btnContinue = await screen.findByTestId('start-recipe-btn');
    // expect(btnContinue.innerHTML).toBe('Continue Recipe');

    history.push('/drinks/15997/in-progress');

    const btnFinishDisabled = await screen.findByTestId('finish-recipe-btn');
    expect(btnFinishDisabled.disabled).toBe(true);

    const checkGG1 = screen.getByRole('checkbox', {name: /ginger ale/i});
    expect(checkGG1).toBeInTheDocument();
    userEvent.click(checkGG1);
    
    const checkGG2 = screen.getByRole('checkbox', {name: /ice/i});
    expect(checkGG2).toBeInTheDocument();
    userEvent.click(checkGG2); 
    
    expect(check0.checked).toBe(true);
    expect(checkGG1.checked).toBe(true);
    expect(checkGG2.checked).toBe(true);
    
    const btnFinishActive = await screen.findByTestId('finish-recipe-btn');
    expect(btnFinishActive.disabled).toBe(false);

    userEvent.click(btnFinishActive);

    history.push('/done-recipes');
    expect(history.location.pathname).toBe('/done-recipes');

    const title = await screen.findByText('GG');
    expect(title).toBeInTheDocument();

    const done= screen.getByTestId('0-horizontal-done-date');
    expect(done).toBeInTheDocument();
    
    const btnComp = screen.getByTestId('0-horizontal-share-btn');
    expect(btnComp).toBeInTheDocument();

    window.document.execCommand = jest.fn(() => true)
    userEvent.click(btnComp)
    expect(await screen.findByText('Link copied!'))
  });
});