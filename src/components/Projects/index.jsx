import React from "react";
import "./projects.css";

import Layout from "../Layout";
import Button from "../Buttons";
import StickyNote from "../StickyNote";

import { api } from "../../constants/app";

const Index = ({ pages }) => {
   const [data, setData] = React.useState([]);
   const fetchData = async () => {
      const response = await fetch(`${api}/projects`);
      const json = await response.json();

      setData(json);
   };

   React.useEffect(() => {
      fetchData();
   }, []);
   return (
      <Layout pages={pages}>
         <div className="project__content">
            <Button border>Recent Projects</Button>
            <div className="project__content__note">
               {/* pages render all data */}
               {pages
                  ? data.map((project, idx) => (
                       <StickyNote
                          key={idx}
                          title={project.title}
                          image={project.image}
                          githubLink={project.github}
                          webLink={project.web}
                          rotateLeft={idx % 2 === 0}
                       />
                    ))
                  : data
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
