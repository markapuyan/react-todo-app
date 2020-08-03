import React from 'react'
import Auxilliary from '../../../../hoc/Auxilliary/Auxilliary'
import { Checkbox, Typography, Input } from 'antd'
import { EditOutlined, DeleteOutlined,  CloseOutlined } from '@ant-design/icons';
import PopConfirm from '../../../UI/PopConfirm/PopConfirm'
import './TodoListItem.css'
const { Title } = Typography;

const todoListItem = (props) => {
    return (
        <li className='todo-list--item'>
            { props.dataItem.editable && props.dataItem.status ?
                <Input className="todo-list--item__input"
                    value={props.dataItem.label} 
                    onChange={(event) => props.changed(event, props.dataItem.id)}
                    suffix={
                        <Auxilliary>
                            <a  onClick={() => props.itemAction(props.dataItem.id, 'removeEdit')}
                                disabled={!(props.dataItem.label.length > 0)}>
                                <CloseOutlined /></a>
                        </Auxilliary>}/>: 
                <Auxilliary>
                    <Checkbox 
                        checked={!props.dataItem.status} 
                        onChange={() => props.itemAction(props.dataItem.id, 'status')}/>
                    <Title className="todo-list--item__label"
                            style={{  
                            textDecoration: !props.dataItem.status ? 'line-through' : 'none',
                            color: !props.dataItem.status ? '#f29438' : '#111'}}level={4}>
                        { props.dataItem.label }</Title>
                    <div className="todo-list--item_actions">
                        { props.dataItem.status ? 
                            <a  className="todo-list--item__link" 
                                onClick={() => props.itemAction(props.dataItem.id, 'edit')}>
                                <EditOutlined /></a> : 
                            <PopConfirm
                                title="Are you sure delete this task?"
                                confirm={props.itemAction}
                                okText="Yes"
                                cancelText="No"
                                id={props.dataItem.id}>
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