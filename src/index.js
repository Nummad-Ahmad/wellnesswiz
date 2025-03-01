import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use "react-dom/client"
import App from "./components/App";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <App />
    <Toaster />
    </>
);
