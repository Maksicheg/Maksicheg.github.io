import React from 'react'
import './BuildControl.css';

const BuildControl = (props) => (

    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button onClick={props.removed} disabled={props.disabled}>Less</button>
        <p>{props.count * props.weight} grams</p>
        <button onClick={props.added}>More</button>
    </div>
);

export default BuildControl
