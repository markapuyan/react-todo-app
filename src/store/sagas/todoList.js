import { put } from 'redux-saga/effects'
import * as actions from '../actions/index'
import axios from '../../axios-todo'
import moment from 'moment'
import history from '../history'

export function* initTodoListSaga(action) {
    yield put (actions.fetchTodoListStart())
    try {
        const response = yield axios.get('todoList.json')
        const todoList = []
        for (let key in response.data) {
            todoList.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.setTodoList(todoList))

        if(action.isRedirect == 'redirect') {
            todoList.forEach((item, idx, array) =>{
                if (idx === array.length - 1){ 
                    history.push('/todo/' + item.id);
                }
             });
        }

    } catch(error) {
        yield put (actions.fetchTodoListFailed())
    }
}

export function* addTodoListSaga(action) {
    const newItem = {
        title: action.title,
        status: 1,
        createdAt: moment(yield new Date()).format('MMMM Do YYYY, h:mm:ss a')
    }
    try {
        const response = yield axios.post('todoList.json', newItem)
        yield put(actions.resetTodoList())
        yield put(actions.initTodoList('redirect'))
    } catch(error) {
       console.log('error')
    }
}

export function* removeTodoListSaga(action) {
    try {
        const response = yield axios.delete('todoList/'+action.id+'.json')
        yield put(actions.initTodoList())
    } catch (error) {
        console.log('error')
    }
}