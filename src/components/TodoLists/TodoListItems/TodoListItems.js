import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'
import { Card, Empty } from 'antd'
const todoList = (props) => {
    let list  = <Empty />;
    
    if(props.dataItem) {
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
            <Card style={{ backgroundColor: 'transparent', border: 0}}>
                <ul style={{ paddingLeft: '0px', listStyleType: 'none'}}>
                    {list} 
                </ul>
            </Card>
        </div>

    )
}

export default todoList