import React from 'react'
import { Col, Card, Typography, Row, Button } from 'antd'
import TodoList from '../TodoLists/TodoList/TodoList'
const { Title } = Typography;

const todoList = (props) => {

    let todoList = '';
    if(props.list) {
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