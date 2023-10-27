import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

const AppointmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "",
    goals: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <h3 style={{ marginBottom: "20px" }}>Set Up Appointments with Coach</h3>
      <h5 style={{ marginBottom: "20px" }}>Please fill out the form below to set up an appointment with Coach</h5>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
        </Form.Group>

        <Form.Group controlId="duration">
          <Form.Label>Duration</Form.Label>
          <Form.Control as="select" onChange={(e) => setFormData({ ...formData, duration: e.target.value })}>
            <option>30 minutes</option>
            <option>1 hour</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="goals">
          <Form.Label>Goals</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => setFormData({ ...formData, goals: e.target.value })} />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default AppointmentForm;