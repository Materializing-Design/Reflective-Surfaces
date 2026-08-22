import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GameManagementProvider } from "./managers/GameManager";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <GameManagementProvider>
        <App />
      </GameManagementProvider>
    </BrowserRouter>
  </StrictMode>
);
