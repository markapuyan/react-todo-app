import React from 'react';
import PopConfirm from '../../UI/PopConfirm/PopConfirm'
import TodoProgress from '../TodoList/Progress/Progress'
import { Row, Col, Card, Typography } from 'antd'

import { DeleteOutlined, FileExclamationOutlined } from '@ant-design/icons';
import './TodoList.css'
const { Title } = Typography;

const todoList = (props) => {
    const arr = props.progress.filter(item => item.status == false);
    const listPercent = (arr.length / props.progress.length) * 100

    let progress = (props.progress.length) ? <TodoProgress percent= {listPercent}/> 
        : <span className="progress__nodata"><FileExclamationOutlined /> NO DATA</span>
    return (<Col xs={24} style={{ padding: '10px'}}>
            <Card
                hoverable
                className="todo-list__body">
                <Row>
                    <Col xs={20}>
                        <Title 
                            style={{ textAlign: 'left '}} level={3}
                            onClick={() =>props.selected(props.dataItem.id)}>
                            <a className="todo-list__title">{props.dataItem.title}</a></Title>
                        { progress }
                    </Col>
                    <Col xs={4}>
                        <PopConfirm
                            title="Are you sure delete this task?"
                            confirm ={props.confirm}
                            okText="Yes"
                            cancelText="No"
                            id={props.dataItem.id}>
                            <a className="todo-list__delete"><DeleteOutlined /> REMOVE</a>
                        </PopConfirm>
                    </Col>
                </Row>
            </Card>
        </Col>)
}

export default todoList;