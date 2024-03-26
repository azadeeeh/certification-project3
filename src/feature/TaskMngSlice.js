import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    showForm: false,
    taskLists: [],
};




const taskMngSlice = createSlice({
    name: 'taskLists',
    initialState,
    reducers: {
        toggleForm: (state) => {
            state.showForm = !state.showForm;
        },
        createList: (state, action) => {
            const newList = {
                id: Date.now(),
                name: action.payload,
                tasks: [],
            };
            state.taskLists.push(newList);
        },
        addTaskToList: (state, action) => {
            const { listId, task } = action.payload;
            const list = state.taskLists.find((list) => list.id === listId);
            list.tasks.push({ ...task, id: Date.now() });
        },
        deleteList: (state, action) => {
            state.taskLists = state.taskLists.filter((list) => list.id !== action.payload);
        },
        deleteTask: (state, action) => {
            const { listId, taskId } = action.payload;
            const list = state.taskLists.find((list) => list.id === listId);
            list.tasks = list.tasks.filter((task) => task.id !== taskId);
        },
        updateListName: (state, action) => {
            const { listId, newName } = action.payload;
            const list = state.taskLists.find((list) => list.id === listId);
            list.name = newName;
        },

    }
});

export const { toggleForm, createList, addTaskToList, deleteList, deleteTask, updateListName, } = taskMngSlice.actions;
export default taskMngSlice.reducer;