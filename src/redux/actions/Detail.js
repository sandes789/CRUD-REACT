import {
    ADD_USERS,
    DEL_USERS,
    EDIT_USERS,
    API_CALL
} from './types'

import Axios from 'axios'

export const addUser = (newDetail) => async dispatch => {
    dispatch({
        type:ADD_USERS,
        payload:newDetail
    })
}

export const delUser = (id) => async dispatch => {
    dispatch({
        type:DEL_USERS,
        payload:id
    })
}

export const editUser = (newedit) => async dispatch => {
    dispatch({
        type:EDIT_USERS,
        payload:newedit
    })
}

export const apicall = () => async dispatch => {
    const url =`https://jsonplaceholder.typicode.com/users`
    const res = await Axios.get(url)
    console.log(res.data)
    dispatch({
        type:API_CALL,
        payload:res.data
    })
    
}

