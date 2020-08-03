import React, { Component } from 'react'
import TodoListItems from '../../components/TodoLists/TodoListItems/TodoListItems'
import AddTodoItem from '../../components/AddTodo/AddTodoItem/AddTodoItem'
import { connect } from 'react-redux'
import { Row, Col, Card, Typography, Button, Tooltip } from 'antd'
import { ArrowLeftOutlined   } from '@ant-design/icons';
import * as todoListActions from '../../store/actions/index'

const { Title } = Typography;
const { Meta } = Card;
class Todo extends Component {

    componentDidMount() {
        this.props.onInitTodoListItem(this.props.match.params.id);
    }

    addItemHandler = () => {
        this.props.onAddTodoListItem(this.props.match.params.id)
    }

    render() {
        let todo = '';
        let items = '';
        if(this.props.todo) {
            items = 
                <TodoListItems 
                    dataItem={this.props.todo[0].list || null} 
                    itemAction={this.props.onTodoListItemAction} 
                    changed={this.props.onTodoListItemChange}
                    updateList={this.updateTodoListHandler}/> 
            todo = this.props.todo.map(item => (
            <Card
                style={{ width: '100%', backgroundColor: '#ffff88' }}
                key={item.id}>
                <Row>
                    <Col xs={12} style={{textAlign: 'left'}}>
                        <Button  
                            shape="circle" 
                            icon={<ArrowLeftOutlined/>} 
                            onClick={this.props.onBack} 
                            size='middle' />
                    </Col>
                    <Col xs={4}>
                        
                    </Col>
                    <Col xs={24} style={{textAlign: 'left'}}>
                        <Title style={{ textAlign: 'left' }}>{item.title}</Title>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={24}>
                        {items}
                    </Col>
                    <AddTodoItem 
                        value = {this.props.itemTitle}
                        name='title'
                        placeholder="Add Item"
                        change={this.props.onInitAddItem}
                        disabled={!this.props.isItemAddable}
                        click={this.addItemHandler}
                    />
                </Row>
                <Meta title={'Created At ' + item.createdAt} style={{textAlign: 'left'}} />
            </Card>))}
        return (
            <div>
                { todo }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todo: state.todoListItem.todo,
        isItemAddable : state.todoListItem.isItemAddable,
        itemTitle: state.todoListItem.itemTitle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitTodoListItem: (id) => dispatch(todoListActions.initTodoListItem(id)),
        onAddTodoListItem: (id) => dispatch(todoListActions.addTodoListItem(id)),
        onInitAddItem: (event) => dispatch(todoListActions.addItemInit(event)),
        onTodoListItemChange: (event, id) => dispatch(todoListActions.todoListItemChange(event, id)),
        onTodoListItemAction: (id, type) => dispatch(todoListActions.todoListItemAction(id, type)),
        onBack: ()=> dispatch(todoListActions.resetTodoListItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);