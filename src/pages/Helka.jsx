import React, { Component } from "react";
import { api } from "../constants/app";
import "../styles/pages/helka.css";
import { v4 as uuidv4 } from "uuid";

export default class Helka extends Component {
   constructor(props) {
      super(props);

      this.state = {
         projects: [],
         status: "",
         title: "",
         image: "",
         github: "",
         web: "",
      };

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   async fetchProjects() {
      const response = await fetch(`${api}/projects`);
      const json = await response.json();
      this.setState({ projects: json });
   }

   componentDidMount() {
      this.fetchProjects();
   }

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   shouldComponentUpdate(nextpProps, nextState) {
      if (nextState !== this.state) {
         return true;
      } else {
         return false;
      }
   }

   handleSubmit(e) {
      e.preventDefault();

      fetch(`${api}/projects`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            id: uuidv4(),
            title: this.state.title,
            image: this.state.image,
            github: this.state.github,
            web: this.state.web,
         }),
      })
         .then((res) => {
            if (res.ok) {
               this.setState({ status: "add successfully!" });
            }
         })
         .catch((err) => {
            this.setState({ status: "upload project error" });
         });

      setTimeout(() => {
         this.setState({ status: "" });
      }, 200);
   }
   render() {
      return (
         <section>
            <main className="admin__container">
               <div className="admin__content ">
                  <form onSubmit={this.handleSubmit} className="form__content">
                     <span>Status : {this.state.status}</span>
                     <h2>add projects</h2>
                     <label for="title">
                        <input
                           type="text"
                           placeholder="title"
                           name="title"
                           onChange={this.handleChange}
                        />
                     </label>
                     <label for="image">
                        <input
                           type="text"
                           onChange={this.handleChange}
                           placeholder="image url"
                           name="image"
                        />
                     </label>
                     <label for="github">
                        <input
                           type="text"
                           onChange={this.handleChange}
                           placeholder="github link"
                           name="github"
                        />
                     </label>
                     <label for="web">
                        <input
                           type="text"
                           placeholder="web link"
                           onChange={this.handleChange}
                           name="web"
                        />
                     </label>
                     <button type="submit">add project</button>
                  </form>
               </div>
               <div className="admin__content">
                  {this.state.projects?.map((project, idx) => (
                     <img
                        className="projects__image"
                        key={idx}
                        src={project.image}
                     />
                  ))}
               </div>
            </main>
         </section>
      );
   }
}
