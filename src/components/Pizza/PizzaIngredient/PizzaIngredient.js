import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './PizzaIngredient.css';


class PizzaIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('baseTomato'):
                ingredient = <div className="BaseTomato"></div>
                break;
            case ('baseThin'):
                ingredient = <div className="BaseThin"></div>
                break;
            case ('baseUsual'):
                ingredient = <div className="BaseUsual"></div>
                break;
            case ('olives'):
                ingredient = <div className="Olives"></div>
                break;
            case ('mozzarella'):
                ingredient = <div className="Mozzarella"></div>
                break;
            case ('meat'):
                ingredient = <div className="Meat"></div>
                break;
            case ('arugula'):
                ingredient = <div className="Arugula"></div>
                break;
            case ('bulgarian'):
                ingredient = <div className="Bulgarian"></div>
                break;
            case ('corn'):
                ingredient = <div className="Corn"></div>
                break;
            case ('hunting'):
                ingredient = <div className="Hunting"></div>
                break;
            case ('mushrooms'):
                ingredient = <div className="Mushrooms"></div>
                break;
            case ('pepperoni'):
                ingredient = <div className="Pepperoni"></div>
                break;
            case ('pineapple'):
                ingredient = <div className="Pineapple"></div>
                break;
            case ('prosciutto'):
                ingredient = <div className="Prosciutto"></div>
                break;
            case ('salami'):
                ingredient = <div className="Salami"></div>
                break;
            case ('salmon'):
                ingredient = <div className="Salmon"></div>
                break;
            case ('shrimp'):
                ingredient = <div className="Shrimp"></div>
                break;
            case ('cucumber'):
                ingredient = <div className="Cucumber"></div>
                break;
            case ('sturgeon'):
                ingredient = <div className="Sturgeon"></div>
                break;
            case ('tomato'):
                ingredient = <div className="Tomato"></div>
                break;
            case ('tuna'):
                ingredient = <div className="Tuna"></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default PizzaIngredient;
