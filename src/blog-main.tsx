import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BlogApp } from "./app/BlogApp"; // создайте этот компонент в src/app

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogApp />
  </StrictMode>
);
