import React from 'react'
import { Popconfirm } from 'antd'

const popConfirm = (props) => {
    const { title, confirm, id, okText, cancelText, children } = props;
    return (
        <Popconfirm
            title={title}
            onConfirm={() => confirm(id, 'delete')}
            okText={okText}
            cancelText={cancelText}>
           { children }
        </Popconfirm>
    )
}
export default popConfirm;