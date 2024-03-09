//display the list of task lists
import React from 'react';
//gets taskLists as prop from parent TaskMng
//taskLists is an array of objects
const TaskList = ({ taskLists }) => {
    return (
        <div>
            <h2>Task Lists</h2>
            <ul>
                {taskLists.map((list) => (
                    <li key={list.id}>{list.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
