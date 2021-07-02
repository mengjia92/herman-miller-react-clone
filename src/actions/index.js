import {BASE_URL, ACTION_TYPES} from "../helper";
import axios from "axios";

export const actFetchChairData = () => {
    return async dispatch => {
        let res = await axios.get(BASE_URL);
        dispatch ({
            type: ACTION_TYPES.FETCH_CHAIR_DATA,
            payload: res.data.data
        })
    }
}

export const actFetchSingleChair = (id) => {
    return async dispatch => {
        let res = await axios.get(`${BASE_URL}/${id}`);
        dispatch ({
            type: ACTION_TYPES.FETCH_SINGLE_CHAIR,
            payload: res.data.data
        })
    }
}

export const actAddToCart = (item) => {
    return {
        type: ACTION_TYPES.ADD_TO_CART,
        payload: {...item, count: 1}
    }
}

export const actIncrement = (idx) => {
    return {
        type: ACTION_TYPES.INCREMENT,
        payload: idx
    }
}

export const actDecrement = (idx) => {
    return {
        type: ACTION_TYPES.DECREMENT,
        payload: idx
    }
}

export const actRemove = (idx) => {
    return {
        type: ACTION_TYPES.REMOVE,
        payload: idx
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