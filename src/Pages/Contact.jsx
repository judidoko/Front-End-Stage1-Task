import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../img/intern.png";

const Contact = () => {
  return (
    <>
      <Container>
        <div id="content">
          {/* Heading & Supporting Text Section */}

          <div id="heading__supporting-text">
            <h1>Contact Me</h1>
            <h6>
              Hi there, contact me to ask me about anything you have in mind.
            </h6>
          </div>
          <form action="#">
            <div className="row mb-3">
              <div className="col-sm-6">
                <label>First Name</label> <br />
                <input
                  id="first_name"
                  type="text"
                  placeholder="Enter Your First Name"
                />
              </div>

              <div className="col-sm-6">
                <label>Last Name</label> <br />
                <input
                  id="last_name"
                  type="text"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <div className="mb-3">
              <label>Email address</label> <br />
              <input id="email" type="email" placeholder="yourname@gmail.com" />
            </div>
            <div className="mb-3">
              <label>Textarea</label> <br />
              <textarea id="message">
                Send me a message and I will reply you as soon as possible
              </textarea>
            </div>

            <div className="mb-3">
              <input type="checkbox" id="check__box" className="mx-2" />
              <label id="check__box-message">
                You agree to providing your data to Judidoko who may contact
                you.
              </label>
            </div>

            <button id="btn__submit" variant="primary" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <footer>
          <div id="flex__container">
            <h2>
              Zuri <label></label> Intenship
            </h2>
          </div>
          <div id="flex__container">
            <h6>HNG Internship 9 Frontend Task</h6>
          </div>
          <div id="flex__container">
            <img src={logo} alt="" />
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Contact;
