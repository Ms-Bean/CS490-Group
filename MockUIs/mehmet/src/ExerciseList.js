import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import ExerciseItem from "./ExerciseItem";

const ExerciseList = ({ isCreatingWorkout, onSelectedExercises }) => {
  const [exercises, setExercises] = useState([
    {
      name: "Push-up",
      description: "Chest exercise",
      equipment: "None",
      difficulty: "Medium",
    },
    {
      name: "Squat",
      description: "Leg exercise",
      equipment: "None",
      difficulty: "Medium",
    },
    {
      name: "Deadlift",
      description: "Full-body exercise",
      equipment: "Barbell",
      difficulty: "Hard",
    },
    {
      name: "Bench Press",
      description: "Chest exercise",
      equipment: "Barbell",
      difficulty: "Medium",
    },
    {
      name: "Plank",
      description: "Core exercise",
      equipment: "None",
      difficulty: "Easy",
    },
    {
      name: "Row",
      description: "Back exercise",
      equipment: "Dumbbell",
      difficulty: "Medium",
    },
    {
      name: "Lunges",
      description: "Leg exercise",
      equipment: "None",
      difficulty: "Easy",
    },
    {
      name: "Pull-up",
      description: "Back and arm exercise",
      equipment: "Pull-up bar",
      difficulty: "Hard",
    },
    {
      name: "Dips",
      description: "Tricep exercise",
      equipment: "Parallel bars",
      difficulty: "Medium",
    },
    {
      name: "Leg Press",
      description: "Leg exercise",
      equipment: "Leg Press machine",
      difficulty: "Medium",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedExercises, setSelectedExercises] = useState([]); // array of selected exercises
  const toggleSelect = (exercise) => {
    // called when an exercise is clicked
    const isSelected = selectedExercises.includes(exercise);
    setSelectedExercises(isSelected ? selectedExercises.filter((e) => e !== exercise) : [...selectedExercises, exercise]);
  };

  useEffect(() => {
    onSelectedExercises(selectedExercises);
  }, [selectedExercises]);

  const sortedAndFilteredExercises = useMemo(() => {
    // Create a new array, sort it, and filter it
    return [...exercises]
      .sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      })
      .filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [exercises, sortBy, searchTerm]);

  return (
    <>
      {/* Search bar and sort dropdown */}
      <InputGroup className="mb-3">
        <FormControl placeholder="Search exercises..." onChange={(e) => setSearchTerm(e.target.value)} />
        <DropdownButton as={InputGroup.Append} variant="outline-secondary" title={`Sort By: ${sortBy}`}>
          <Dropdown.Item onClick={() => setSortBy("name")}>Name</Dropdown.Item>
          <Dropdown.Item onClick={() => setSortBy("difficulty")}>Difficulty</Dropdown.Item>
        </DropdownButton>
      </InputGroup>

      {/* List of exercises */}
      <Row xs={2} md={3} className="g-4">
        {sortedAndFilteredExercises.map((exercise, index) => (
          <Col key={index}>
            <ExerciseItem
              exercise={exercise}
              isCreatingWorkout={isCreatingWorkout}
              onToggleSelect={toggleSelect}
              isSelected={selectedExercises.includes(exercise)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ExerciseList;
