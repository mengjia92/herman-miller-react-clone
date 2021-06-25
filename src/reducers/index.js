import {combineReducers} from "redux";
import {ACTION_TYPES} from "../helper";

const INITIAL_STATE = {
    changeColumns: false,
    itemsInCart: [],
    quantity: 0
}

const fetchChairDataReducer = (state=[], action) => {
    if (action.type === ACTION_TYPES.FETCH_CHAIR_DATA) {
        return [...state, ...action.payload];
    }
    return state;
}

const switchColumnNum = (state=INITIAL_STATE, action) => {
    if (action.type === ACTION_TYPES.CHANGE_COLUMN_NUM) {
        return {...state, changeColumns: action.payload};
    }
    return state;
}

const cartReducer = (state=INITIAL_STATE, action) => {
    const products = state.itemsInCart;
    let updatedQty = state.quantity;

    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART:
            updatedQty++;
            if (products.length === 0) {
                products.push(action.payload);
            } else {
                let idx = products.findIndex((item) => {
                    return item.id === action.payload.id
                });
                if (idx === -1) {
                    products.push(action.payload);
                } else {
                    products[idx].count++;
                }
            }
            return {...state, itemsInCart: products, quantity: updatedQty}
        case ACTION_TYPES.INCREMENT:
            updatedQty++;
            products[action.payload].count++;
            return {...state, itemsInCart: products, quantity: updatedQty}
        case ACTION_TYPES.DECREMENT:
            updatedQty--;
            products[action.payload].count--;
            if (products[action.payload].count === 0) {
                products.splice(action.payload, 1);
            }
            return {...state, itemsInCart: products, quantity: updatedQty}
        case ACTION_TYPES.REMOVE:
            updatedQty -= products[action.payload].count;
            products.splice(action.payload, 1);
            return {...state, itemsInCart: products, quantity: updatedQty}
        default:
            return state;
    }
}

export default combineReducers({
    fetchChairDataReducer,
    switchColumnNum,
    cartReducer
})