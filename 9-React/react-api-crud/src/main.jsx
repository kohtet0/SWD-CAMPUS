import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Container from "./Container.jsx";
import DataContextProvider from "./contexts/DataContext.jsx";
import axios from "axios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <Container>
      <App />
    </Container>
  </DataContextProvider>
);