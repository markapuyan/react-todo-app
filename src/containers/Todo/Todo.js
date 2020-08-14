import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Typography, Button } from 'antd'
import { ArrowLeftOutlined   } from '@ant-design/icons';
import * as todoListActions from '../../store/actions/index'
import TodoListItems from '../../components/TodoLists/TodoListItems/TodoListItems'
import AddTodoItem from '../../components/AddTodo/AddTodoItem/AddTodoItem'
import Auxilliary from '../../hoc/Auxilliary/Auxilliary'
import Spinner from '../../components/UI/Spinner/Spinner'
import './Todo.css'

const { Title } = Typography;
const { Meta } = Card;
class Todo extends Component {

    componentDidMount() {
        this.props.onInitTodoListItem(this.props.match.params.id);
    }

    addTodoListItemHandler = () => {
        this.props.onAddTodoListItem(this.props.todo, this.props.itemTitle)
    }

    inputTodoListItemHandler = (event, id) => {
        console.log(event, id)
        this.props.onTodoListItemChange(event, id, this.props.todo)
    }

    itemActionHandler = (id, type) =>{
        this.props.onTodoListItemAction(id, type, this.props.todo)
    }

    render() {
        let todo = (this.props.fetchLoading) ? <Spinner/> : null;
        let items = '';
        let list = null;
        if (this.props.todo) {  
            this.props.todo.map(item => {
                list = item.hasOwnProperty('list') ? item.list : null
            })
            items = 
                <TodoListItems 
                    dataItem={ list }   
                    itemAction={this.itemActionHandler} 
                    changed={this.inputTodoListItemHandler}
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
                            click={this.addTodoListItemHandler}/>
                    </Row>
                    <Meta title={ item.updatedAt ? 'Last Updated: '+  item.updatedAt
                            : 'Created At: '+ item.createdAt } />
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
        itemTitle: state.todoListItem.itemTitle,
        fetchLoading: state.todoListItem.fetchLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitTodoListItem: (id) => dispatch(todoListActions.initTodoListItem(id)),
        onAddTodoListItem: (todo, title) => dispatch(todoListActions.addTodoListItem(todo, title)),
        onInitAddItem: (event) => dispatch(todoListActions.addItemInit(event)),
        onTodoListItemChange: (event, id, todo) => dispatch(todoListActions.todoListItemChange(event, id, todo)),
        onTodoListItemAction: (id, type, todo) => dispatch(todoListActions.todoListItemAction(id, type, todo)),
        onBack: ()=> dispatch(todoListActions.resetTodoListItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);