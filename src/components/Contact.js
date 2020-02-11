import React from "react";
import "./Contact.css";
import Hero from "../toolsComponents/Hero";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="contact" style={{ minHeight: "450px" }}>
      <Hero title="Contact" />
      <Row>
        <Col>
          <Form>
            <Form.Group
              className="d-flex flex-column align-items-center"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="col-md-8 f16 pl-0">Full Name</Form.Label>
              <Form.Control className="col-md-8 shadow-none" type="text" />
            </Form.Group>

            <Form.Group
              className="d-flex flex-column align-items-center"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label className="col-md-8 f16 pl-0">
                Phone Number
              </Form.Label>
              <Form.Control className="col-md-8 shadow-none" type="number" />
            </Form.Group>

            <Form.Group
              className="d-flex flex-column align-items-center"
              controlId="exampleForm.ControlInput3"
            >
              <Form.Label className="col-md-8 f16 pl-0">
                Email address
              </Form.Label>
              <Form.Control className="col-md-8 shadow-none" type="email" />
            </Form.Group>

            <Form.Group
              className="d-flex flex-column align-items-center"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="col-md-8 f16 pl-0">Message</Form.Label>
              <Form.Control
                className="col-md-8 shadow-none"
                as="textarea"
                rows="5"
              />
            </Form.Group>

            <Form.Group className="d-flex flex-column align-items-center">
              <Button
                className="submit-btn col-md-8 shadow-none"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
