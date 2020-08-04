import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'
import { Card, Empty } from 'antd'
import './TodoListItems.css'
const todoList = (props) => {
    const { dataItem, itemAction, changed } = props;
    let list  = <Empty />;
    if (dataItem) {
        list = dataItem.map(item => (
            <TodoListItem 
                dataItem={item}
                itemAction = {itemAction} 
                key={item.id}
                changed={changed} />))
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