import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./DarkMoodSlice";

export const store = configureStore({
  reducer: {
    // todos: todoReducer,
    darkMode: darkModeReducer,
  },
});