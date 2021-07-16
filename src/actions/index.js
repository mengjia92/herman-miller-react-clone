import {BASE_URL, ACTION_TYPES} from "../helper";
import axios from "axios";

export const actFetchChairData = () => {
    return async dispatch => {
        let res = await axios.get(`${BASE_URL}/product`);
        dispatch ({
            type: ACTION_TYPES.FETCH_CHAIR_DATA,
            payload: res.data.data
        })
    }
}

export const actFetchSingleChair = (id) => {
    return async dispatch => {
        let res = await axios.get(`${BASE_URL}/product/${id}`);
        dispatch ({
            type: ACTION_TYPES.FETCH_SINGLE_CHAIR,
            payload: res.data.data
        })
    }
}

export const act4Columns = () => {
    return {
        type: ACTION_TYPES.CHANGE_COLUMN_NUM,
        payload: false
    }
}

export const act3Columns = () => {
    return {
        type: ACTION_TYPES.CHANGE_COLUMN_NUM,
        payload: true
    }
}

export const actAddToCart = (item) => {
    return {
        type: ACTION_TYPES.ADD_TO_CART,
        payload: item
    }
}

export const actChangeQty = (idx, qty) => {
    return {
        type: ACTION_TYPES.CHANGE_QTY,
        payload: {idx, qty}
    }
}

export const actRemove = (idx) => {
    return {
        type: ACTION_TYPES.REMOVE,
        payload: idx
    }
}

export const actLogin = (values) => {
    return async dispatch => {
        try {
            let res = await axios.post(`${BASE_URL}/auth/login`, values);
            dispatch ({
                type: ACTION_TYPES.FETCH_USER,
                payload: res.data.data
            });
            localStorage.setItem("userCredential", JSON.stringify(res.data.data))
            window.history.go(-1)
        } catch(e) {
            alert("Wrong username and password")
            return e
        }
    }
};

export const actSignOut = () => {
    return {
        type: ACTION_TYPES.SIGN_OUT
    }
}
