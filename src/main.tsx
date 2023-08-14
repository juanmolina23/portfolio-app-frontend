import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import App from "./App.tsx";
import "./styles/main.scss";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import { StrictMode } from "react";

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Provider>
);
