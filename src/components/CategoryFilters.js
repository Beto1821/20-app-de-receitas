import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
import RecipeContext from '../context/RecipeContext';

const FONT_FAMILY = 'Source Sans Pro';

function CategoryFilters({ pathname }) {
  const { categories, updateCategoryFilter } = useContext(RecipeContext);
  const { foodCategories, drinkCategories } = categories;

  const buttonCreator = (item, index) => (
    <Button
      style={ { fontFamily: FONT_FAMILY, fontWeight: '600', fontSize: '1.1em' } }
      variant="outline-success"
      className="fs-6 flex-grow-1"
      type="button"
      key={ index }
      data-testid={ `${item.strCategory}-category-filter` }
      onClick={ () => updateCategoryFilter(item.strCategory, pathname) }
    >
      { item.strCategory }
    </Button>
  );

  return (
    <Container
      fluid
      className="p-0"
      style={ { transition: '0.3s ease-in', marginTop: '64px' } }
    >
      <ButtonToolbar className="mb-1" style={ { width: '100%' } }>
        <ButtonGroup size="sm" className="d-flex" style={ { width: '100%' } }>
          <Button
            style={ {
              fontFamily: FONT_FAMILY, fontWeight: '600', fontSize: '1.1em' } }
            variant="outline-success"
            className="fs-6 flex-grow-1"
            type="button"
            data-testid="All-category-filter"
            onClick={ () => updateCategoryFilter('All', pathname) }
          >
            All
          </Button>

          {(pathname === '/foods') && foodCategories.map(buttonCreator)}

          {(pathname === '/drinks') && drinkCategories.map(buttonCreator)}
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  );
}

CategoryFilters.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default CategoryFilters;
