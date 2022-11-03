import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Last Name" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="FormEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="yourname@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormTextarea">
              <Form.Label>textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Send me a message and I will reply you as soon as possible"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="formCheckbox">
              <Form.Check
                type="checkbox"
                label="You agree to providing your data to {name} who may contact you."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
