// store.ts
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './toolkit_todoSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
export default store;
