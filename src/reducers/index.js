import {combineReducers} from "redux";
import {ACTION_TYPES} from "../helper";
import { reducer as formReducer } from "redux-form";

const INITIAL_STATE = {
    allChairData: [],
    singleChairData: {},
    changeColumns: false,
    itemsInCart: [],
    quantity: 0,
    userCredential: null,
    isSignedIn: false
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
        case ACTION_TYPES.CHANGE_QTY:
            let cartArr1 = JSON.parse(localStorage.getItem("cartArr"));
            cartArr1 = cartArr1.map((item, idx) => {
                if (idx === action.payload.idx) {
                    updatedQty = updatedQty - item.qty + Number(action.payload.qty);
                    item.qty = action.payload.qty
                    return item
                } else {
                    return item
                }})
            localStorage.setItem("cartArr", JSON.stringify(cartArr1))
            return {...state, itemsInCart: JSON.parse(localStorage.getItem("cartArr")), quantity: updatedQty}
        case ACTION_TYPES.REMOVE:
            let cartArr2 = JSON.parse(localStorage.getItem("cartArr"));
            updatedQty -= cartArr2[action.payload].qty;
            cartArr2.splice(action.payload, 1);
            localStorage.setItem("cartArr", JSON.stringify(cartArr2));
            return {...state, itemsInCart: JSON.parse(localStorage.getItem("cartArr")), quantity: updatedQty}
        default:
            return state;
    }
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_USER:
            return {...state, userCredential: action.payload, isSignedIn: true}
        case ACTION_TYPES.SIGN_OUT:
            return {...state, isSignedIn: false}
        default:
            return state
    }
}

export default combineReducers({
    fetchChairDataReducer,
    switchColumnNumReducer,
    cartReducer,
    form: formReducer,
    userReducer
})