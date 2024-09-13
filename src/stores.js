import { combineReducers, createStore } from "redux";
import accountReducer from "./Features/accounts/accountSlice";
import customerReducer from "./Features/customers/customerSlice";
const storeCombine = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});

const store = createStore(storeCombine);
store.dispatch({ type: "account/deposit", payload: 200 });
export default store;
