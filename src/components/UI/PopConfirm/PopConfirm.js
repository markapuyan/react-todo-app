import React from 'react'
import { Popconfirm } from 'antd'

const popConfirm = (props) => {
    return (
        <Popconfirm
            title={props.title}
            onConfirm={() => props.confirm(props.id, 'delete')}
            okText={props.okText}
            cancelText={props.cancelText}>
           { props.children }
        </Popconfirm>
    )
}
export default popConfirm;