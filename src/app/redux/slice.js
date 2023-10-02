const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  userAPIData: [],
  products: JSON.parse(localStorage.getItem("products"))
    ? JSON.parse(localStorage.getItem("products"))
    : [],
};

export const fetchApiData = createAsyncThunk("fetchApiUsers", async () => {
  console.log("Loaders");
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      console.log("reducer", action);
      state.isloading = false;
      state.userAPIData = action.payload;
    });
  },
});

export const { addProduct, removeProduct } = Slice.actions;
export default Slice.reducer;
