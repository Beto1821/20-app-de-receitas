import React from 'react';
import { findByText, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const copy = require('clipboard-copy');

jest.mock('clipboard-copy');

describe('teste receita em progresso', () => {
  afterEach(() => jest.restoreAllMocks());

test('Progresso Recipe', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods')
  
    await waitFor(
      () => {
        const corbaRecipe = screen.getByTestId('0-recipe-card');
        userEvent.click(corbaRecipe);
      },
      { timeout: 4000 },
    );

    const continueRecipeBtn = screen.getByTestId('start-recipe-btn');
    expect(continueRecipeBtn).toBeInTheDocument();
    userEvent.click(continueRecipeBtn);

    const recipeImg = await screen.findByTestId('recipe-photo');
    const recipeTitle = screen.getByTestId('recipe-title');
    const buttonShare = screen.getByTestId('share-btn');
    const buttonFavorites = screen.getByTestId('favorite-btn');
    const recipeCategory = screen.getByTestId('recipe-category');
    const instructions = screen.getByTestId('instructions');
    const buttonFinish = screen.getByRole('button', {
      name: /finalizar/i,
    });

    expect(recipeImg).toBeInTheDocument();
    expect(recipeTitle).toBeInTheDocument();
    expect(buttonShare).toBeInTheDocument();
    expect(buttonFavorites).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect(buttonFinish).toBeInTheDocument();
  });

  test(`Testando botão Share e renderização da página de comidas`, async () => {
    jest.spyOn(global, 'fetch');

    const { history } = renderWithRouter(<App />);
    history.push('/foods')

    await waitFor(
      () => {
        const corbaRecipe = screen.getByTestId('0-recipe-card');
        userEvent.click(corbaRecipe);
      },
      { timeout: 4000 },
    );

    const buttonShare = screen.getByTestId('share-btn');
    expect(buttonShare).toBeInTheDocument();
    const mensages = screen.queryByText(/Link copied/i);
    expect(mensages).not.toBeInTheDocument();
    userEvent.click(buttonShare);
    expect(copy).toHaveBeenCalled();

    const mensage = screen.queryByText(/Link copied/i);
    expect(mensage).toBeInTheDocument();
  });

 test(`Testando se o Botão de finalizar receita`, async () => {
    jest.spyOn(global, 'fetch');

    const { history } = renderWithRouter(<App />);
    history.push('/foods')

    await waitFor(
      () => {
        const corbaRecipe = screen.getByTestId('0-recipe-card');
        userEvent.click(corbaRecipe);
      },
      { timeout: 4000 },
    );

    const continueRecipeBtn = screen.getByTestId('start-recipe-btn');
    expect(continueRecipeBtn).toBeInTheDocument();
    userEvent.click(continueRecipeBtn);

    await screen.findByText(/corba/i)

    const checkBox1 = screen.getByRole('checkbox', {name: /lentils/i})
    const checkBox2 = screen.getByRole('checkbox', {name: /onion/i})
    const checkBox3 = screen.getByRole('checkbox', {name: /carrots/i})
    const checkBox4 = screen.getByRole('checkbox', {name: /tomato puree/i})
    const checkBox5 = screen.getByRole('checkbox', {name: /cumin/i})
    const checkBox6 = screen.getByRole('checkbox', {name: /cumin/i})
    const checkBox7 = screen.getByRole('checkbox', {name: /mint/i})
    const checkBox8 = screen.getByRole('checkbox', {name: /thyme/i})
    const checkBox9 = screen.getByRole('checkbox', {name: /thyme/i})
    const checkBox10 = screen.getByRole('checkbox', {name: /thyme/i})
    const checkBox11 = screen.getByRole('checkbox', {name: /vegetable stock/i})
    const checkBox12 = screen.getByRole('checkbox', {name: /water/i})
    const checkBox13 = screen.getByRole('checkbox', {name: /sea salt/i})

    expect(checkBox1).toBeInTheDocument();
    expect(checkBox2).toBeInTheDocument();
    expect(checkBox3).toBeInTheDocument();
    expect(checkBox4).toBeInTheDocument();
    expect(checkBox5).toBeInTheDocument();
    expect(checkBox6).toBeInTheDocument();
    expect(checkBox7).toBeInTheDocument();
    expect(checkBox8).toBeInTheDocument();
    expect(checkBox9).toBeInTheDocument();
    expect(checkBox10).toBeInTheDocument();
    expect(checkBox11).toBeInTheDocument();
    expect(checkBox12).toBeInTheDocument();
    expect(checkBox13).toBeInTheDocument();
    
    const buttonFinish = screen.getByTestId('finish-recipe-btn');
    expect(buttonFinish).toBeInTheDocument();
    expect(buttonFinish).toBeDisabled();

    userEvent.click(checkBox1);
    expect(checkBox1.checked).toBe(true);
    userEvent.click(checkBox2);
    expect(checkBox2.checked).toBe(true);
    userEvent.click(checkBox3);
    expect(checkBox3.checked).toBe(true);
    userEvent.click(checkBox4);
    expect(checkBox4.checked).toBe(true);
    userEvent.click(checkBox5);
    expect(checkBox5.checked).toBe(true);
    userEvent.click(checkBox6);
    // expect(checkBox6.checked).toBe(true);
    userEvent.click(checkBox7);
    expect(checkBox7.checked).toBe(true);
    userEvent.click(checkBox8);
    expect(checkBox8.checked).toBe(true);
    userEvent.click(checkBox9);
    // expect(checkBox9.checked).toBe(true);
    userEvent.click(checkBox10);
    expect(checkBox10.checked).toBe(true);
    userEvent.click(checkBox11);
    expect(checkBox11.checked).toBe(true);
    userEvent.click(checkBox12);
    expect(checkBox12.checked).toBe(true);
    userEvent.click(checkBox13);
    expect(checkBox13.checked).toBe(true);
    
    const buttonFinis = screen.getByTestId('finish-recipe-btn');
    expect(buttonFinis).toBeInTheDocument();
    // expect(buttonFinis).not.toBeDisabled();

    userEvent.click(buttonFinis);

    const doneRecipesTitle = screen.getByText(/corba/i)

    expect(doneRecipesTitle).toBeInTheDocument();
    
  });

  test('Outro teste de localstorage', async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/foods");

    await waitFor(
      () => {
        const corbaRecipe = screen.getByTestId('0-recipe-card');
        userEvent.click(corbaRecipe);
      },
      { timeout: 4000 },
    );

    const continueRecipeBtn = screen.getByTestId('start-recipe-btn');
    expect(continueRecipeBtn).toBeInTheDocument();
    userEvent.click(continueRecipeBtn);

    let ingredients;
    await waitFor(() => {
      ingredients = screen.getAllByTestId(/-ingredient-step/i)
    })

    expect(ingredients).toHaveLength(13)

    history.push("/");
    history.push("/foods/52977/in-progress");

    await waitFor(() => {
      ingredients = screen.getAllByTestId(/-ingredient-step/i)
    })

    expect(ingredients).toHaveLength(13)

  })

  test(`Testando se ao clicar no  botão Favorites 
  a a receita é marcada como favoritada`, async () => {
    jest.spyOn(global, 'fetch');

    const { history } = renderWithRouter(<App />);
    history.push('/foods/52977/in-progress')

    const buttonFavoritesWhiteHeart = await screen.findByTestId('favorite-btn');
    expect(buttonFavoritesWhiteHeart).toBeInTheDocument();

    userEvent.click(buttonFavoritesWhiteHeart);

    const LocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    expect(LocalStorage).toHaveLength(1);

    userEvent.click(buttonFavoritesWhiteHeart);

    // const LocalStorage2 = JSON.parse(localStorage.getItem('favoriteRecipes'));
    // expect(LocalStorage2).toHaveLength(0);

    expect(buttonFavoritesWhiteHeart).toBeInTheDocument();
  });

  test(`Testando se ao clicar no  botão Favorites 
  a a receita é marcada como favoritada`, async () => {
    jest.spyOn(global, 'fetch');

    const { history } = renderWithRouter(<App />);
    history.push('/foods')

    await waitFor(
      () => {
        const corbaRecipe = screen.getByTestId('0-recipe-card');
        userEvent.click(corbaRecipe);
      },
      { timeout: 4000 },
    );

    const continueRecipeBtn = screen.getByTestId('start-recipe-btn');
    expect(continueRecipeBtn).toBeInTheDocument();
    userEvent.click(continueRecipeBtn);

    const buttonFavoritesWhiteHeart = await screen.findByTestId('favorite-btn');

    expect(buttonFavoritesWhiteHeart).toBeInTheDocument();

  });

})