// todosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [
    { id: 1, title: "Cooking", completed: true },
    { id: 2, title: "Have breakfast", completed: false },
    { id: 3, title: "heyy", completed: true },
    { id: 4, title: "do housework", completed: false },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
