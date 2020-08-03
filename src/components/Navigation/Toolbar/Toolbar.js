import React, { Component } from 'react'
import { Layout } from 'antd'
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
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#F7D980'}}/>
        )
    }
}


export default  Toolbar;