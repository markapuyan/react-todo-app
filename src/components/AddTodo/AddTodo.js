import React from 'react'
import { Modal, Typography, Input, Button } from 'antd'

const { Title } = Typography

const addTodo = (props) => {
  
  const { visible, cancel, canAdd, addTodo, value, changed } = props;

  return (<Modal
          visible={visible}
          onCancel={cancel}
          footer={[
              <Button key="submit" 
                disabled={!canAdd}
                onClick={addTodo}>
                Add
              </Button>
            ]}>
          <Title level={3}>Enter Title</Title>
          <Input 
              size="large" 
              placeholder="Title"
              value={value}
              onChange={changed}/>
      </Modal>)
}


export default addTodo;