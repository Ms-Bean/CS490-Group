import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ExerciseForm = ({ onExerciseCreate }) => {
  const [newExercise, setNewExercise] = useState({
    name: "",
    description: "",
    equipment: "",
    difficulty: "",
    videoURL: "",
    muscleGroups: "",
  });

  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateExercise = () => {
    onExerciseCreate(newExercise);
    setNewExercise({
      name: "",
      description: "",
      equipment: "",
      difficulty: "",
      videoURL: "",
      muscleGroups: "",
    });
    setShowCreateForm(false);
  };

  return (
    <>
      <Button style={{ marginRight: "5px" }} variant="primary" onClick={() => setShowCreateForm(true)}>
        Create New Exercise
      </Button>

      <Modal show={showCreateForm} onHide={() => setShowCreateForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={newExercise.name}
                onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={newExercise.description}
                onChange={(e) =>
                  setNewExercise({
                    ...newExercise,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Equipment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Equipment"
                value={newExercise.equipment}
                onChange={(e) => setNewExercise({ ...newExercise, equipment: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Difficulty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Difficulty"
                value={newExercise.difficulty}
                onChange={(e) => setNewExercise({ ...newExercise, difficulty: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Video URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Video URL"
                value={newExercise.videoURL}
                onChange={(e) => setNewExercise({ ...newExercise, videoURL: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Muscle Groups</Form.Label>
              <Form.Control
                type="text"
                placeholder="Muscle Groups (e.g., Chest, Back)"
                value={newExercise.muscleGroups}
                onChange={(e) => setNewExercise({ ...newExercise, muscleGroups: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateForm(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateExercise}>
            Add Exercise
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExerciseForm;