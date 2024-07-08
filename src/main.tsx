import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme
      accentColor="crimson"
      grayColor="sand"
      radius="medium"
      scaling="100%"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
