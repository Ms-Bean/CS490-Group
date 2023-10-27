import React, { useState } from "react";
import ExerciseList from "./ExerciseList";

const WorkoutPlanForm = ({ setShowForm, selectedClient }) => {
  const [workoutPlan, setWorkoutPlan] = useState({ schedule: "", goals: "", exercises: [] });

  const handleSelectedExercises = (selected) => {
    setWorkoutPlan((prevState) => ({ ...prevState, exercises: selected }));
  };

  const handleSave = () => {
    console.log(`Saved and assigned to ${selectedClient}`, workoutPlan);
    setShowForm(false);
  };

  return (
    <div className="card">
      <div className="card-header">Create/Modify Workout Plan</div>
      <div className="card-body">
        <ExerciseList isCreatingWorkout={true} onSelectedExercises={handleSelectedExercises} />
        <button type="button" className="btn btn-primary mt-3" onClick={handleSave}>
          Save and Assign to {selectedClient}
        </button>
        <button type="button" className="btn btn-secondary mt-3 ml-3" onClick={() => setShowForm(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlanForm;
