import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";
import { store } from "../store";
import { ReactFlowProvider } from "reactflow";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ReactFlowProvider>
      <RouterProvider router={router} />
    </ReactFlowProvider>
  </Provider>
);
