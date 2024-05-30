import "./styles/global.scss";
//router
import { RouterProvider } from "react-router-dom";
import router from "./router";
//redux
import { Provider } from "react-redux";
import store from "./state/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
