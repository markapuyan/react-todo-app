import * as actionTypes from '../actions/actionTypes'
import history from '../history'
import axios from '../../axios-todo'
import moment from 'moment'

export const fetchTodoListItemStart = () => {
    return {
        type: actionTypes.FETCH_TODOLIST_ITEM_START
    }
}
export const setTodoListItem = (todo) => {
    return {
        type: actionTypes.SET_TODOLIST_ITEM,
        todo: todo
    }
}

export const fetchTodoListItemFail = () => {
    return {
        type: actionTypes.FETCH_TODOLIST_ITEM_FAIL
    }
}

export const initTodoListItem = (id) => {
    return {
        type: actionTypes.INIT_TODOLIST_ITEM,
        id: id
    }
}

export const updateDbTodoListItem = (todoList) => {
    return {
        type: actionTypes.UPDATE_TODOLIST_ITEM,
        todoList: todoList
    }
}

export const addTodoListItem = (todo, itemTitle) => {
    return {
        type: actionTypes.ADD_TODOLIST_ITEM,
        todo: todo,
        itemTitle: itemTitle
    }
}

export const addItemInit = (event) => {
    const item = event.target.value
    return {
        type: actionTypes.INIT_ADD_ITEM,
        label: item
    }
}

export const todoListItemChange = (event, id, todo) => {
    const item = event.target.value
    return {
        type: actionTypes.INIT_TODOLIST_ITEM_CHANGE,
        label: item,
        id: id,
        todo: todo
    }
}

export const todoListItemAction = (id, type, todo) => {
    return {
        type: actionTypes.INIT_TODOLIST_ITEM_ACTION,
        id: id,
        actionType: type,
        todo: todo
    }
}

export const resetTodoListItem = () => {
    return dispatch => {
        const todo = null;
        dispatch(setTodoListItem(todo))
        history.push('/');
    }
}