import React from "react";
import "./hero.css";
import man from "../../assets/man.png";
import Typography from "../Typography";
import Layout from "../Layout";
import Button from "../Buttons";

import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
               <Button href="https://www.instagram.com/helka_septyawan/?hl=id">
                  <AiFillInstagram />
               </Button>
               <Button href="https://github.com/helkass/">
                  <AiFillGithub />
               </Button>
               <Button href="https://www.linkedin.com/in/helka-septyawan-66a60415b/">
                  <AiFillLinkedin />
               </Button>
            </div>
         </div>
         <div className="hero__right">
            <img src={man} className="hero__image" />
         </div>
      </Layout>
   );
};

export default Index;
