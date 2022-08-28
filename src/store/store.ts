import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';

const rootReducer = combineReducers({
  todos: todoSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
