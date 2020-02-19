import React, { Component } from 'react'
import { connect } from 'react-redux';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/PizzaIngredient/BuidControlls/BuildControls';
import Price from '../../components/Price/Price';
import IngredientsConstructor from '../../components/IngredientsConstructor/IngredientsConstructor';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import * as pizzaMakerActions from '../../store/actions/index';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler';

class PizzaMaker extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false,
    }

    // componentDidMount() {
    //     axios.get('https://react-pizza-maker.firebaseio.com/orders/-M0NsCoC5ND7ZAgIkMs8/ingredients.json')
    //         .then(response => {
    //             this.setState({ ingredients: response.data })
    //         })
    //         .catch(error => {
    //             this.setState({ error: true })
    //         })
    // }

    updatePurchase = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredientsKey => ingredients[ingredientsKey])
            .reduce((sum, element) => sum + element, 0)
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinueHandler = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'MAx SAJDA',
                address: {
                    street: 'TestStreet',
                    zipCode: '4343',
                    country: 'Germany'
                },
                email: 'test@test.com',
            }
        }
        axios.post('/orders.json', order)
            .then(response => this.setState({ loading: false, purchasing: false }))
            .catch(error => this.setState({ loading: false, purchasing: false }));
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = <OrderSummary
            ingredients={this.props.ingredients}
            price={this.props.totalPrice}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler} />

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <IngredientsConstructor
                    ingredients={this.props.ingredients}
                    dragged={this.props.onIngredientDropped} />
                <Pizza ingredients={this.props.ingredients} bases={this.props.bases} />
                <BuildControls
                    show={this.props.dragging}
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    count={this.props.ingredients}
                    purchasable={this.updatePurchase(this.props.ingredients)}
                    ordered={this.purchaseHandler}
                />
                <Price price={this.props.totalPrice.toFixed(2)} />

            </React.Fragment>
        )
    }
}



const mapStateToProps = state => {
    return {
        bases: state.bases,
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        dragging: state.purchasing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(pizzaMakerActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(pizzaMakerActions.removeIngredient(ingName)),
        onIngredientDropped: (ingName) => dispatch(pizzaMakerActions.addIngredient(ingName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PizzaMaker, axios));
