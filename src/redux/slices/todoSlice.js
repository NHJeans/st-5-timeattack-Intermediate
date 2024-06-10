// TODO: todoSlice 를 작성하세요.
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer