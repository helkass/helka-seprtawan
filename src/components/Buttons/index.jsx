import { Link } from "react-router-dom";
import { color } from "../../styles/color";
import "./button.css";

const Button = ({ children, onClick, className, to, border, href, type }) => {
   if (href) {
      return (
         <a href={href} target="_blank">
            <button
               className={`button__style hover-link ${className} `}
               style={{
                  border: border && `4px solid ${color.secondary}`,
                  color: color.primary,
                  cursor: "pointer",
               }}>
               {children}
            </button>
         </a>
      );
   }

   if (to) {
      return (
         <Link to={to}>
            <button
               className={`button__style ${className} `}
               style={{
                  border: border && `4px solid ${color.secondary}`,
                  color: color.primary,
                  cursor: "pointer",
               }}>
               {children}
            </button>
         </Link>
      );
   }

   return (
      <button
         onClick={onClick}
         type={type}
         className={`button__style ${className} `}
         style={{
            border: border && `4px solid ${color.secondary}`,
            color: color.primary,
         }}>
         {children}
      </button>
   );
};

export default Button;
