import React from "react";
import "./typography.css";

const Index = ({ variant, style, children, className }) => {
   const Wrapper = variant || "p";
   return (
      <Wrapper style={style} className={`typography ${className}`}>
         {children}
      </Wrapper>
   );
};

export default Index;
