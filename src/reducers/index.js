import {combineReducers} from "redux";
import {ACTION_TYPES} from "../helper";

const INITIAL_STATE = {
    allChairData: [],
    singleChairData: {},
    changeColumns: false,
    itemsInCart: [],
    quantity: 0
}

const fetchChairDataReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_CHAIR_DATA:
            return {...state, allChairData: [...action.payload]}
        case ACTION_TYPES.FETCH_SINGLE_CHAIR:
            return {...state, singleChairData: {...action.payload}}
        default:
            return state;
    }
}

const switchColumnNumReducer = (state=INITIAL_STATE, action) => {
    if (action.type === ACTION_TYPES.CHANGE_COLUMN_NUM) {
        return {...state, changeColumns: action.payload};
    }
    return state;
}

const cartReducer = (state=INITIAL_STATE, action) => {
    let updatedQty = state.quantity;

    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART:
            updatedQty += action.payload.qty;
            let cartArr = JSON.parse(localStorage.getItem("cartArr"));
            if (cartArr) {
                let idx = cartArr.findIndex((item) => {
                    return item.chairObj.id === action.payload.chairObj.id
                });
                if (idx === -1) {
                    cartArr.push(action.payload);
                } else {
                    if (JSON.stringify(cartArr[idx].checkedIdx) === JSON.stringify(action.payload.checkedIdx)) {
                        cartArr[idx].qty += action.payload.qty;
                    } else {
                        cartArr.push(action.payload);
                    }
                }
                localStorage.setItem("cartArr", JSON.stringify(cartArr))
            } else {
                localStorage.setItem("cartArr", JSON.stringify([action.payload]))
            }
            return {...state, itemsInCart: JSON.parse(localStorage.getItem("cartArr")), quantity: updatedQty}
        // case ACTION_TYPES.INCREMENT:
        //     updatedQty++;
        //     products[action.payload].count++;
        //     return {...state, itemsInCart: products, quantity: updatedQty}
        // case ACTION_TYPES.DECREMENT:
        //     updatedQty--;
        //     products[action.payload].count--;
        //     if (products[action.payload].count === 0) {
        //         products.splice(action.payload, 1);
        //     }
        //     return {...state, itemsInCart: products, quantity: updatedQty}
        // case ACTION_TYPES.REMOVE:
        //     updatedQty -= products[action.payload].count;
        //     products.splice(action.payload, 1);
        //     return {...state, itemsInCart: products, quantity: updatedQty}
        default:
            return state;
    }
}

export default combineReducers({
    fetchChairDataReducer,
    switchColumnNumReducer,
    cartReducer
})