import * as actionTypes from './actionTypes';

export const addBase = name => {
    return {
        type: actionTypes.ADD_BASE,
        baseName: name
    }
}