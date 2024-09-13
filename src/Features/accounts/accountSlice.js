import React from "react";
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdrow":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loanPurpose: action.payload.purpose,
        loan: action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        purpose: "",
      };
    default:
      return state;
  }
}
export function withdrow(amount) {
  return { type: "account/withdrow", payload: amount };
}
export function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}
export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}
export function payLoan() {
  return {
    type: "account/payLoan",
  };
}
