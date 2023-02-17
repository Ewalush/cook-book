import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Recipes from './recipes';
import RecipeForm from './components/recipeForm';
import { RecipeDataContext } from './components/RecipeDataContext';
import RecipeDisplay from './components/recipeDisplay'
import './homepage.css'

export default function Homepage() {
    const { recipeData, setRecipeData, ingredientData, setIngredientData } = useContext(RecipeDataContext);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/recipes')
            .then(res => {
                return res.json();
            })
            .then(recipes => {
                setRecipeData(recipes);
                const ingredients = recipes.map(recipe => recipe.ingredients);
                setIngredientData(ingredients);
            });
    }, [setIngredientData, setRecipeData]);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredRecipes = recipeData?.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <div className='homepage'>
                <Navbar handleSearch={handleSearch} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            recipeData && ingredientData ? (
                                <Recipes searchTerm={searchTerm} recipeData={filteredRecipes} ingredientData={ingredientData} />
                            ) : null
                        }
                    />
                    <Route path="/recipeForm/new" element={<RecipeForm />} />
                    <Route path="/recipe/:id" element={<RecipeDisplay />} />
                </Routes>
            </div>
        </>
    );
}