import React, { useRef, useState } from "react";
import "../styles/pages/contact.css";
import emailjs from "@emailjs/browser";
import { email_service } from "../constants/email";

import Layout from "../components/Layout";
import Typography from "../components/Typography";
import Button from "../components/Buttons";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
   let [alert, setAlert] = useState(false);
   const [values, setValues] = useState({
      name: "",
      email: "",
      message: "",
   });
   // setter input
   const handleChange = (e) => {
      setValues((values) => ({
         ...values,
         [e.target.name]: e.target.value,
      }));
   };
   const [message, setMessage] = useState({
      type: false,
      message: "",
   });
   const [cb, setCb] = useState({
      type: false,
      message: "",
   });

   const coba = () => {
      setCb({ type: true, message: "test" });
   };
   console.log(cb);

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs
         .send(
            email_service.email_service,
            email_service.email_template,
            values,
            email_service.public_api_key
         )
         .then((res) => {
            if (res.status == 200) {
               setAlert(true);

               setMessage({
                  type: true,
                  message: `thanks ${values.name} for teach me!`,
               });
            }
         })
         .catch((err) => {
            setAlert(true);
            setMessage({ type: false, message: `sending email failure!` });
         });

      setTimeout(() => {
         setAlert(false);
         e.target.reset();
      }, 2000);
   };
   return (
      <Layout pages>
         <div className="contact__content">
            {alert ? (
               <Typography className="contact__alert">
                  {message.message}
               </Typography>
            ) : (
               <></>
            )}
            <Typography variant="h3" className="contact__header">
               Teach Me
            </Typography>

            <form className="contact__form" onSubmit={handleSubmit}>
               <Input
                  name="name"
                  onChange={handleChange}
                  label="Your Name"
                  type="text"
               />
               <Input
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  type="email"
               />
               <Input
                  onChange={handleChange}
                  name="message"
                  label="Description"
                  type="textArea"
               />
               <Button type="submit" className="contact__button__submit">
                  Lest Go Send
                  <span>
                     <BsFillSendFill size={20} />
                  </span>
               </Button>
            </form>
            <button onClick={coba}>coba</button>
         </div>
      </Layout>
   );
};

const Input = ({ label, type, name, refInput, onChange }) => {
   return (
      <label className="contact__form">
         {label}
         {type == "textArea" ? (
            <textarea onChange={onChange} ref={refInput} name={name} />
         ) : (
            <input ref={refInput} onChange={onChange} type={type} name={name} />
         )}
      </label>
   );
};

export default Contact;
