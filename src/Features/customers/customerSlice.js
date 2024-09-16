import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  NationalId: "",
  createAT: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducer: {
    createCustomer: {
      prepare(fullName, nationalId, createAt) {
        return {
          payload: { fullName, nationalId, createAt },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.NationalId = action.payload.NationalId;
        state.createAt = action.payload.createAt;
      },
    },
    updateCustomer(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;
