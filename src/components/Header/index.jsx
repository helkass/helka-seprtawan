import React from "react";

import "./header.css";
import { color } from "../../styles/color";
import { Link, useLocation } from "react-router-dom";

function Index() {
   const location = useLocation();
   return (
      <header style={{ color: color.primary }} className="container">
         <main className="header__container">
            {links.map((link, idx) => (
               <Link style={{ width: "100%" }} to={link.link} key={idx}>
                  <button
                     style={{
                        outline:
                           location.pathname == link.link &&
                           "2px dashed #3e54ac",
                     }}
                     className="header__list__item hover-link">
                     {link.label}
                  </button>
               </Link>
            ))}
         </main>
      </header>
   );
}

const links = [
   {
      label: "home",
      link: "/",
   },
   {
      label: "about me",
      link: "/about",
   },
   {
      label: "projects",
      link: "/projects",
   },
   {
      label: "contact",
      link: "/contact",
   },
];

export default Index;
