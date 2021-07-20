export const BASE_URL = "http://api-ecommerce.mark2win.com";

export const ACTION_TYPES = {
    CHANGE_COLUMN_NUM: "CHANGE_COLUMN_NUM",
    FETCH_CHAIR_DATA: "FETCH_CHAIR_DATA",
    FETCH_SINGLE_CHAIR: "FETCH_SINGLE_CHAIR",
    ADD_TO_CART: "ADD_TO_CART",
    CHANGE_QTY: "CHANGE_QTY",
    FETCH_CART: "FETCH_CART",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    REMOVE: "REMOVE",
    FETCH_USER: "FETCH_USER",
    SIGN_OUT: "SIGN_OUT",
    //*-------------this is for payment checkout---------//
    CHECKOUT_SUCCESS: "CHECKOUT_SUCCESS",
    CHECKOUT_FAILED: "CHECKOUT_FAILED",

//*-------------this is for create order ---------//
    CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
    CREATE_ORDER_FAILED: "CREATE_ORDER_FAILED",
    ORDER_STORAGE: "ORDER_STORAGE",
    RE_LOGIN: "RE_LOGIN",
    CREATING_ORDER: "CREATING_ORDER"
}

export const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
})



