import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import ProjectsPage from "../pages/Projects";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import Helka from "../pages/Helka";
import { AuthContext } from "../context/authContext";

const RequiredAuth = ({ children }) => {
   const user = useContext(AuthContext);
   return user.login ? children : <Navigate to="/auth" replace />;
};

function Router() {
   return (
      <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/projects" exact element={<ProjectsPage />} />
         <Route path="/about" exact element={<About />} />
         <Route path="/contact" exact element={<Contact />} />
         <Route path="/auth" exact element={<Auth />} />

         <Route
            path="/helka"
            exact
            element={
               <RequiredAuth>
                  <Helka />
               </RequiredAuth>
            }
         />
      </Routes>
   );
}

export default Router;
