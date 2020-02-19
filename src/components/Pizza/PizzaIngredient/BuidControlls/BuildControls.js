import React from 'react'
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Mozzarella', type: 'mozzarella', weight: 50 },
    { label: 'Salami', type: 'salami', weight: 25 },
    { label: 'Sturgeon', type: 'sturgeon', weight: 50 },
    { label: 'Bulgarian', type: 'bulgarian', weight: 50 },
    { label: 'Hunting', type: 'hunting', weight: 50 },
    { label: 'Meat', type: 'meat', weight: 50 },
    { label: 'Mushrooms', type: 'mushrooms', weight: 40 },
    { label: 'Olives', type: 'olives', weight: 40 },
    { label: 'Pepperoni', type: 'pepperoni', weight: 70 },
    { label: 'Pineapple', type: 'pineapple', weight: 40 },
    { label: 'Prosciutto', type: 'prosciutto', weight: 50 },
    { label: 'Salmon', type: 'salmon', weight: 40 },
    { label: 'Shrimp', type: 'shrimp', weight: 50 },
    { label: 'Tomato', type: 'tomato', weight: 50 },
    { label: 'Tuna', type: 'tuna', weight: 30 },
    { label: 'Cucumber', type: 'cucumber', weight: 50 },
    { label: 'Corn', type: 'corn', weight: 30 },
    { label: 'Arugula', type: 'arugula', weight: 10 },
]

const BuildControls = (props) => (
    <div className="BuildControls" style={{
        opacity: props.show ? '1' : '0'
    }}>
        {controls.map(control =>
            props.count[control.type] > 0
                ? <BuildControl
                    key={control.label}
                    weight={control.weight}
                    label={control.label}
                    removed={() => props.ingredientRemoved(control.type)}
                    added={() => props.ingredientAdded(control.type)}
                    disabled={props.disabled[control.type]}
                    count={props.count[control.type]}
                />
                : null
        )}
        <button
            className="OrderButton"
            disabled={!props.purchasable}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
);

export default BuildControls
