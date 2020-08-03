import * as actionTypes from '../actions/actionTypes'
import history from '../history'
import axios from 'axios'
import firebaseDb from '../../firebase';

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
    return dispatch => {
        axios.get('https://react-todo-app-da35f.firebaseio.com/todoList.json')
        .then(response => {
            const todo = []
            for (let key in response.data) {
                if(id === key) {
                    todo.push({
                        ...response.data[key],
                        id: key
                    });
                }
            }
            dispatch(setTodoListItem(todo))
        })
        .catch(error => {
            dispatch(fetchTodoListItemFail())
        })
    }
}


export const updateDbTodoListItem = (todoList, id) => {
    return dispatch => {
        firebaseDb.ref('todoList/'+id)
        .set(todoList[0])
        .then(() => {
            dispatch(setTodoListItem(todoList))
        }).catch((e) => {
        })
    }
}

export const addTodoListItem = (id) => {
    return (dispatch, getState) => {
        const todoList = getState().todoListItem.todo.slice();
        const newTodoItem = {
            status: true,
            label: getState().todoListItem.itemTitle,
            id: Math.floor(Math.random() * 100) +  Date.now(),
            editable: false
        }

        todoList.map(item => {
            item.hasOwnProperty('list') ? item.list = item.list.concat(newTodoItem) 
            : item.list = item.list = [newTodoItem];
        })

        dispatch(updateDbTodoListItem(todoList, id))
        // this.updateListItemHander(todoList, id);
        // this.setState({
        //     ...this.state,
        //     todo: todoList,
        //     itemTitle: '',
        //     isItemAddable: false
        // })
    }
}

export const addItemInit = (event) => {
    const item = event.target.value
    return {
        type: actionTypes.INIT_ADD_ITEM,
        label: item
    }
}


export const todoListItemChange = (event, id) => {
    return (dispatch, getState) => {
        const label = event.target.value
        const todoList = [...getState().todoListItem.todo];
        for (let item in todoList) {
            const listItem = [...todoList[item].list];
            listItem.map(item => {
                if(item.id == id) {
                    item.label = label
                }
            })
            todoList[item].list = listItem;
        }

        dispatch(setTodoListItem(todoList))
    }
}

export const todoListItemAction = (id, type) => {
    return(dispatch, getState) => {
        const todoList = [...getState().todoListItem.todo];
        if(type == 'edit' || 'status' || 'removeEdit') {
            for (let item in todoList) {
                const listItem = [...getState().todoListItem.todo[item].list];
                listItem.map(item => {
                    if(type == 'status') {
                        if(item.id == id) {
                            item.status = !item.status
                        }
                    } else if(type == 'edit') {
                        if(item.id == id) {
                            item.editable = !item.editable
                        } else {
                            item.editable = false
                        }
                    } else {
                        if(item.id == id) {
                            item.editable = false
                        }
                    }
                })
                todoList[item].list = listItem;
            }
        }

        if(type == 'delete') {
            for (let item in todoList) {
                let listItem = [...getState().todoListItem.todo[item].list];
                listItem = listItem.filter(item => item.id != id);
                todoList[item].list = listItem;
            }
        }

        dispatch(updateDbTodoListItem(todoList, id))
    }
}

export const resetTodoListItem = () => {
    return dispatch => {
        const todo = null;
        dispatch(setTodoListItem(todo))
        history.push('/');
    }
}