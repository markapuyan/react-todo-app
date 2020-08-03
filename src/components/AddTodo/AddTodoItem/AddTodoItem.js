import React from 'react'
import { Col, Input, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
const addTodoItem = (props) => {

    return (
        <Col xs={24}>
            <Input
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.change}
                suffix={
                    <Button type="link"
                        disabled={props.disabled}>
                        <PlusSquareOutlined 
                        style={{fontSize: '16px'}}
                        onClick={props.click} />
                    </Button>}/>
        </Col>
    )
}


export default addTodoItem