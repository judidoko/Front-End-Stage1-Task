import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Componets/Footer";

const Contact = () => {
  const name = "Idoko Jude";
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleFocus = (e) => {
    setFocused(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    // const regex =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.first_name) {
      errors.first_name = "First Name is required!";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.message) {
      errors.message = "Please Enter a Message!";
    }
    if (!values.check_box) {
      errors.check_box = "You need to check the box to agree!";
    }
    return errors;
  };
  return (
    <>
      <Container>
        <div id="content__center">
          <div id="content">
            {/* Heading & Supporting Text Section */}

            <div id="heading__supporting-text">
              <h1>Contact Me</h1>
              <h6>
                Hi there, contact me to ask me about anything you have in mind.
              </h6>
            </div>
            <form onSubmit={handleSubmit} id="form">
              <div className="row mb-3">
                <div className="col-sm-6">
                  <label>First Name</label> <br />
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="Enter Your First Name"
                    value={formValues.first_name}
                    onChange={handleChange}
                    autoFocus
                  />
                  <p>{formErrors.first_name}</p>
                </div>

                <div className="col-sm-6">
                  <label>Last Name</label> <br />
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder="Enter Your Last Name"
                    value={formValues.last_name}
                    onChange={handleChange}
                  />
                  <p>{formErrors.last_name}</p>
                </div>
              </div>
              <div className="mb-3">
                <label>Email address</label> <br />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="yourname@gmail.com"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="mb-3">
                <label>Textarea</label> <br />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Send me a message and I will reply you as soon as possible"
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <p>{formErrors.message}</p>

              <div id="check__content" className="mb-3">
                <input
                  type="checkbox"
                  id="check__box"
                  name="check_box"
                  onBlur={handleFocus}
                  focused={focused.toString()}
                />

                <label htmlFor="check__box" id="check__box-message">
                  You agree to providing your data to {name} who may contact
                  you.
                </label>
                <p>{formErrors.check_box}</p>
              </div>

              <button id="btn__submit" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </Container>
    </>
  );
};

export default Contact;
