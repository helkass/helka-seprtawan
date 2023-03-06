import React from "react";
import { color } from "../../styles/color";
import "./layout.css";

const Index = ({ children, className, id, pages }) => {
   return (
      <section id={id} className="container">
         <main
            className={`layout__section ${className}`}
            style={{
               border: `0.8rem solid ${color.secondary}`,
               marginBottom: `${pages && "6rem"}`,
            }}>
            {children}
         </main>
      </section>
   );
};

export const Card = ({ title, Icon, colorIcon, img }) => {
   return (
      <div className="card">
         <span>{title}</span>
         {Icon && <Icon color={colorIcon} className="icon" />}
         {img && <img src={img} className="card__image__Icon" />}
      </div>
   );
};

export default Index;
