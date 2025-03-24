

import React from "react";
import ReactDOM from "react-dom"; // ✅ Use "react-dom" instead of "react-dom/client"
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // ✅ Use this in React 16
);

// If you still want to keep reportWebVitals, you can keep it.
reportWebVitals();
