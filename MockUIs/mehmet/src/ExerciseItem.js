import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const FormField = ({ label, value, onChange }) => (
  <Form.Group className="mb-2">
    <Form.Label>{label}</Form.Label>
    <Form.Control type="text" value={value} onChange={onChange} />
  </Form.Group>
);

const FormFields = ({ editedExercise, setEditedExercise }) => {
  const fields = ["name", "videoURL", "muscleGroups"];
  return fields.map((field) => (
    <FormField
      key={field}
      label={`${field.charAt(0).toUpperCase() + field.slice(1)} `}
      value={editedExercise[field]}
      onChange={(e) => setEditedExercise({ ...editedExercise, [field]: e.target.value })}
    />
  ));
};

const CardTexts = ({ exercise }) =>
  Object.keys(exercise).map(
    (key, index) => key !== "name" && <Card.Text key={index}>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${exercise[key]}`}</Card.Text>
  );

const ExerciseItem = ({ exercise, onEdit, onToggleSelect, isSelected, onDelete, isCreatingWorkout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExercise, setEditedExercise] = useState({ ...exercise });

  const handleSave = () => {
    setIsEditing(false);
    onEdit(editedExercise);
  };

  return (
    <Card
      className={`p-3 shadow-sm mb-4 position-relative ${isSelected ? "border-primary" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={() => {
        if (!isEditing) {
          onToggleSelect(exercise);
        }
      }}
    >
      {isEditing ? (
        <>
          <FormFields editedExercise={editedExercise} setEditedExercise={setEditedExercise} />
          <div className="btn-group" role="group" style={{ position: "absolute", top: "15px", right: "15px" }}>
            <Button variant="success" size="sm" onClick={handleSave}>
              Save
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(exercise)}>
              Delete
            </Button>
          </div>
        </>
      ) : (
        <>
          <Card.Body>
            <Card.Title>{exercise.name}</Card.Title>
            {!isCreatingWorkout && <CardTexts exercise={exercise} />}
          </Card.Body>
          {isSelected && !isCreatingWorkout && (
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button variant="secondary" size="sm" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

export default ExerciseItem;
