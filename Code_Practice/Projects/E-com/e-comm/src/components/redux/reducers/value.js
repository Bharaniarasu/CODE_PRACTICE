import { createSlice } from "@reduxjs/toolkit";
// import { data } from "../../../service";

export const valueSlice = createSlice({
  name: "value",
  initialState: { value: "" ,type:""},
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const {setValue}=valueSlice.actions;

export default valueSlice.reducer;
