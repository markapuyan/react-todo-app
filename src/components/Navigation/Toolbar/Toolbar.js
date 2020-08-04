import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
import { SnippetsOutlined   } from '@ant-design/icons';
import './Toolbar.css'
const { Header } = Layout;
class Toolbar extends Component {
    render() {
        return(
            <Header className="todo-header">
                <div className="logo">
                    <Link to="/"><SnippetsOutlined/> Todo App</Link>
                </div>
            </Header>
        )
    }
}


export default  Toolbar;