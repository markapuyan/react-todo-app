import React from 'react'
import TodoList from '../TodoLists/TodoList/TodoList'

const todoList = (props) => {
    const { list, selected, confirm } = props;
    let todoList = '';
    if (list) {
        todoList = list.map(listItem => (
            <TodoList
                key={listItem.id}
                dataItem={listItem}
                selected={selected}
                confirm={confirm}
                progress={listItem.list || []}/>
        ))
    }
    return todoList
}

export default todoList;