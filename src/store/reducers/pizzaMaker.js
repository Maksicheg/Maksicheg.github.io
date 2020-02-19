import * as actionTypes from '../actions/actionTypes';

const initialState = {
    bases: {
        baseTomato: 0,
        baseUsual: 0,
        baseThin: 0
    },
    ingredients: {
        mozzarella: 0,
        salami: 0,
        sturgeon: 0,
        bulgarian: 0,
        hunting: 0,
        meat: 0,
        mushrooms: 0,
        olives: 0,
        pepperoni: 0,
        pineapple: 0,
        prosciutto: 0,
        salmon: 0,
        shrimp: 0,
        tomato: 0,
        tuna: 0,
        cucumber: 0,
        corn: 0,
        arugula: 0,
    },
    totalPrice: 3.99,
    purchasing: false,
};

const INGREDIENT_PRICES = {
    mozzarella: 0.45,
    salami: 1.35,
    sturgeon: 1.2,
    bulgarian: 0.75,
    hunting: 1.1,
    meat: 1.5,
    mushrooms: 0.75,
    olives: 0.9,
    pepperoni: 1.2,
    pineapple: 1.3,
    prosciutto: 25,
    salmon: 3,
    shrimp: 3.15,
    tomato: 0.3,
    tuna: 2.65,
    cucumber: 0.95,
    corn: 0.2,
    arugula: 0.65
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                purchasing: true,
            };

        case actionTypes.REMOVE_INGREDIENT:
            const sum = Object.keys(state.ingredients)
                .map(ingredientsKey => state.ingredients[ingredientsKey])
                .reduce((sum, element) => sum + element, 0)
            const checkForIngredientsAmount = sum - 1 > 0;

            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                purchasing: checkForIngredientsAmount,
            };

        case actionTypes.ADD_BASE:
            console.log(state.bases)
            return {
                ...state,
                bases: {
                    ...state.bases,
                    [action.baseName]: state.bases[action.baseName] + 1
                }
            }

        default:
            return state;
    }
};

export default reducer;