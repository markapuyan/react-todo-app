import React from 'react'
import Auxilliary from '../../../../hoc/Auxilliary/Auxilliary'
import { Checkbox, Typography, Input } from 'antd'
import { EditOutlined, DeleteOutlined,  CloseOutlined } from '@ant-design/icons';
import PopConfirm from '../../../UI/PopConfirm/PopConfirm'
import './TodoListItem.css'
const { Title } = Typography;

const todoListItem = (props) => {
    const { dataItem, changed, itemAction } = props;
    return (
        <li className='todo-list--item'>
            { dataItem.editable && dataItem.status ?
                <Input className="todo-list--item__input"
                    value={dataItem.label} 
                    onChange={(event) => changed(event, dataItem.id)}
                    suffix={
                        <Auxilliary>
                            <a  onClick={() => itemAction(dataItem.id, 'removeEdit')}
                                disabled={!(dataItem.label.length > 0)}>
                                <CloseOutlined /></a>
                        </Auxilliary>}/>: 
                <Auxilliary>
                    <Checkbox 
                        checked={!dataItem.status} 
                        onChange={() => itemAction(dataItem.id, 'status')}/>
                    <Title className="todo-list--item__label"
                            style={{  
                            textDecoration: !dataItem.status ? 'line-through' : 'none',
                            color: !dataItem.status ? '#f29438' : '#111'}}level={4}>
                        { dataItem.label }</Title>
                    <div className="todo-list--item_actions">
                        { dataItem.status ? 
                            <a  className="todo-list--item__link" 
                                onClick={() => itemAction(dataItem.id, 'edit')}>
                                <EditOutlined /></a> : 
                            <PopConfirm
                                title="Are you sure delete this task?"
                                confirm={itemAction}
                                okText="Yes"
                                cancelText="No"
                                id={dataItem.id}>
                                <a className="todo-list--item__link" href="#">
                                    <DeleteOutlined />
                                </a>
                            </PopConfirm>}
                    </div> 
                </Auxilliary>}
        </li>
    )
}

export default todoListItem;