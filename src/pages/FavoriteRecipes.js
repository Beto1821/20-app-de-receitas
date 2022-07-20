import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import DoneFavFilter from '../components/DoneFavFilter';
import RecipeContext from '../context/RecipeContext';
import ShareButton from '../components/ShareButton';

function FavoriteRecipes({ history: { location: { pathname } } }) {
  const { favoriteRecipes, filteredRecipes,
    setFilteredRecipes } = useContext(RecipeContext);

  useEffect(() => setFilteredRecipes(favoriteRecipes),
    [favoriteRecipes, setFilteredRecipes]);

  const createRecipeCards = (recipe, index) => (
    <div key={ recipe.id }>
      <Link to={ `/${recipe.type}s/${recipe.id}` }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
          width="100px"
          height="100px"
        />
      </Link>
      <ShareButton recipe={ recipe } index={ index } />
    </div>
  );

  return (
    <div>
      <Header pathname={ pathname } />
      <DoneFavFilter pathname={ pathname } />
      <div>
        { filteredRecipes.map(createRecipeCards) }
      </div>
    </div>
  );
}

FavoriteRecipes.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default FavoriteRecipes;
