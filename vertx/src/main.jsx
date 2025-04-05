import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import SideBar from "./components/SideBar/index.jsx";

import MainPage from "./pages/MainPage/index.jsx";
import TopBar from "./components/TopBar/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TopBar />
    <div class="flex">
      <SideBar />
 
      <MainPage />
    </div>
  </StrictMode>
);
