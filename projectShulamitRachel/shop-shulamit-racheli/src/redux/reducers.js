import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actionTypes";

const initialState = {
    basket: []
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}