import React from 'react'
import './CheckoutSummary.css';
import Pizza from '../../Pizza/Pizza'
import Button from '../../UI/Button/Button'

const CheckoutSummary = (props) => {
    return (
        <div className="checkout-summary">
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Pizza ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked>CANCEL</Button>
            <Button
                btnType="Success"
                clicked>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary
