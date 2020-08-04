import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TaskForm = props => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTaskList([...props.taskList, {'itemText': e.target.task.value,'isComplete':false}]);
        e.target.task.value = '';
    };

    return (
        <Form onSubmit={ handleSubmit } inline>
            <Form.Control as="textarea" rows="1" name="task"/>
            <Button type="submit" className="my-1" variant="info">Add</Button>{' '}
        </Form>
    )
}

export default TaskForm;