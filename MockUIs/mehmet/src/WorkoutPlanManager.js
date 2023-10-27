import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import WorkoutPlanList from "./WorkoutPlanList";
import ClientList from "./ClientList";
import ExerciseList from "./ExerciseList";
import DayPicker from "./DayPicker";

const WorkoutPlanManager = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [planToAssign, setPlanToAssign] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [newWorkoutExercises, setNewWorkoutExercises] = useState([]);
  const [newWorkoutPlan, setNewWorkoutPlan] = useState({ name: "", schedule: "", goals: "" });

  const [workoutPlans, setWorkoutPlans]  = useState([
    { name: "Plan A", schedule: "Mon, Wed", goals: "Strength" },
    { name: "Plan B", schedule: "Tue, Thu", goals: "Cardio" },
    { name: "Plan C", schedule: "Fri", goals: "Flexibility" },
    { name: "Plan D", schedule: "Sat, Sun", goals: "Endurance" },
    { name: "Plan A", schedule: "Mon, Wed", goals: "Strength" },
    { name: "Plan B", schedule: "Tue, Thu", goals: "Cardio" },
    { name: "Plan C", schedule: "Fri", goals: "Flexibility" },
    { name: "Plan D", schedule: "Sat, Sun", goals: "Endurance" },
  ]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleSelectedPlan = (plan) => {
    setSelectedPlan(plan === selectedPlan ? null : plan);
  };

  const handleAssignClient = (client) => {
    setSelectedClient(client);
  };

  const handleShowModal = (plan) => {
    setPlanToAssign(plan);
    setShowModal(true);
  };

  const toggleDay = (day) => {
    setSelectedDays((prevDays) => (prevDays.includes(day) ? prevDays.filter((d) => d !== day) : [...prevDays, day]));
  };

  const handleNewWorkoutExercises = (exercises) => {
    setNewWorkoutExercises(exercises);
  };

  const saveNewWorkoutPlan = () => {
    setWorkoutPlans([...workoutPlans, { ...newWorkoutPlan, exercises: newWorkoutExercises }]);
    setShowForm(false);
    setNewWorkoutPlan({ name: "", schedule: "", goals: "" });
    setNewWorkoutExercises([]);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <Container fluid className="mt-4">
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="flex-grow-1">Workout Plans</h2>
              <Button onClick={() => setShowForm(true)} className="ml-auto">
                Create New Plan
              </Button>
            </div>
            <WorkoutPlanList workoutPlans={workoutPlans} selectedPlan={selectedPlan} onSelectPlan={toggleSelectedPlan} onAssign={handleShowModal} />
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Assign to Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!selectedClient && <ClientList onSelectClient={handleAssignClient} />}
            {selectedClient && (
              <>
                <p>Selected Client: {selectedClient}</p>
                <DayPicker selectedDays={selectedDays} onDayToggle={toggleDay} />
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={!selectedDays.length}
              onClick={() => {
                console.log(`Assigned ${planToAssign.name} to ${selectedClient} on ${selectedDays.join(", ")}`);
                setShowModal(false);
              }}
            >
              Assign
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showForm} onHide={() => setShowForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Workout Plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ExerciseList isCreatingWorkout={true} onSelectedExercises={handleNewWorkoutExercises} />
            {/* Add inputs for newWorkoutPlan */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={saveNewWorkoutPlan}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default WorkoutPlanManager;
