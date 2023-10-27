import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const WorkoutPlanWeek = ({ appointments }) => {
  const plansByDay = {};

  appointments.forEach((apt) => {
    const day = new Date(apt.date).getDay();
    plansByDay[day] = plansByDay[day] || [];
    plansByDay[day].push(apt.goals);
  });

  return (
    <Container>
      <h3>Weekly Workout Plan</h3>
      <CardGroup>
        {days.map((day, i) => (
          <Card key={i} style={{ marginBottom: "15px" }}>
            <Card.Header>{day}</Card.Header>
            <Card.Body>
              {/* Check if there are workout plans for this day and display them, otherwise show "Rest Day". */}
              {plansByDay[i] ? plansByDay[i].map((goal, index) => <Card.Text key={index}>{goal}</Card.Text>) : <Card.Text>Rest Day</Card.Text>}
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default WorkoutPlanWeek;
