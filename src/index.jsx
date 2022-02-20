import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { useScript } from "./components/UseScript";

document.title = "My portfolio";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
