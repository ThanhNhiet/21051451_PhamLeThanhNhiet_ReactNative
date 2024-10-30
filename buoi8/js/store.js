// store.ts
import { createStore } from 'redux';

// Define initial state
const initialState = {
  todos: [
    { id: 1, title: "Cooking", completed: true },
    { id: 2, title: "Have breakfast", completed: false },
    { id: 3, title: "heyy", completed: true },
    { id: 4, title: "do housework", completed: false },
  ],
};

// Define actions
const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Define reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};

// Create store
const store = createStore(todoReducer);
export default store;
