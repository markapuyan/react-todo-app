import React from 'react'
import { Row, Col, Select } from 'antd'

const { Option } = Select

const priority = (props) => {
    return (
        <div style={{width: '150px'}}>
        <Select 
            bordered={false}
            style={{ width: '100%' }}>
            {props.priorityList.map(item => (
                <Option key={item}>
                    <Row>
                        <Col>
                            <span style={{
                                height: '10px',
                                width: '10px',
                                backgroundColor: item[0],
                                borderRadius: '50%',
                                display: 'inline-block',}}></span>
                        </Col>
                        <Col>
                            {item[1]}
                        </Col>
                    </Row>
                </Option>
            ))}
        </Select>
        </div>

    )
}

export default priority