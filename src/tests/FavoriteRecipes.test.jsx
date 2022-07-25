import React from 'react';
import { screen, waitFor, within } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

const favoriteRecipesMock = [

  // {
  //   "alcoholicOrNot": "",
  //   "category": "Side",
  //   "id": "53060",
  //   "image": "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
  //   "name": "Burek",
  //   "nationality": "Croatian",
  //   "type": "food"
  // },
  {
    "alcoholicOrNot": "Alcoholic",
    "category": "Shot",
    "id": "13501",
    "image": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
    "name": "ABC",
    "nationality": "",
    "type": "drink",
  },
  {
    "alcoholicOrNot": "",
    "category": "Goat",
    "id": "52968",
    "image": "https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg",
    "name": "Mbuzi Choma (Roasted Goat)",
    "nationality": "Kenyan",
    "type": "food",
   },
];

describe('Testa página de receitas favoritas', () => {
  test('Verifica se drink favorito esta na página', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipesMock));
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const fav = localStorage.getItem('favoriteRecipes')
    //console.log(fav)

    const favRecipes = screen.getByTestId('profile-favorite-btn');
    expect(favRecipes).toBeInTheDocument()
    userEvent.click(favRecipes);
    expect(history.location.pathname).toBe('/favorite-recipes');

    const allBtn = screen.getByRole('button', {name: /all/i})
    expect(allBtn).toBeInTheDocument();

    const foodBtn = screen.getByRole('button', {name: /food/i})
    expect(foodBtn).toBeInTheDocument();

    const drinkBtn = screen.getByRole('button', {name: /drink/i})
    expect(drinkBtn).toBeInTheDocument();


    const title = screen.getByRole('heading', {name: /abc/i})
    expect(title).toBeInTheDocument()

    const shareBtn = screen.getByRole('heading', {name: /abc/i})
    expect(shareBtn).toBeInTheDocument();

    const favIcon = screen.getByRole('heading', {name: /abc/i})
    expect(favIcon).toBeInTheDocument();

    const imgFav = screen.getByTestId('0-horizontal-image')
    expect(imgFav).toBeInTheDocument();

    const tipeFav = screen.getByTestId('0-horizontal-top-text')
    expect(tipeFav).toBeInTheDocument();

  });
    test('Verifica se drink favorito esta na página', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipesMock));
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const fav = localStorage.getItem('favoriteRecipes')
    //console.log(fav)

    const favRecipes = screen.getByTestId('profile-favorite-btn');
    expect(favRecipes).toBeInTheDocument()
    userEvent.click(favRecipes);
    expect(history.location.pathname).toBe('/favorite-recipes');

    const title = screen.getByRole('heading', {name: /Mbuzi Choma/i})
    expect(title).toBeInTheDocument()

    const imgFav = screen.getByTestId('1-horizontal-image')
    expect(imgFav).toBeInTheDocument();

    const tipeFav = screen.getByTestId('1-horizontal-top-text')
    expect(tipeFav).toBeInTheDocument();

  });
})
