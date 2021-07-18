import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("USER");

const userReducer = createReducer(
  {},
  {
    [setUser]: (state, action) => {
      return (state = action.payload);
    },
  }
);

export default userReducer;
