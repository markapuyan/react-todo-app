import React from 'react'
import TodoList from '../TodoLists/TodoList/TodoList'

const todoList = (props) => {
    let todoList = '';
    if (props.list) {
        todoList = props.list.map(listItem => (
            <TodoList
                key={listItem.id}
                dataItem={listItem}
                selected={props.selected}
                confirm={props.confirm}/>
        ))
    }
    return todoList
}

export default todoList;