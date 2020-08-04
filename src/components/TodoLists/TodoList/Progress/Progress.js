import React from 'react'
import { Progress } from 'antd';
import './Progress.css';

const todoProgress = (props) => {
    const { percent } = props;
    let indicator = (percent == 100) ? 'DONE' : 'IN-PROGRESS'
    return (
        <div style={{ width: '200px'}}>
            <Progress  percent={percent} size="small" />
            <span className="progress-indicator"> {indicator} </span>
        </div>
    )
}

export default todoProgress;