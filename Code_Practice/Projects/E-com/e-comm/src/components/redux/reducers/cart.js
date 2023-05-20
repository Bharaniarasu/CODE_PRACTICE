import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: [], type: "" },
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.value,action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.value.findIndex(
        (product) => product.id === action.payload.id
      );

      state.value = [
        ...state.value.slice(0, index),
        ...state.value.slice(index + 1),
      ];
    },
    modifyOnCart: (state, action) => {
      const index = state.value.findIndex(
        (product) => product.id === action.payload.id
      );
      state.value = [
        ...state.value.slice(0, index),
        { ...state.value[index], count: action.payload.count },
        ...state.value.slice(index + 1),
      ];
    },
  },
});
export const { addToCart,removeFromCart,modifyOnCart } = cartSlice.actions;
export default cartSlice.reducer;
