import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd'
import PopConfirm from '../../UI/PopConfirm/PopConfirm'
import { DeleteOutlined   } from '@ant-design/icons';
import './TodoList.css'
const { Title } = Typography;

const todoList = (props) => {
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
                    </Col>
                    <Col xs={4}>
                        <PopConfirm
                            title="Are you sure delete this task?"
                            confirm ={props.confirm}
                            okText="Yes"
                            cancelText="No"
                            id={props.dataItem.id}>
                            <a className="todo-list__delete"><DeleteOutlined /></a>
                        </PopConfirm>
                    </Col>
                </Row>
            </Card>
        </Col>)
}

export default todoList;