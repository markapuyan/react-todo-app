import { put } from "redux-saga/effects";
import axios from '../../axios-todo'
import * as actions from '../actions/index'
import history from '../history'
import moment from 'moment'

export function* initTodoListItemSaga(action) {
    yield put(actions.fetchTodoListItemStart())
    const queryParams = '?orderBy="$key"&equalTo="'+ action.id +'"';
    try {
        const response = yield axios.get('todoList.json' + queryParams)
        const todo = []
        for (let key in response.data) {
            todo.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.setTodoListItem(todo))
    } catch (error) {
        yield put(actions.fetchTodoListItemFail())
    }
}

export function* updateTodoListItemSaga(action) {
    const todoId = history.location.pathname.replace(/^.*[\\\/]/, '');
    try {
        const response = axios.put('todoList/'+todoId+'.json', action.todoList[0])
        yield put(actions.setTodoListItem(action.todoList))
    } catch (error) {
        console.log('error')
    }
}

export function* addTodoListItemSaga(action) {
    const todoList = action.todo.slice();
    const newTodoItem = {
        status: true,
        label: action.itemTitle,
        id: Math.floor(Math.random() * 100) +  Date.now(),
        editable: false
    }
    todoList.map(item => {
        item.hasOwnProperty('list') ? item.list = item.list.concat(newTodoItem) 
        : item.list = item.list = [newTodoItem];
    })
    todoList[0].updatedAt = moment(yield new Date()).format('MMMM Do YYYY, h:mm:ss a')
    yield put(actions.updateDbTodoListItem(todoList))
}

export function* initTodoListItemChangeSaga(action) {
    const todoList = [...action.todo];
    for (let item in todoList) {
        const listItem = [...todoList[item].list];
        listItem.map(item => {
            if(item.id == action.id) {
                item.label = action.label
            }
        })
        todoList[item].list = listItem;
    }
    yield put(actions.setTodoListItem(todoList))
}

export function* todoListItemActionSaga(action) {
    const todoList = [...action.todo];
    if(action.actionType == 'edit' || 'status' || 'removeEdit') {
        for (let item in todoList) {
            const listItem = [...action.todo[item].list];
            listItem.map(item => {
                if(action.actionType == 'status') {
                    if(item.id == action.id) {
                        item.status = !item.status
                    }
                    todoList[0].updatedAt = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
                } else if(action.actionType == 'edit') {
                    if(item.id == action.id) {
                        item.editable = !item.editable
                    } else {
                        item.editable = false
                    }
                } else {
                    if(item.id == action.id) {
                        item.editable = false
                    }
                    todoList[0].updatedAt = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
                }
            })
            todoList[item].list = listItem;
        }
    }

    if(action.actionType == 'delete') {
        for (let item in todoList) {
            let listItem = [...action.todo[item].list];
            listItem = listItem.filter(item => item.id != action.id);
            todoList[item].list = listItem;
        }
        todoList[0].updatedAt = moment(yield new Date()).format('MMMM Do YYYY, h:mm:ss a')
    }

    yield put(actions.updateDbTodoListItem(todoList))
}