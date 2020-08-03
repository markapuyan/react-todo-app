import React from 'react'
import { Modal, Typography, Input, Button } from 'antd'

const { Title } = Typography
const addTodo = (props) => {

    return (

        <Modal
            visible={props.visible}
            onCancel={props.cancel}
            footer={[
                <Button key="submit" disabled={!props.canAdd} onClick={props.addTodo}>
                  Add
                </Button>
              ]}>
            <Title size={2}>Enter Title</Title>
            <Input 
                size="large" 
                placeholder="Title"
                value={props.value}
                onChange={props.changed}/>
        </Modal>
    )
}


export default addTodo;