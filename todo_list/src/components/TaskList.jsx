import React, { useState } from 'react';
import {ReactComponent as CheckSquare} from '../assets/check2-square.svg';
import {ReactComponent as Square} from '../assets/square.svg';
import {ReactComponent as Trash} from '../assets/trash.svg';


const TaskList = props => {

    const handleComplete = () => {
        let tempList = props.taskList.slice(0);
        tempList[props.index]['isComplete'] = !tempList[props.index]['isComplete'];
        props.setTaskList(tempList);
    }

    const handleRemove = () => {
        let tempList = props.taskList.filter(item => props.taskList.indexOf(item) !== props.index)
        props.setTaskList(tempList);
    }

    return (
        <div className="item">
            <p className={props.task.isComplete ? 'complete text' : 'text'}>{props.task.itemText}</p>
            <span>
                {
                    props.task.isComplete ? <CheckSquare className='checksq' onClick={ (e) => handleComplete() }/> : <Square className='sq' onClick={ (e) => handleComplete() }/>
                }
                <Trash className='trash' onClick={ (e) => handleRemove() }/>
            </span>
        </div>
    )
}

export default TaskList;