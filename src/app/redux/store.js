const { configureStore } = require("@reduxjs/toolkit");
import Productreducer from "./slice";
import todoReducer from "./todoslice";
export const store = configureStore({
  reducer: {
    productData: Productreducer,
    todoData: todoReducer,
  },
});
