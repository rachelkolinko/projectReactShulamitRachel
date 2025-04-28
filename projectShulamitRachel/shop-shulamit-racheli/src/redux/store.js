import { configureStore } from '@reduxjs/toolkit';
import { basketReducer } from './reducers'; // ייבוא ה-reducers שלך כאן

export const store = configureStore({
  reducer: {
    basket: basketReducer, // הוסף את ה-reducer שלך כאן
  },
});


export default store;