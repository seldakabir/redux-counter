import CreateCustomer from "./Features/customers/CreateCustomer";
import { Provider } from "react-redux";
import Customer from "./Features/customers/Customer";
import AccountOperations from "./Features/accounts/AccountOperations";
import BalanceDisplay from "./Features/accounts/BalanceDisplay";
import store from "./stores";
function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <Provider store={store}>
        <CreateCustomer />

        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      </Provider>
    </div>
  );
}

export default App;
