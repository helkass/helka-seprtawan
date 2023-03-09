import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import "../styles/pages/auth.css";
import { api } from "../constants/app";
import { AuthContext } from "../context/authContext";
import { Navigate, useNavigate } from "react-router-dom";

function Auth() {
   const [status, setStatus] = useState("");
   const navigate = useNavigate();

   const user = useContext(AuthContext);
   console.log("user", user);
   const handleLogin = async (data) => {
      if (!data) {
         return;
      }
      const response = await fetch(`${api}/user`);
      const json = await response.json();

      if (json.username !== data.username) {
         setStatus("authentication failed");
      } else {
         if (json.password !== data.password) {
            setStatus("authentication failed");
         } else {
            setStatus("success login");
            user.login = true;
         }
      }

      setTimeout(() => {
         setStatus("");
         return user.login ? navigate("/helka") : null;
      }, 2000);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      let value = {};

      value = {
         ...value,
         username: e.target[0].value,
         password: e.target[1].value,
      };

      handleLogin(value);
   };
   return (
      <Layout>
         <form onSubmit={handleSubmit} className="form__login">
            <h2>
               Status login :{" "}
               <span
                  style={{
                     color: status !== "success login" ? "red" : "green",
                  }}>
                  {status}
               </span>
            </h2>
            <label htmlFor="username" className="login__input">
               username
               <input type="text" name="username" />
            </label>
            <label htmlFor="password" className="login__input">
               password
               <input type="password" name="password" />
            </label>
            <button type="submit">gass keun...</button>
         </form>
      </Layout>
   );
}

export default Auth;
