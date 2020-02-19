import React from 'react';
import './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const Pizza = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => [...Array(props.ingredients[ingredientKey])]
            .map((_, index) => (<PizzaIngredient key={ingredientKey + index} type={ingredientKey} />)))
        .reduce((array, element) => array.concat(element), []);

    let transformedBases = Object.keys(props.bases)
        .map(baseKey => [...Array(props.bases[baseKey])]
            .map((_, index) => (<PizzaIngredient key={baseKey + index} type={baseKey} />)))
        .reduce((array, element) => array.concat(element), []);

    return (
        <div className="Pizza">
            {transformedBases}
            {transformedIngredients}
        </div>
    )
}

export default Pizza
