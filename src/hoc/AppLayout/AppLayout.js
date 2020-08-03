import React, { Component } from 'react';

import { Layout } from 'antd';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import './AppLayout.css'
const { Content, Footer } = Layout
class AppLayout extends Component {

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Toolbar/>
                    <Content className="todo--main__content">
                        {this.props.children}
                    </Content>
                <Footer></Footer>
            </Layout>
        )
    }
}


export default AppLayout;