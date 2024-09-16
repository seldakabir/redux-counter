import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Features/customers/customerSlice";
import accountReducer from "./Features/accounts/accountSlice";
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
