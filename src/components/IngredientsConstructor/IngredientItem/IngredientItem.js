import React from 'react'
import './IngredientItem.css';

const IngredientItem = (props) => {
    return (
        <div className="IngredientItem" onDragEnd={props.dragged}>
            <div className="IngredientContainer">
                <img src={props.link} alt={props.label} />
            </div>
            <p>{props.label}</p>
        </div>
    );
}



export default IngredientItem;
