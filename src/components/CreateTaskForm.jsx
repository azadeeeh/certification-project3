
import React, { useState } from 'react';

const TaskForm = ({ onCreateTask }) => {
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('high');
    const [status, setStatus] = useState('todo');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreateTask({ taskName, priority, status, dueDate });
        setTaskName('');
        setPriority('high');
        setStatus('todo');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
