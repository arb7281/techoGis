import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducer";
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
