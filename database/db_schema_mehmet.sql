CREATE DATABASE IF NOT EXISTS fitness;
USE fitness;

CREATE TABLE fitness_goals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE fitness_levels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE dietary_preferences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE weekdays (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15)
);

CREATE TABLE countries (
    country_id INT AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR(50)
);

CREATE TABLE cities (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(50),
    country_id INT,
    FOREIGN KEY (country_id) REFERENCES countries(country_id)
);

CREATE TABLE addresses (
    address_id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(50),
    address2 VARCHAR(50),
    district VARCHAR(20),
    city_id INT,
    postal_code VARCHAR(10),
    phone VARCHAR(20),
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);

CREATE TABLE user_accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    is_coach BOOLEAN DEFAULT FALSE,
    deleted_at DATETIME NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE user_profiles (
    user_id INT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    weight FLOAT,
    height FLOAT,
    experience VARCHAR(50),
    budget FLOAT,
    address_id INT,
    FOREIGN KEY (user_id) REFERENCES user_accounts(id) ON DELETE CASCADE,
    FOREIGN KEY (address_id) REFERENCES addresses(address_id) ON DELETE SET NULL,
    UNIQUE(user_id)
);

CREATE TABLE onboarding_info (
    user_id INT,
    fitness_goal_id INT,
    fitness_level_id INT,
    dietary_pref_id INT,
    medical_conditions TEXT,
    FOREIGN KEY (user_id) REFERENCES user_accounts(id) ON DELETE CASCADE,
    FOREIGN KEY (fitness_goal_id) REFERENCES fitness_goals(id),
    FOREIGN KEY (fitness_level_id) REFERENCES fitness_levels(id),
    FOREIGN KEY (dietary_pref_id) REFERENCES dietary_preferences(id),
    UNIQUE(user_id)
);

CREATE TABLE exercise_bank (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    duration INT,
    youtube_url VARCHAR(255),
    calories_burned INT,
    difficulty ENUM('Easy', 'Medium', 'Hard')
);

CREATE TABLE workout_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    created_by INT,
    difficulty ENUM('Beginner', 'Intermediate', 'Advanced'), 
    FOREIGN KEY (created_by) REFERENCES user_accounts(id)
);

CREATE TABLE workout_plan_exercises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    workout_plan_id INT,
    exercise_id INT,
    reps INT,
    sets INT,
    FOREIGN KEY (workout_plan_id) REFERENCES workout_plans(id),
    FOREIGN KEY (exercise_id) REFERENCES exercise_bank(id)
);

CREATE TABLE client_coach_workout (
    client_id INT,
    coach_id INT,
    workout_plan_id INT,
    PRIMARY KEY (client_id, coach_id, workout_plan_id),
    FOREIGN KEY (client_id) REFERENCES user_accounts(id),
    FOREIGN KEY (coach_id) REFERENCES user_accounts(id),
    FOREIGN KEY (workout_plan_id) REFERENCES workout_plans(id)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reviewer_id INT,
    reviewee_id INT,
    rating INT,
    comment TEXT,
    FOREIGN KEY (reviewer_id) REFERENCES user_accounts(id),
    UNIQUE (reviewer_id, reviewee_id)
);

CREATE TABLE client_coach (
    client_id INT,
    coach_id INT,
    PRIMARY KEY (client_id, coach_id),
    FOREIGN KEY (client_id) REFERENCES user_accounts(id),
    FOREIGN KEY (coach_id) REFERENCES user_accounts(id)
);

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    coach_id INT,
    appointment_time DATETIME,
    status ENUM('Scheduled', 'Completed', 'Cancelled'),
    FOREIGN KEY (client_id) REFERENCES user_accounts(id),
    FOREIGN KEY (coach_id) REFERENCES user_accounts(id)
);

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    content TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES user_accounts(id),
    FOREIGN KEY (receiver_id) REFERENCES user_accounts(id)
);

CREATE TABLE activity_logger (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    food_calories INT,
    water_intake INT,
    mood VARCHAR(50),
    weight FLOAT,
    FOREIGN KEY (client_id) REFERENCES user_accounts(id)
);

CREATE TABLE permission_control (
    client_id INT,
    coach_id INT,
    metric_type ENUM('Weight', 'Height', 'Progress', 'Appointments', 'Availability'),
    is_allowed BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (client_id) REFERENCES user_accounts(id),
    FOREIGN KEY (coach_id) REFERENCES user_accounts(id)
);

CREATE TABLE goals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    description TEXT,
    deadline DATETIME,
    status ENUM('Pending', 'Completed'),
    FOREIGN KEY (user_id) REFERENCES user_accounts(id)
);

CREATE TABLE availability (
    user_id INT,
    available_time JSON,
    FOREIGN KEY (user_id) REFERENCES user_accounts(id) ON DELETE CASCADE,
    UNIQUE(user_id)
);

CREATE TABLE moods_enum (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE mood_logger (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    mood_id INT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    additional_notes TEXT,
    FOREIGN KEY (client_id) REFERENCES user_accounts(id),
    FOREIGN KEY (mood_id) REFERENCES moods_enum(id)
);