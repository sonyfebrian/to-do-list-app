import { createSlice } from "@reduxjs/toolkit";

const defaultTasks = []; // You need to define `defaultTasks` as an array of Task objects

const initialState = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : defaultTasks,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    addNewTask(state, action) {
      let newTodoList = {
        id: Math.random(),
        task: action.payload.newContent,
      };
      state.tasks.push(newTodoList);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      // state.tasks = [action.payload, ...state.tasks];
      // localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask(state, action) {
      const taskIdToRemove = action.payload.id;
      state.tasks = state.tasks.filter((item) => item.id !== taskIdToRemove);
      localStorage.removeItem("tasks");
      console.log(
        `Task with ID ${taskIdToRemove} removed from state and localStorage.`
      );

      console.log(
        `Task with ID ${taskIdToRemove} removed from state and localStorage.`
      );
      // localStorage.setItem("tasks", JSON.stringify(newTasksList)); // Set the updated task list
    },
    markAsImportant(state, action) {
      const newTaskFavorited = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (newTaskFavorited) {
        newTaskFavorited.important = !newTaskFavorited.important;
      }
    },

    editTask(state, action) {
      // const taskId = action.payload.id;
      // const newTaskEdited = state.tasks.find((task) => task.id === taskId);

      // if (newTaskEdited !== undefined) {
      //   const indexTask = state.tasks.indexOf(newTaskEdited);
      //   state.tasks[indexTask] = action.payload;
      // }
      let { task } = state;
      state.task = task.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },

    toggleTaskCompleted(state, action) {
      const taskId = action.payload;
      const currTask = state.tasks.find((task) => task.id === taskId);

      if (currTask !== undefined) {
        currTask.completed = !currTask.completed;
      }
    },

    deleteAllData(state) {
      state.tasks = [];
      state.directories = ["Main"];
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;
