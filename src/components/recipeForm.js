import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeDataContext } from './RecipeDataContext';

export default function RecipeForm() {
    const navigate = useNavigate();
    const { setRecipeData } = useContext(RecipeDataContext);

    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [method, setMethod] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleCookingTimeChange = (e) => {
        setCookingTime(e.target.value);
    };

    const handleMethodChange = (e) => {
        setMethod(e.target.value);
    };

    const handleIngredientChange = (e, index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = e.target.value;
        setIngredients(updatedIngredients);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { title, cookingTime, method, ingredients };

        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
            .then(() => {
                fetch('http://localhost:8000/recipes')
                    .then(res => res.json())
                    .then(recipes => {
                        setRecipeData(recipes);
                    })
                    .catch(error => {
                        console.error(error);
                    });
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='newRecipe'>
            <h2>Add a new Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3 htmlFor="title">Recipe title: </h3>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <h3>Recipe ingredients:</h3>
                    {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <input type="text" value={ingredient} onChange={(e) => handleIngredientChange(e, index)} />
                            <button type="button" onClick={() => handleRemoveIngredient(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
                </div>
                <div>
                    <h3 >Recipe method:</h3>
                    <input type="text" id="method" value={method} onChange={handleMethodChange} />
                </div>
                <div>
                    <h3>Cooking Time(In minutes):</h3>
                    <input type="text" id="cookingTime" value={cookingTime} onChange={handleCookingTimeChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};