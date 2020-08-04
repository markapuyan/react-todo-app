import React from 'react'
import { Col, Input, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';



const addTodoItem = (props) => {

    const { value, name, placeholder, change, disabled, click } = props;

    return (
        <Col xs={24}>
            <Input
                value={ value }
                name={ name }
                placeholder={ placeholder }
                onChange={ change }
                suffix={
                    <Button type="link"
                        disabled={ disabled }>
                        <PlusSquareOutlined 
                        style={{fontSize: '16px'}}
                        onClick={ click } />
                    </Button>}/>
        </Col>
    )
}


export default addTodoItem