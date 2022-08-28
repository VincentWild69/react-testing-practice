import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
  id: string,
  title: string,
  completed: boolean,
}

interface IListState {
  list: ITodo[];
}

const initialState: IListState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    }
  },
});

export const {addTodo, toggleComplete, removeTodo} = todosSlice.actions;

export default todosSlice.reducer;
