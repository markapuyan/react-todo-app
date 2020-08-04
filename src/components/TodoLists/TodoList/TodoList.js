import React from 'react';
import PopConfirm from '../../UI/PopConfirm/PopConfirm'
import TodoProgress from '../TodoList/Progress/Progress'
import { Row, Col, Card, Typography } from 'antd'

import { DeleteOutlined, FileExclamationOutlined } from '@ant-design/icons';
import './TodoList.css'
const { Title } = Typography;

const todoList = (props) => {
    const { progress, dataItem, confirm, selected } = props;
    const arr = progress.filter(item => item.status == false);
    const listPercent = (arr.length / progress.length) * 100

    let todoProgress = (progress.length) ? <TodoProgress percent= {listPercent}/> 
        : <span className="progress__nodata"><FileExclamationOutlined /> NO DATA</span>
    return (<Col xs={24} style={{ padding: '10px'}}>
            <Card
                hoverable
                className="todo-list__body">
                <Row>
                    <Col xs={20}>
                        <Title 
                            style={{ textAlign: 'left '}} level={3}
                            onClick={() => selected(dataItem.id)}>
                            <a className="todo-list__title">{dataItem.title}</a></Title>
                        { todoProgress }
                    </Col>
                    <Col xs={4}>
                        <PopConfirm
                            title="Are you sure delete this task?"
                            confirm ={confirm}
                            okText="Yes"
                            cancelText="No"
                            id={dataItem.id}>
                            <a className="todo-list__delete"><DeleteOutlined /> REMOVE</a>
                        </PopConfirm>
                    </Col>
                </Row>
            </Card>
        </Col>)
}

export default todoList;