import React from 'react'
import './Modal.css';
// import { Aux } from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className="Modal"
            style={{
                display: props.show ? 'block' : 'none'
            }}>
            {props.children}
        </div>
    </React.Fragment>
);

export default Modal
