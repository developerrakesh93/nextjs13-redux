
const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  products: JSON.parse(localStorage.getItem("products"))
    ? JSON.parse(localStorage.getItem("products"))
    : [],
}

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
      let productData = JSON.stringify(current(state.products));
      localStorage.setItem("products", productData);
      console.log(current(state.products));
    },
    removeProduct: (state, action) => {
      console.log("action", action);
      localStorage.removeItem("products");
      const data = state.products.filter((item) => {
        return item.id !== action.payload;
      });
      state.products = data;
      let userData = JSON.stringify(data);
      localStorage.setItem("products", userData);
    },
  },
});

export const { addProduct, removeProduct } = Slice.actions;
export default Slice.reducer;
