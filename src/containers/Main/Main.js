import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Empty } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Auxilliary from '../../hoc/Auxilliary/Auxilliary'
import TodoLists from '../../components/TodoLists/TodoLists'
import AddTodo from '../../components/AddTodo/AddTodo'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as todoListActions from '../../store/actions/index'
import './Main.css'
class Main extends Component {

    componentWillMount () {
        this.props.onInitTodoList();
    }

    selectedTodoHandler = (id) => {
        this.props.onSelectedTodo(id);
        this.props.history.push('/todo/' + id);
    }

    addTodoHandler = () => {
        console.log("GEREERER")
        this.props.onAddTodo(this.props.addItemTitle)
    }

    render() {
        let todoList = '';
        todoList = (this.props.fetchLoading) ? <Spinner/> :
                    (Array.isArray(this.props.todoList) && this.props.todoList.length)  ?
                    <TodoLists 
                        list={this.props.todoList} 
                        selected={this.selectedTodoHandler}
                        value={this.props.addItemTitle}
                        change={this.props.onInitAdd}
                        click={this.addTodoHandler}
                        addItem={this.props.addable}
                        confirm={this.props.onRemoveTodo}/> : 
                            <Col xs={24} className="todo-main__empty">
                                <Empty/>
                            </Col>;
        return (
            <Auxilliary>
                <Row gutter={[16, 16]}>
                    <a  href="#" onClick={this.props.onShowModal}
                        className='float'>
                            <PlusOutlined className="my-float" />
                    </a>
                    <AddTodo 
                        visible={this.props.isModalActive}
                        changed={this.props.onInitAdd}
                        value={this.props.addItemTitle}
                        canAdd={this.props.addable}
                        cancel={this.props.onShowModal}
                        addTodo={this.addTodoHandler}/>
                    { todoList }
                </Row>
            </Auxilliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList.todoList,
        addItemTitle: state.todoList.addItemTitle,
        addable: state.todoList.addable,
        isModalActive: state.todoList.isModalActive,
        fetchLoading: state.todoList.fetchLoading,
        addItemTitle: state.todoList.addItemTitle
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitTodoList: () => dispatch(todoListActions.initTodoList()),
        onSelectedTodo: (id) => dispatch(todoListActions.selectTodoList(id)),
        onInitAdd: (event) => dispatch(todoListActions.addInit(event)),
        onAddTodo: (title) => dispatch(todoListActions.addTodoList(title)),
        onShowModal: () => dispatch(todoListActions.setModal()),
        onRemoveTodo: (id) => dispatch(todoListActions.removeTodoList(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Main)