import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

const AppointmentList = ({ appointments }) => {
  return (
    <Container>
      <h3>Upcoming Appointments</h3>
      <CardGroup>
        {appointments.map((apt, index) => (
          <Card key={index}>
            <Card.Header>{apt.date}</Card.Header>
            <Card.Body>
              <Card.Title>{`Time: ${apt.time} - ${apt.duration}`}</Card.Title>
              <Card.Text>{`Goals: ${apt.goals}`}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default AppointmentList;
