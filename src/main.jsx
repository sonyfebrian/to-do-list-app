import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>
);
