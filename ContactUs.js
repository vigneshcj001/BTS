import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { countries } from "../utility/countries";
import ContactUsStyles from "./ContactUsStyles.css";


const ContactUs = () => {
  //hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  //emailjs
  const form = useRef();

  const sendEmail = (e) => {
     e.preventDefault();

    emailjs
      .sendForm(
        "service_898d99z",
        "template_bk65qk9",
        form.current,
        "E4xj38yu8oPT7hJfc"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <div className="form-field">
        <form
          form
          ref={form}
          onSubmit = {
            (e) => {
              handleSubmit((data) => {
                sendEmail(e); // Pass the event object to sendEmail
                console.log(data); // Log the form data to the console
              })(e);
            }
          }
        >
          <div className="user_name">
            <label className="form-comp" htmlFor="user_name">Name</label>
            <input
              {...register("user_name", {
                required: "Please enter your name",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Name must be at most 20 characters long",
                },
              })}
              type="text"
              name="user_name"
              id="user_name"
              className="input-comp"
            />
            <p className="error">{errors.user_name?.message}</p>
          </div>

          <div className="user_email">
            <label className="form-comp" htmlFor="user_email">Email</label>
            <input
              {...register("user_email", {
                required: "Please enter your Email",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Enter valid Email",
                },
              })}
              type="email"
              name="user_email"
              id="user_email"
              className = "input-comp"
            />
            <p className="error">{errors.user_email?.message}</p>
          </div>

          

          <div className="countries-select-container">
            <label className="form-comp" htmlFor="countriesselect">
              <span className="form-comp">Select Country</span>
            </label>
            <select
              select
              {...register("countriesSelect", {
                required: "Please select your country",
              })}
              id="countriesSelect"
              className = "input-comp"
            >
              {countries.map(({ value, label }) => (
                <option className="countries-names" key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <p className="error">{errors.countriesSelect?.message}</p>
          </div>

          <div className="message">
            <label className="form-comp" htmlFor="message">Message</label>
            <textarea {
              ...register("message", {
                required: "Please enter your message",
              })
            }
            name = "message"
            id = "message"
            className = "input-comp" / >
            <p className="error">{errors.message?.message}</p>
          </div>

          <div className="submit-container">
            <input className="submit-btn" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

