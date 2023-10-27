import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DayPicker = ({ selectedDays, onDayToggle }) => (
  <Row xs={1} md={2} lg={1} className="g-2">
    {days.map((day, idx) => (
      <Col key={idx}>
        <Card onClick={() => onDayToggle(day)} style={{ cursor: "pointer", backgroundColor: selectedDays.includes(day) ? "#e0e0e0" : "" }}>
          <Card.Body className="text-center">
            <Card.Text>{day}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default DayPicker;
