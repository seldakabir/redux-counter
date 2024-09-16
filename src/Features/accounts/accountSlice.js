import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  withdrow: 0,
  loan: 0,
  purpose: "",
  isLoading: false,
};

const accounSlice = createSlice({
  name: "account",
  initialState,
  reducer: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdrow(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.deposit += action.payload.amount;
        state.loan = action.payload.amount;
        state.purpose = action.payload.purpose;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.purpose = "";
    },
  },
});

export const { deposit, withdrow, requestLoan, payLoan } = accounSlice.actions;
export default accounSlice.reducer;
