import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SubmitReview from './SubmitReview';
import ViewReviews from './ViewReviews';
import ExerciseBank from './ExerciseBank';
import AppointmentManager from './AppointmentManager';
import WorkoutPlanManager from './WorkoutPlanManager';

// Main App component
const App = () => {
  const [reviews, setReviews] = useState([]);
  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><h1>Moxi</h1></Navbar.Brand>
          <Nav className="ms-auto">
            
            {/* Dropdown for Reviews */}
            <NavDropdown title="Reviews" id="reviews-dropdown">
              <NavDropdown.Item as={Link} to="/view-reviews">View Reviews</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/submit-review">Submit Review</NavDropdown.Item>
            </NavDropdown>

            {/* Link for Appointments */}
            <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link>

            {/* Dropdown for Exercise and Workout Management */}
            <NavDropdown title="Exercise" id="management-dropdown">
              <NavDropdown.Item as={Link} to="/exercise-bank">Exercise Bank</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/workout-plans">Workout Plans</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      
      {/* Main content area */}
      <Container style={{ marginTop: '20px' }}>
        {/* Router configuration */}
        <Routes>
          {/* Reviews related routes */}
          <Route path="/view-reviews" element={<ViewReviews />} reviews={reviews} />
          <Route path="/submit-review" element={<SubmitReview addReview={addReview} />} />
          {/* Exercise related routes */}
          <Route path="/exercise-bank" element={<ExerciseBank />} />
          {/* Appointments related route */}
          <Route path="/appointments" element={<AppointmentManager />} />
          {/* Workout plans related route */}
          <Route path="/workout-plans" element={<WorkoutPlanManager />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
