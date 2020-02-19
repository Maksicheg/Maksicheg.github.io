import React from 'react'
import './IngredientsConstructor.css';
import IngredientItem from './IngredientItem/IngredientItem';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/images/Ingredients', false, /\.(png|jpe?g|svg)$/));

const IngredientsConstructor = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .sort()
        .map((ingredientKey, index) => (
            <IngredientItem
                key={ingredientKey}
                label={ingredientKey.charAt(0).toUpperCase() + ingredientKey.slice(1)}
                link={images[index]}
                dragged={() => props.dragged(ingredientKey)}
            />
        ));

    return (
        <div className="IngredientsConstructor">
            {transformedIngredients}
        </div>
    )
}

export default IngredientsConstructor
