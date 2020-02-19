import React from 'react'
import './Price.css';

const Price = (props) => {
    return (
        <div className="Price">
            Current Price: <strong>{props.price}</strong>$
        </div>
    )
}

export default Price
