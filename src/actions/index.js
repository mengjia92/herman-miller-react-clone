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

export const actFetchCart = () => {
    return {
        type: ACTION_TYPES.FETCH_CART,
        payload: JSON.parse(localStorage.getItem("cartArr"))
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
            localStorage.setItem("TOKEN", res.data.data.token)
            localStorage.setItem("USER", JSON.stringify(res.data.data.user))
            window.history.go(-1)
        } catch(e) {
            alert("Wrong username and password")
            return e
        }
    }
};

export const actSignOut = () => {
    localStorage.removeItem("TOKEN")
    localStorage.removeItem("USER")
    return {
        type: ACTION_TYPES.SIGN_OUT
    }
}


export const actCreateOrder = (order) => (dispatch) =>{
    console.log("changed fetching?")
    dispatch({ type:ACTION_TYPES.CREATING_ORDER })

    let patch = {}
    patch.taxRate = 1.13;
    patch.isActive = true;
    patch.isDelete = false;
    patch.orderItems = []
    order.map((item,index1) => {
        patch.orderItems.push({
            quantity: parseInt(item.qty),
            product:item.chairObj.id,
            profileItems:[],

        })
        item.chairObj.profileCategories.map((cat,index2) => {
            cat.profileItems.map((profileItem, index3) => {
                if (profileItem.checked === true){
                    patch.orderItems[index1].profileItems.push(profileItem.id)
                }
            })
        })
    })
    console.log('Loooooooooooong', patch)
    const token = localStorage.getItem("TOKEN")
    // console.log(token)

    return(
        axios.post(`${BASE_URL}/order`, patch, {headers:{"Authorization": `bear ${token}`}})
            .then(res => {
                if (res.data.code === 8241){
                    dispatch({
                        type: ACTION_TYPES.RE_LOGIN,
                        payload:res.data
                    })
                } else{
                    console.log(`${ACTION_TYPES.CREATE_ORDER_SUCCESS}`, res)
                    console.log(`${ACTION_TYPES.CREATE_ORDER_SUCCESS}`, res.data.data.id)
                    localStorage.setItem(ACTION_TYPES.ORDER_STORAGE, JSON.stringify(res.data.data.id))
                    dispatch({
                        type:ACTION_TYPES.CREATE_ORDER_SUCCESS,
                        payload:res
                    })
                }

            }).catch(error =>{
            if (error.response.data.code === 8241){
                //8241 means token has expired
                localStorage.removeItem("TOKEN")
                dispatch({
                    type: ACTION_TYPES.RE_LOGIN,
                    payload:error.response.data
                })
            } else {
                console.log(`${ACTION_TYPES.CREATE_ORDER_FAILED}`,error.response)
                dispatch({
                    type: ACTION_TYPES.CREATE_ORDER_FAILED,
                    payload:error.response
                })
            }
        })
    )
}


export const actPayment = (res, order) => {
    console.log("payment results", res);
    let data = {};
    data.order = []
    // let cartArr = JSON.parse(localStorage.getItem("cartArr"));
    console.log(JSON.parse(localStorage.getItem(ACTION_TYPES.ORDER_STORAGE)))
    data.order[0] = JSON.parse(localStorage.getItem(ACTION_TYPES.ORDER_STORAGE))
    data.gateway = res.payer.payment_method;
    data.status = res.state;
    data.transactionId = res.id;
    data.amount = parseFloat(res.transactions.map(a => a.amount.total));
    data.notes = "placeholder";

    const token = localStorage.getItem("TOKEN")
    // console.log(token)

    return (dispatch) => {
        axios.post(`${BASE_URL}/payment`, data, {headers:{"Authorization": `bear ${token}`}})
            .then(res => {
                //routerHistory.push("/")
                localStorage.setItem("cartArr", JSON.stringify([]))
                console.log(`${ACTION_TYPES.CHECKOUT_SUCCESS}`, res)
                dispatch({
                    type:ACTION_TYPES.CHECKOUT_SUCCESS,
                    payload:res
                })
            }).catch(error => {
            console.log(error.response)
            dispatch({
                type:ACTION_TYPES.CHECKOUT_FAILED,
                payload:error.response
            })
        })
    }
}


