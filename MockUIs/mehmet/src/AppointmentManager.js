import React from "react";
import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";
import WorkoutPlanWeek from "./WorkoutPlanWeek";

const AppointmentManager = () => {
  const mockAppointments = [
    { date: "2023-11-07", time: "10:00", duration: "1 hour", goals: "Chest and Triceps" },
    { date: "2023-11-09", time: "12:00", duration: "1 hour", goals: "Back and Biceps" },
    { date: "2023-11-11", time: "09:00", duration: "1 hour", goals: "Legs and Shoulders" },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <AppointmentList appointments={mockAppointments} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <WorkoutPlanWeek appointments={mockAppointments} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <AppointmentForm/>
      </div>
    </div>
  );
};

export default AppointmentManager;
