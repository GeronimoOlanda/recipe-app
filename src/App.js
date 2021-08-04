import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipes';
import './App.css';

const App = () => {
  const APP_ID = '47e79328'; // ID para acesso
  const APP_KEY = '44375f42db069967095b6857ce6390b7'; // Chave para acesso da aplicacao

  const [recipes, setRecipes] = useState([]); // setando o estado vazio
  const [search, setSearch] = useState(''); // setando o estado vazio
  const [query, setQuery] = useState('chicken'); // setando o estado padrao como chicken

  useEffect(() => {
    getRecipes();
  }, [query]);
  // fazendo a requisicao para a API e retornando um arquivo json-
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  // ira atualizar sempre que a gente digitar uma letra
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // para solucionar o problema do updateSearch, se criou a setQuery e aqui esta passando ela como padrao
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <label>Pesquisar</label>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/* quando formos retornar  um array com elementos html, usando o () */}
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
