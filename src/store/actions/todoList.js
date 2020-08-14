import * as actionTypes from '../actions/actionTypes'
import moment from 'moment'

export const setTodoList = (todoList) => {
    return {
        type: actionTypes.SET_TODOLIST,
        todoList: todoList
    }
}

export const fetchTodoListFailed = () => {
    return {
        type: actionTypes.FETCH_TODOLIST_FAIL
    }
}

export const fetchTodoListStart = () => {
    return {
        type: actionTypes.FETCH_TODOLIST_START
    }
}

export const initTodoList = (redirect=null) => {
    return {
        type: actionTypes.INIT_TODOLIST,
        isRedirect: redirect
    }
}

export const selectTodoList = (id) => {
    return {
        type: actionTypes.SELECT_TODOLIST,
        id: id
    }
}

export const addInit = (event) => {
    const title = event.target.value
    return {
        type: actionTypes.INIT_ADD,
        title: title
    }
}

export const resetTodoList = () => {
    return {
        type: actionTypes.RESET_TODOLIST
    }
}

export const setModal = () => {
    return {
        type: actionTypes.SET_MODAL
    }
}

export const addTodoList = (addTitle) => {
    return {
        type: actionTypes.ADD_TODOLIST_INIT,
        title: addTitle
    }
}

export const removeTodoList = (id) => {
    return {
        type: actionTypes.REMOVE_TODOLIST,
        id: id
    }
}