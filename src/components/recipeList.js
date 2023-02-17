import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function RecipeList({ recipeData }) {
    const navigate = useNavigate();

    const handleCook = (id) => {
        navigate(`/recipe/${id}`);
    };

    return (
        <div className='recipeList'>
            <ul>
                {recipeData.map(recipe => (
                    <li key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <h4> {recipe.cookingTime} minutes to make.</h4>
                        <p>{recipe.method}</p>
                        <button className='cookButton' onClick={() => handleCook(recipe.id)}>Cook This</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
