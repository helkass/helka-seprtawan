import React from "react";
import "./hero.css";
import man from "../../assets/man.png";
import Typography from "../Typography";
import IconButton from "../IconButton";
import Layout from "../Layout";

import {
   AiFillInstagram,
   AiFillGithub,
   AiFillLinkedin,
   AiFillTwitterSquare,
} from "react-icons/ai";

const Index = () => {
   return (
      <Layout>
         <div className="hero__left">
            <div>
               <Typography variant="h1" className="hero__title">
                  Hi 👋 i`m Helka Septyawan
               </Typography>
               <Typography className="hero__subtitle">
                  I `m Frontend Developer, create beautiful and interactive with
                  React Apps
               </Typography>
            </div>
            <div className="header__icons">
               <IconButton>
                  <AiFillInstagram />
               </IconButton>
               <IconButton>
                  <AiFillGithub />
               </IconButton>
               <IconButton>
                  <AiFillLinkedin />
               </IconButton>
               <IconButton>
                  <AiFillTwitterSquare />
               </IconButton>
            </div>
         </div>
         <div className="hero__right">
            <img src={man} className="hero__image" />
         </div>
      </Layout>
   );
};

export default Index;
