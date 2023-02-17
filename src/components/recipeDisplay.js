import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeDataContext } from './RecipeDataContext';

export default function RecipeDisplay() {
    const { recipeData } = useContext(RecipeDataContext);
    const { id } = useParams();
    const recipe = recipeData ? recipeData.find(recipe => recipe.id == id) : null;
    var ingredients = "";
    if (recipe) {
        const ingredientList = [...recipe.ingredients]
        ingredientList.forEach(element => {
            ingredients = ingredients + element + " , ";
        }
        );
        ingredients = ingredients.slice(0, -2)

    }
    return (
        <div>
            {recipe ? (
                <div className='singleRecipe'>
                    <h2>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} minutes to cook.</p>
                    <p className='ingredients'>
                        {ingredients}
                    </p>
                    <p>{recipe.method}</p>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}
