import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './homepage';
import { RecipeDataContextProvider } from './components/RecipeDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RecipeDataContextProvider>
      <Homepage />
    </RecipeDataContextProvider>
  </BrowserRouter>
);