import React, { useRef, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import { Toast } from "primereact/toast";

function ContactForm() {
  const toast = useRef(null);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const dataForm = useRef();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.from_name.trim()) {
      errors.from_name = "Name is required";
      isValid = false;
    }

    if (!formData.from_email.trim()) {
      errors.from_email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      errors.from_email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form data
      emailjs
        .sendForm(
          "service_kvwashi",
          "template_dg58tjo",
          dataForm.current,
          "IO0nhoX8XxTyjKJng"
        )
        .then(
          (result) => {
            toast.current.show({
              severity: "success",
              summary: "Success",
              detail: "Mail Sended...",
              life: 3000,
            });
            // alert("Successfully sended...")
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container className="contactForm">
      <Toast ref={toast} />
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form ref={dataForm} onSubmit={handleSubmit} id="contact-form">
            <h2 className="congt_alig">Contact Us</h2>

            <Form.Group controlId="formName" className="formGroup">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="formInput"
                value={formData.from_name}
                onChange={handleChange}
              />
              {errors.name && (
                <Form.Text className="text-danger">{errors.name}</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="formEmail" className="formGroup">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="from_email"
                className="formInput"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
              />
              {errors.from_email && (
                <Form.Text className="text-danger">
                  {errors.from_email}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="formMessage" className="formGroup">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                className="formInput_textarea"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <Form.Text className="text-danger">{errors.message}</Form.Text>
              )}
            </Form.Group>
            <div className="submitbutton">
              <Button className="submitBtn" variant="primary" type="submit">
                <p>Send</p>
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
