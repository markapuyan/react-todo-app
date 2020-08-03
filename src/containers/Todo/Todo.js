import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Typography, Button } from 'antd'
import { ArrowLeftOutlined   } from '@ant-design/icons';
import * as todoListActions from '../../store/actions/index'
import TodoListItems from '../../components/TodoLists/TodoListItems/TodoListItems'
import AddTodoItem from '../../components/AddTodo/AddTodoItem/AddTodoItem'
import Auxilliary from '../../hoc/Auxilliary/Auxilliary'
import './Todo.css'

const { Title } = Typography;
const { Meta } = Card;
class Todo extends Component {

    componentDidMount() {
        this.props.onInitTodoListItem(this.props.match.params.id);
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
                    className="todo-main"
                    key={item.id}>
                    <Row>
                        <Col xs={12}>
                            <Button  
                                shape="circle" 
                                icon={<ArrowLeftOutlined/>} 
                                onClick={this.props.onBack} 
                                size='middle' />
                        </Col>
                        <Col xs={24}>
                            <Title>{item.title}</Title>
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
                            click={this.props.onAddTodoListItem}/>
                    </Row>
                    <Meta title={'Created At ' + item.createdAt} />
                </Card>))}
        return (
            <Auxilliary>{ todo }</Auxilliary>
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
        onAddTodoListItem: () => dispatch(todoListActions.addTodoListItem()),
        onInitAddItem: (event) => dispatch(todoListActions.addItemInit(event)),
        onTodoListItemChange: (event, id) => dispatch(todoListActions.todoListItemChange(event, id)),
        onTodoListItemAction: (id, type) => dispatch(todoListActions.todoListItemAction(id, type)),
        onBack: ()=> dispatch(todoListActions.resetTodoListItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);