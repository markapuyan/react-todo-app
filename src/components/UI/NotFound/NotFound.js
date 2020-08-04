import React from 'react'
import { Row, Col, Typography } from 'antd'
import { BugOutlined  } from '@ant-design/icons';
import './NotFound.css'
const { Title } = Typography

const notFound = (props) => {
    return (
        <Row>
            <Col xs={24} className="not-found">
                <BugOutlined/>
                <Title className="not-found__title" level={3}>Page Not Found</Title>
            </Col>
        </Row>
    )
}

export default notFound