import React from "react";
import { Container } from "react-bootstrap";
import logo from "../img/intern.png";
import Footer from "../Componets/Footer";

const Contact = () => {
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
            <form id="form">
              <div className="row mb-3">
                <div className="col-sm-6">
                  <label>First Name</label> <br />
                  <input
                    id="first_name"
                    type="text"
                    placeholder="Enter Your First Name"
                    autoFocus
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label>Last Name</label> <br />
                  <input
                    id="last_name"
                    type="text"
                    placeholder="Enter Your Last Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label>Email address</label> <br />
                <input
                  id="email"
                  type="email"
                  placeholder="yourname@gmail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Textarea</label> <br />
                <textarea
                  id="message"
                  placeholder="Send me a message and I will reply you as soon as possible"
                  required
                ></textarea>
              </div>

              <div id="check__content" className="mb-3">
                <div id="check">
                  <input type="checkbox" id="check__box" required />
                </div>
                <label for="check__box" id="check__box-message">
                  You agree to providing your data to Judidoko who may contact
                  you.
                </label>
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
