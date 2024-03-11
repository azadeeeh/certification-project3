import React, { useState } from 'react';
import CreateListForm from './CreateListForm'; // Import the TaskForm component
import TaskList from './TaskList';
import "./TaskMng.css";


//main interface of the task manager

const TaskMng = () => {
    //state for the button to be true or false depends on toggling state
    const [showForm, setShowForm] = useState(false);
    //state for storing the list of task lists
    const [taskLists, setTaskLists] = useState([]);


    //toggle value of showForm to control visibility of the create list form
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    //whne a new task is created this function gets listName as input
    // and generates a unique id
    //it also updates the taskLists state 
    const handleCreateList = (listName) => {
        const newList = {
            id: Date.now(), //unique id for each list
            name: listName
        };
        setTaskLists([...taskLists, newList]);
        toggleForm(); //close the form
    };

    const handleAddTaskToList = (listId, task) => {
        //find the list with the matching list id
        const updatedTaskLists = taskLists.map(list => {
            if (list.id === listId) {
                return {
                    ...list,
                    tasks: { ...list.task, task }
                };
            }
            return list;
        });
        setTaskLists(updatedTaskLists);
    };

    return (
        <div className="tasksListContainer">

            <h1>Welcome</h1>
            <button className='createListButton' onClick={toggleForm} >Create a new Task List</button>
            <CreateListForm showForm={showForm} onCreateList={handleCreateList} />
            <TaskList taskLists={taskLists} onAddTask={handleAddTaskToList} />

        </div>
    )
}

export default TaskMng