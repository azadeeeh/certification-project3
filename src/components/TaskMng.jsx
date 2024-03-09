import React, { useState } from 'react';
import CreateListForm from './CreateListForm'; // Import the TaskForm component
import TaskList from './TaskList';


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
    }
    return (
        <div>

            <p>Welcome</p>
            <button onClick={toggleForm} >Create a new Task List</button>
            <CreateListForm showForm={showForm} onCreateList={handleCreateList} />
            <TaskList taskLists={taskLists} />

        </div>
    )
}

export default TaskMng