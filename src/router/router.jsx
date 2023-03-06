import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import ProjectsPage from "../pages/Projects";
import Contact from "../pages/Contact";

function Router() {
   return (
      <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/projects" exact element={<ProjectsPage />} />
         <Route path="/about" exact element={<About />} />
         <Route path="/contact" exact element={<Contact />} />
      </Routes>
   );
}

export default Router;
