import React from "react";
import "./note.css";

import Typography from "../Typography";

import { AiFillGithub } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import Button from "../Buttons";

const StickyNote = ({
   rotateLeft,
   rotateRight,
   title,
   image,
   githubLink,
   webLink,
}) => {
   return (
      <div
         className="note__content"
         style={{
            transform:
               rotateLeft && "rotate(2deg)"
                  ? rotateRight && "rotate(-2deg)"
                  : "rotate(0)",
         }}>
         <Typography variant="h3" className="note__title">
            {title}
         </Typography>
         <img
            className="note__image"
            alt="image project"
            loading="lazy"
            src={image}
         />
         <div className="note__social__icons">
            <Button className="note__social__icon hover-link" href={githubLink}>
               <AiFillGithub />
            </Button>
            {webLink != undefined && (
               <Button className="note__social__icon hover-link" href={webLink}>
                  <BsLink />
               </Button>
            )}
         </div>
      </div>
   );
};

export default StickyNote;
