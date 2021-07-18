import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Reducers
import booksReducer from "./books";
import userReducer from "./user";
import categoryReducer from "./category";
import typeCategoryReducer from "./stateCategory";
import singleBookReducer from "./singleBook";
import inputReducer from "./input";
import deletedBookBooleanReducer from "./deletedBookBoolean";



const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    books: booksReducer,
    category: categoryReducer,
    typeCategory: typeCategoryReducer,
    singleBook: singleBookReducer,
    input: inputReducer,
    deletedBookBoolean: deletedBookBooleanReducer,
  },
});

export default store;
