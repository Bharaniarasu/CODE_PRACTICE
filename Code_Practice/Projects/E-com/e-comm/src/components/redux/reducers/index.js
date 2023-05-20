import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../service";

export const productsSlice = createSlice({
  name: "products",
  initialState: { value: data ,type:""},
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const {setData}=productsSlice.actions;

export default productsSlice.reducer;
