import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/authContext";

const initialState = { login: true };

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthContext.Provider value={initialState}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </AuthContext.Provider>
   </React.StrictMode>
);
