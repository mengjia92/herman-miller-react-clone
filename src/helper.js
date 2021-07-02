export const BASE_URL = "http://api-ecommerce.mark2win.com/product";

export const ACTION_TYPES = {
    CHANGE_COLUMN_NUM: "CHANGE_COLUMN_NUM",
    FETCH_CHAIR_DATA: "FETCH_CHAIR_DATA",
    FETCH_SINGLE_CHAIR: "FETCH_SINGLE_CHAIR",
    ADD_TO_CART: "ADD_TO_CART",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    REMOVE: "REMOVE"
}

export const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
})



