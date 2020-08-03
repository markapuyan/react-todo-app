import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'
import { Card, Empty } from 'antd'
import './TodoListItems.css'
const todoList = (props) => {
    let list  = <Empty />;
    if (props.dataItem) {
        console.log('here', props.dataItem)
        list = props.dataItem.map(item => (
            <TodoListItem 
                dataItem={item}
                itemAction = {props.itemAction} 
                key={item.id}
                changed={props.changed} />))
    } 
    return (
        <div>
            <Card className="todo-list__card">
                <ul>{list}</ul>
            </Card>
        </div>

    )
}

export default todoList