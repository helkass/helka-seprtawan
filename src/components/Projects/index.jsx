import React from "react";
import "./projects.css";
import { projects } from "../../data/projects";

import Layout from "../Layout";
import Button from "../Buttons";
import StickyNote from "../StickyNote";

const Index = ({ pages }) => {
   return (
      <Layout pages={pages}>
         <div className="project__content">
            <Button border>Recent Projects</Button>
            <div className="project__content__note">
               {/* pages render all data */}
               {pages
                  ? projects.map((project, idx) => (
                       <StickyNote
                          key={idx}
                          title={project.title}
                          image={project.image}
                          githubLink={project.github}
                          webLink={project.web}
                          rotateLeft={idx % 2 === 0}
                       />
                    ))
                  : projects
                       .slice(0, 3)
                       .map((project, idx) => (
                          <StickyNote
                             key={idx}
                             title={project.title}
                             image={project.image}
                             githubLink={project.github}
                             webLink={project.web}
                             rotateLeft={idx % 2 === 0}
                          />
                       ))}
            </div>
            {pages ? (
               <></>
            ) : (
               <Button
                  to="/projects"
                  className="project__button__showAll"
                  border>
                  Show All
               </Button>
            )}
         </div>
      </Layout>
   );
};

export default Index;
