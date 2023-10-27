import React from "react";
import { Row, Col } from "react-bootstrap";
import WorkoutPlanItem from "./WorkoutPlanItem";

const WorkoutPlanList = ({ workoutPlans, selectedPlan, onSelectPlan, onAssign }) => {
  return (
    <Row>
      {workoutPlans.map((plan, index) => (
        <Col md={4} key={index}>
          <WorkoutPlanItem plan={plan} isSelected={plan === selectedPlan} onSelectPlan={onSelectPlan} onAssign={onAssign} />
        </Col>
      ))}
    </Row>
  );
};

export default WorkoutPlanList;
