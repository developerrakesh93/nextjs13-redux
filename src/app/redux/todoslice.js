const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  todo: [],
};

const Slice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.todo.push(data);
    },
  },
});
export const { addTodos } = Slice.actions;
export default Slice.reducer;
