import React from "react";
import "./tech.css";

import { color } from "../../styles/color";
import Button from "../Buttons";
import Layout, { Card } from "../Layout";

import { FaReact, FaCss3, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import material_icon from "../../assets/material-ui-icon.png";

const Index = () => {
   return (
      <Layout>
         <div className="tech__content">
            <Button border>Tech</Button>
            <div className="tech__content" style={{ paddingLeft: "12px" }}>
               <div
                  style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                  <Card title="HTML" colorIcon="#f06529" Icon={FaHtml5} />
                  <Card title="CSS" colorIcon={color.primary} Icon={FaCss3} />
                  <Card
                     title="Javascript"
                     colorIcon="#F0DB4F"
                     Icon={IoLogoJavascript}
                  />
               </div>
               <Button border>JS Frameworks</Button>
               <div
                  style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                  <Card
                     title="React Js"
                     colorIcon={color.primary}
                     Icon={FaReact}
                  />
                  <Card
                     title="Express Js"
                     colorIcon="#68ad63"
                     Icon={SiExpress}
                  />
               </div>
               <Button border>CSS Frameworks</Button>
               <div
                  style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                  <Card
                     title="Tailwind CSS"
                     colorIcon={color.primary}
                     Icon={SiTailwindcss}
                  />
                  <Card title="SASS" colorIcon="#cc6699" Icon={FaSass} />
                  <Card title="Material UI" img={material_icon} />
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Index;
