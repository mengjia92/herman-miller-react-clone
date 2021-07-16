export const BASE_URL = "http://api-ecommerce.mark2win.com";

export const ACTION_TYPES = {
    CHANGE_COLUMN_NUM: "CHANGE_COLUMN_NUM",
    FETCH_CHAIR_DATA: "FETCH_CHAIR_DATA",
    FETCH_SINGLE_CHAIR: "FETCH_SINGLE_CHAIR",
    ADD_TO_CART: "ADD_TO_CART",
    CHANGE_QTY: "CHANGE_QTY",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    REMOVE: "REMOVE",
    FETCH_USER: "FETCH_USER",
    SIGN_OUT: "SIGN_OUT"
}

export const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
})



