# **Agent Management App - Frontend**
Welcome to the Agent Management App frontend! This is a React-based frontend using Next.js, TypeScript, Tailwind CSS, and Shadcn UI. It provides a clean and responsive interface to manage agents, upload CSV files, distribute tasks, and view the assigned tasks.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Axios for API Requests
- React Hooks for State Management

## Features
- Create and Manage Agents
- Upload CSV for Task Distribution
- View Agent Lists
- View Distributed Tasks
- Responsive UI with Tailwind CSS

## Prerequisites
### Ensure you have the following installed before proceeding:
- Node.js (>= 20.x)
- npm
- Git

## Installation
### Clone the Repository
First, clone the frontend repo from GitHub:

- git clone https://github.com/mangaBhukya/agent-management-frontend.git
- cd agent-management-frontend

### Install Dependencies
Use the following command to install all the required packages:
- npm install

### Initialize Shadcn UI
Shadcn UI will help with ready-made components. Run:
- npx shadcn@latest init

Add the required components:
- npx shadcn@latest add button input card table

###  Start the Application
Once everything is installed and configured, run the app:
- npm run dev
- The app will be available at:
http://localhost:3000

## Usage Guide
### Home Page
- Access the homepage at /.
You’ll see navigation links to Create Agent, View Agents, Upload CSV, and View Tasks.

### Create Agent
- Go to /createAgent.
Fill out the form with name, email, phone number, and password.
Click Submit to add the agent.

### View Agents
- Visit /agents to see a list of all agents.
Agents are displayed with their details.

### Upload CSV
- Navigate to /upload.
Upload a .csv, .xlsx, or .xls file with columns for FirstName, Phone, and Notes.
After validation, the tasks will be distributed equally among the agents.

### View Tasks
- Go to /tasks to view the distributed tasks for each agent.
Tasks are displayed in a clean table format.


Make sure the **backend** is running on http://localhost:5000/api.
