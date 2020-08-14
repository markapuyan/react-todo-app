import { takeEvery, all, take } from 'redux-saga/effects'
import { 
    addTodoListSaga,
    removeTodoListSaga,
    initTodoListSaga } from './todoList'
import { 
    initTodoListItemSaga,
    updateTodoListItemSaga,
    addTodoListItemSaga,
    initTodoListItemChangeSaga, 
    todoListItemActionSaga} from './todoListItem'
import * as actionTypes from '../actions/actionTypes'

export function* watchTodoList() {
    yield all([
        takeEvery(actionTypes.INIT_TODOLIST, initTodoListSaga),
        takeEvery(actionTypes.ADD_TODOLIST_INIT, addTodoListSaga),
        takeEvery(actionTypes.REMOVE_TODOLIST, removeTodoListSaga)
    ])
}

export function* watchTodoListItem() {
    yield all([
        takeEvery(actionTypes.INIT_TODOLIST_ITEM, initTodoListItemSaga),
        takeEvery(actionTypes.UPDATE_TODOLIST_ITEM, updateTodoListItemSaga),
        takeEvery(actionTypes.ADD_TODOLIST_ITEM, addTodoListItemSaga),
        takeEvery(actionTypes.INIT_TODOLIST_ITEM_CHANGE, initTodoListItemChangeSaga),
        takeEvery(actionTypes.INIT_TODOLIST_ITEM_ACTION, todoListItemActionSaga)
    ])
}