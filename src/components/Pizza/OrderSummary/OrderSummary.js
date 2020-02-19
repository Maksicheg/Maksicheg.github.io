import React from 'react'
import Button from '../../UI/Button/Button';
import './OrderSummary.css';


const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => (
            props.ingredients[ingredientKey] > 0
                ? <li key={ingredientKey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>:{props.ingredients[ingredientKey]}
                </li>
                : null
        )
        );


    return (
        <React.Fragment>
            <h3 className="order-summary_title">Your Order</h3>
            <p className="order-summary_subtitle">A delicious pizza with following ingredients:</p>
            <ul className="order-summary_list">
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>{props.price.toFixed(2)}$</strong></p>
            <p className="order-summary_checkout">Continue to Checkout?</p>
            <div className="order-summary_btn-container">
                <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </div>
        </React.Fragment>
    );
};


export default OrderSummary;
