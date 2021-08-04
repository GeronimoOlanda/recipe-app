import React from 'react';
import PropTypes from 'prop-types'; // ES6
import style from '../../styles/recipe.module.css';
import './index.css';
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.container}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredient.title}> {ingredient.text} </li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

Recipe.propTypes = {
  title: PropTypes.string,
  calories: PropTypes.number,
  image: PropTypes.string,
  ingredients: PropTypes.string,
};

export default Recipe;
