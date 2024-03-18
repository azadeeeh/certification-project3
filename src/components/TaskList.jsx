//display the list of task lists
import React, { useState } from 'react';
import TaskForm from './CreateTaskForm';
import "./TaskMng.css";
//gets taskLists, onAddRAsk and onDeleteList as props from parent TaskMng
//taskLists is an array of objects
const TaskList = ({ taskLists, onAddTask, onDeleteList, onDeleteTask }) => {

    //store boolean values for each list ID to only show task form for that specific list that has been clicled
    const [showTaskForm, setShowTaskForm] = useState({});
    /*const handleAddTask = (listId, task) => {
        onAddTask(listId, task);
        setShowTaskForm(false);
    };*/
    const handleToggleTaskForm = (listId) => {
        // Toggle the boolean value for the clicked listId
        //prevState shows the previous state of showTaskForm
        //setShowTaskForm updates the state
        setShowTaskForm(prevState => ({
            ...prevState,
            [listId]: !prevState[listId]// If there is no id equal to the one we want in prevState close
        }));
    };
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

    //delete function find the list with the specific id and adds the rest to the new list using filter
    const handleDeleteList = (listId) => {
        const newTaskLists = taskLists.filter(list => list.id !== listId);
        onDeleteList(newTaskLists);
    }

    const handleDeleteTask = (listId, taskId) => {
        const updatedLists = taskLists.map(list => {
            if (list.id === listId) {
                return {
                    ...list,
                    tasks: list.tasks.filter(task => task.id !== taskId)
                };
            }
            return list;
        });
        onDeleteTask(updatedLists);
    };


    return (
        <div>
            <h2>Task Lists</h2>
            <ul>
                {taskLists.map((list) => (
                    <li key={list.id}>
                        {list.name}
                        <button className='add-deleteTaskButton' onClick={() => handleToggleTaskForm(list.id)}>{showTaskForm[list.id] ? 'Hide Task Form' : 'Add Task'}</button>
                        <button className='add-deleteTaskButton' onClick={() => handleDeleteList(list.id)}>Delete List</button>
                        {showTaskForm[list.id] && (
                            <TaskForm
                                onCreateTask={(task) => handleAddTask(list.id, task)}
                            />
                        )}
                        {/* Display tasks for the current list */}
                        <ul>
                            {list.tasks && list.tasks.map((task, index) => (
                                <li className='displayTask' key={index}>
                                    {task.taskName}- Priority: {task.priority} - Status: {task.status} - Due Date: {task.dueDate}
                                    <button className="deleteTaskButton" onClick={() => handleDeleteTask(list.id, task.id)}>Delete</button>
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
