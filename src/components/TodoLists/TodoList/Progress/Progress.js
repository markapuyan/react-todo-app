import React from 'react'
import { Progress } from 'antd';
const todoProgress = (props) => {

    return (
        <div style={{ width: '200px'}}>
            <Progress  percent={30} size="small" />
        </div>
    )
}

export default todoProgress;