import React from "react";
import Typography from "../Typography";
import "./icon.css";
import { color } from "../../styles/color";

const Index = ({ children }) => {
   return (
      <Typography
         style={{
            border: `4px solid ${color.primary}`,
            color: color.primary,
         }}
         variant="span"
         className="icon hover-link">
         {children}
      </Typography>
   );
};

export default Index;
