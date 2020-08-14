import { takeEvery, all } from 'redux-saga/effects'
import { addTodoListSaga, removeTodoListSaga, initTodoListSaga } from './todoList'
import * as actionTypes from '../actions/actionTypes'

export function* watchTodoList() {
    yield all([
        takeEvery(actionTypes.INIT_TODOLIST, initTodoListSaga),
        takeEvery(actionTypes.ADD_TODOLIST_INIT, addTodoListSaga),
        takeEvery(actionTypes.REMOVE_TODOLIST, removeTodoListSaga)
    ])
    
}