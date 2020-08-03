import React, { Component } from 'react'
import { Layout } from 'antd'
import './Toolbar.css'
const { Header } = Layout;
class Toolbar extends Component {

    state = {
        addTodo: false
    }


    addTodoHandler = () => {
        this.setState({addTodo: true})
    }

    render() {
        return(
            <Header className="todo-header">
                <div className="logo">
                    Todo App
                </div>
            </Header>
        )
    }
}


export default  Toolbar;