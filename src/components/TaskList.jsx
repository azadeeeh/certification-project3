//display the list of task lists
import React, { useState } from 'react';
import TaskForm from './CreateTaskForm';
import "./TaskMng.css";
//gets taskLists, onAddRAsk and onDeleteList as props from parent TaskMng
//taskLists is an array of objects
const TaskList = ({ taskLists, onAddTask, onDeleteList }) => {
    const [showTaskForm, setShowTaskForm] = useState(false);
    /*const handleAddTask = (listId, task) => {
        onAddTask(listId, task);
        setShowTaskForm(false);
    };*/
    //this function is called when a new task is added
    const handleAddTask = (listId, task) => {
        // Find the list index in the taskLists array based on the listId
        //this is required to add the task to the correct list
        const listIndex = taskLists.findIndex(list => list.id === listId);
        //if we found a list index we crate a copy of taskLists
        if (listIndex !== -1) {
            // If the list exists, push the tasklists to an array
            const updatedTaskLists = [...taskLists];
            updatedTaskLists[listIndex].tasks = updatedTaskLists[listIndex].tasks || [];
            //push the new task into the current list
            updatedTaskLists[listIndex].tasks.push(task);
            onAddTask(updatedTaskLists); // Update the taskLists state
        }

        setShowTaskForm(false); // Close task input form after adding task
    };

    const handleDeleteList = (listId) => {
        const newTaskLists = taskLists.filter(list => list.id !== listId);
        onDeleteList(newTaskLists);
    }
    return (
        <div>
            <h2>Task Lists</h2>
            <ul>
                {taskLists.map((list) => (
                    <li key={list.id}>
                        {list.name}
                        <button className='add-deleteTaskButton' onClick={() => setShowTaskForm(!showTaskForm)}>Add Task</button>
                        <button className='add-deleteTaskButton' onClick={() => handleDeleteList(list.id)}>Delete List</button>
                        {showTaskForm && (
                            <TaskForm
                                onCreateTask={(task) => handleAddTask(list.id, task)}
                            />
                        )}
                        {/* Display tasks for the current list */}
                        <ul>
                            {list.tasks && list.tasks.map((task, index) => (
                                <li key={index}>
                                    {task.taskName}- Priority: {task.priority} - Status: {task.status} - Due Date: {task.dueDate}
                                </li>
                            ))}
                        </ul>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
