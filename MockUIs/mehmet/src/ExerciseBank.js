import React, { useState } from "react";
import ExerciseList from "./ExerciseList";
import ExerciseForm from "./ExerciseForm";

const ExerciseBank = () => {
  const [isCreatingWorkout, setIsCreatingWorkout] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const toggleCreatingWorkout = () => {
    setIsCreatingWorkout(!isCreatingWorkout);
    setSelectedExercises([]); // Reset selected exercises
  };

  const handleSelectedExercises = (selected) => {
    setSelectedExercises(selected);
  };

  const saveWorkoutPlan = () => {
    console.log("Saving workout plan with exercises:", selectedExercises);
    toggleCreatingWorkout();
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Exercise Bank</h2>
        <div>
          <ExerciseForm />
          <button type="button" className="btn btn-success ml-2" onClick={toggleCreatingWorkout}>
            {isCreatingWorkout ? "Cancel" : "Create Workout Plan"}
          </button>
        </div>
      </div>
      <ExerciseList isCreatingWorkout={isCreatingWorkout} onSelectedExercises={handleSelectedExercises} />
      {isCreatingWorkout && selectedExercises.length > 0 && (
        <button type="button" className="btn btn-primary" onClick={saveWorkoutPlan}>
          Save as Workout Plan
        </button>
      )}
    </div>
  );
};

export default ExerciseBank;
