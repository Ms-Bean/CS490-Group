import React from "react";
import { Card, Button } from "react-bootstrap";

const WorkoutPlanItem = ({ plan, isSelected, onSelectPlan, onAssign }) => {
  const handleCardClick = () => {
    onSelectPlan(plan);
  };

  return (
    <Card
      className={`p-3 shadow-sm mb-4 position-relative ${isSelected ? "border-primary" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}
    >
      {" "}
      <Card.Body onClick={handleCardClick}>
        <Card.Title>{plan.name}</Card.Title>
        <Card.Text>Schedule: {plan.schedule}</Card.Text>
        <Card.Text>Goals: {plan.goals}</Card.Text>
      </Card.Body>
      {isSelected && (
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button variant="primary" size="sm" style={{ marginBottom: "5px" }} onClick={() => onAssign(plan)}>
            Assign
          </Button>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </div>
      )}
    </Card>
  );
};

export default WorkoutPlanItem;
