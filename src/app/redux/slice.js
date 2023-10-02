const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
};
const Slice = createSlice({
  name: "addProductSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.products.push(data);
    },
  },
});

export const { addProduct } = Slice.actions;
export default Slice.reducer;
