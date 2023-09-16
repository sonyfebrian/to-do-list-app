import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Tasks.store";
import modalReducer from "./Modal.store";
import userReducer from "./User.store";

export default configureStore({
  reducer: { tasks: tasksReducer, modal: modalReducer, user: userReducer },
});
