# Submissions Web Application

This project is a simple web application that allows users to submit and view data through a form.  
It demonstrates both front-end and back-end skills with real-time capabilities.

# Features

## Frontend

- A responsive user interface built with React, Vite and Bootstrap.
- A form for users to submit their details:
  - Name
  - Email
  - Date of Birth
  - Department (dropdown)
  - Comments (text area)
- A submissions page to display all user submissions in a table.
- Real-time updates on new submissions without page refresh.
- Navigation with links to the form and submissions.
- Update and delete functionality for managing submissions.

## Backend

- Node.js with Express for the server-side logic.
- RESTful API endpoints for CRUD operations:
  - Create,
  - Read,
  - Update, and
  - Delete entries.
- Input validation to ensure data integrity.
- WebSocket server for real-time communication.
- SQLite database using Sequelize ORM for persistence.

## Getting Started

Follow the steps below to set up the application on your local machine.

### Prerequisites

- Node.js (v14 or later)
- SQLite (You can as well use one of your preference)
- Package Manager: npm or yarn

### Installation

#### Clone the Repository

```bash
- git clone https://github.com/ASLawan/submissions-app.git
- cd submissions-app
```

#### Install Dependencies

Navigate to both the **backend** and **frontend** directories and install dependencies:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

#### Set Up the Database

In the **backend** directory, initialize the SQLite database using Sequelize:

```bash
- npx sequelize-cli db:migrate
```

#### Start the Backend Server (npm run dev)

```bash
cd backend
npm run dev
```

#### Start the Frontend Server

```bash

cd ../frontend/user-submissions
npm run dev
```

#### Access the Application

Open your browser and navigate to http://localhost:5173.

## API Endpoints

The backend exposes the following endpoints:

### Submissions

```bash
Method	Endpoint	        Description
POST	/submissions	    Add a new entry.
GET	    /submissions	    Retrieve all entries.
PUT	    /submissions/:id	Update an entry by ID.
DELETE	/submissions/:id	Delete an entry by ID.
```

### Real-Time Notifications

The WebSocket server is set up on port 5001.  
Clients connected to the WebSocket server will receive real-time updates whenever a new entry is added.

## Project Structure

### Backend

- models/: Sequelize models for the database.
- routes/: API routes.
- config/: Database configuration.
- controllers/: Async functions for the different API routes
- server.js: Main server file.

### Frontend

- src/components/: Reusable components (e.g., Header, Form, Submissions Table).
- src/pages/: Main pages (Form, Submissions).
- src/api/: API interaction layer.
- src/App.js: Entry point for the React app.

### Testing

#### Backend Testing

Use a tool like Postman, curl or vscode restClient to test API endpoints.
Example:

```bash
curl -X POST http://localhost:3000/entries \
     -H "Content-Type: application/json" \
     -d '{"name":"John Doe","email":"john@example.com","dateOfBirth":"1990-01-01","department":"HR","comments":"Test comment"}'
```

#### Frontend Testing

- Verify responsiveness by testing the app on different devices(this was ensured by using bootstrap alongside custom css).
- Interact with the form, submissions, and real-time updates.

### Future Improvements

- Add user authentication for secure access.
- Implement filtering and sorting on the submissions table.
- Add automated tests using Jest for frontend and backend.
- Limit viewing, editing and deletion of all submissions to admins
- Ensure a user can only work on their own submission

### Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

### License

This project is licensed under the MIT License. See the LICENSE file for details.
