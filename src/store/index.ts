import { configureStore } from "@reduxjs/toolkit";

import foodReducer from "./food/foodReducer";

const store = configureStore({
  reducer: {
    foodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
