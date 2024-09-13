import React from "react";
import { combineReducers, createStore } from "redux";
import customerSlice from "./Features/customers/customerSlice";
import accountSlice from "./Features/accounts/accountSlice";
import accountReducer from "./Features/accounts/accountSlice";
import customerReducer from "./Features/customers/customerSlice";
const storeCombine = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});

const store = createStore(storeCombine);
store.dispatch({ type: "account/deposit", payload: 200 });
console.log(store.getState());
export default function Store() {
  return <div>Store</div>;
}
