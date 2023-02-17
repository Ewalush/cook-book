import React from 'react'
import RecipeList from './components/recipeList';

export default function Recipes({ searchTerm, recipeData, ingredientData }) {
  if (searchTerm.trim() == "") {
    return (
      <div>
        {recipeData && ingredientData && <RecipeList recipeData={recipeData} ingredientData={ingredientData} />}
      </div>
    );
  }
  else {
    return (
      <div>
        <h2>Recipes containing {searchTerm}</h2>
        {recipeData && ingredientData && <RecipeList recipeData={recipeData} ingredientData={ingredientData} />}
      </div>
    );
  }
}