# Fitness App Feature Specification
## User (Actor) Features

### Clients should be able to:
* [sign up for a client account](#sign-up-flow)
* complete [initial onboarding](#initial-onboarding)
* [modify account information](#account-management)
* [add/edit/delete goals](#goals)
* [log personal activities](#activity-logger)
* [view list of coaches](#available-coaches-list)
* [request/remove a Coach](#account-management)
* [create/modify/delete a exercise plan](#exercise-bank) or [select from a list](#exercise-plans-list)
* [set up/accept/deny appointment with coach](#scheduling)
* [message/communicate with coaches](#messaging)
* [update/delete their account](#account-management)
* [access a dashboard with analytics on progress/performance](#data-visualization)
* [rate/review coaches](#ratings/reviews)
### Coaches should be able to:
* [sign up for a coach account](#sign-up-flow)
* [modify account information](#account-management)
* complete [initial onboarding](#initial-onboarding)
* [accept/deny/remove client](#account-management)
* [view assigned client's details](#profiles)
* [create/choose/delete a workout plan](#exercise-bank)
* [assign/modify client workouts](#exercise-bank)
* [set up/accept/deny appointment with client](#scheduling)
* [message/communicate with clients](#messaging)
* view enabled client photos (?)
* [update/delete their account](#account-management)
* access client progress dashboard

## Sign Up Flow
* Personal information
* Email
* Password

## Initial Onboarding
### Client
* Enter body information
	* Weight
	* Height
	* Experience
* [Set goals](#goals-list)
* Set budget per session
* Choose coach from [coach list](#available-coaches-list)
### Coach
* Personal Details
	* Experience
* Cost per session
* Available hours

## Account Management
* Account creation
- Profile modification
- Account deletion (with confirmation)
### Client
* request/remove coach
### Coach
* Remove user/client

## Profiles
Public facing. Users should see these details based on their role (client/coach)
### Client
* Personal Details
* Goals
* Budget
### Coach
* Personal Details
* Specialty
* Session cost
* Experience
* Reviews
* Availability

## Lists
Users should be able to search through lists, apply filters, select item
### Goals List
Possible goals for the user to choose from
* Weight loss
* Muscle
* Train marathon/activity
### Available Coaches List
* View coach profile
* Filter Options
	* Experience ?
	* Budget ?
	* Goals
		* Weight loss
		* Muscle
		* Train activity (marathon, ironman...)
### Exercise Plans List
Populated from items from exercise bank
* Filter Options
	* Muscle group
	* Equipment
	* Difficulty
	* Activity (marathon ,ironman..)

## Exercise Bank
* Preloaded exercise bank (embedded YouTube videos)
* Custom exercise plan created by any user

## Activity Logger
Client only feature
* Food (calorie counter)
* Water intake
* Mood
* Weight
* Appearance

## Messaging
* *

## Scheduling
* *

## Data Visualization
* Graphical representation of numerical data

## Ratings/Reviews
Client only feature

## Note Taking
Client only feature
* Reps