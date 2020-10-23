import React from 'react';
import './RecipeCard.css';

function RecipeCard(props) {
  return (
    <div className="recipe">
      <h3>{props.title}</h3>
      <p>Calories: {props.calories}</p>
      <img src={props.image} alt=""></img>
    </div>
  )
}

export default RecipeCard;
