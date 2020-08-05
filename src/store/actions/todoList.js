import * as actionTypes from '../actions/actionTypes'
import history from '../history'
import axios from 'axios';
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

export const initTodoList = (type=null) => {
    return (dispatch, getState) => {
        dispatch(fetchTodoListStart())
        axios.get('https://react-todo-app-da35f.firebaseio.com/todoList.json')
        .then(response => {
            const todoList = []
            for (let key in response.data) {
                todoList.push({
                    ...response.data[key],
                    id: key
                });
            }
            dispatch(setTodoList(todoList));

            if(type == 'redirect') {
                getState().todoList.todoList.forEach((item, idx, array) =>{
                    if (idx === array.length - 1){ 
                        history.push('/todo/' + item.id);
                    }
                 });
            }
        })
        .catch(error => {
            dispatch(fetchTodoListFailed())
        })
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

export const addTodoList = () => {
    return (dispatch, getState) =>{
        const newItem = {
            title: getState().todoList.addItemTitle,
            status: 1,
            createdAt: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
        }
        axios.post('https://react-todo-app-da35f.firebaseio.com/todoList.json', newItem)
        .then(response => {
            dispatch(resetTodoList())
            dispatch(initTodoList('redirect'))
        })
        .catch(error => {
        })
    }
}

export const removeTodoList = (id) => {
    return (dispatch) => {
        axios.delete('https://react-todo-app-da35f.firebaseio.com/todoList/'+id+'.json')
        .then(response => {
            dispatch(initTodoList())
        })
        .catch(error => {
            console.log('error', error)
        })
    }
}