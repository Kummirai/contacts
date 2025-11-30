# Professional Contact List - Fullstack Application

A modern fullstack contact management application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to manage their professional network with ease.

![Contact Manager](./frontend/public/homepage.png)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Screenshots](#screenshots)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)

## ✨ Features

- **Contact Management**: Create, read, update, and delete contacts
- **Category Organization**: Organize contacts by work categories
- **Responsive Design**: Mobile-friendly interface
- **Image Support**: Add profile pictures via URL
- **Real-time Messages**: User feedback for all actions
- **Professional UI**: Clean and modern design

## 🛠 Tech Stack

### Frontend

- **React** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM

## 📁 Project Structure

```
contact-manager/
├── client/ # React frontend
│ ├── components/
│ │ ├── ContactCard.jsx
│ │ ├── Message.jsx
│ │ └── SelectCategory.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Contacts.jsx
│ │ └── AddContact.jsx
│ └── ...
├── server/ # Express backend
│ ├── controllers/
│ │ ├── contactsController.js
│ │ └── categoriesController.js
│ ├── routes/
│ │ ├── contactsRoute.js
│ │ └── categoryRoute.js
│ ├── models/
│ │ └── contactModel.js
│ └── ...
└── README.md
```

text

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:

```bash
cd server
Install dependencies:

bash
npm install
Create a .env file in the server root:

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contactmanager
NODE_ENV=development
Start the server:

bash
npm run dev
Frontend Setup
Navigate to the client directory:

bash
cd client
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
The application will be available at:

Frontend: http://localhost:3000

Backend API: http://localhost:5000
```

### 🔌API Endpoints

Contacts

- Method Endpoint Description
- GET /api/contacts Get all contacts
- POST /api/contacts Create a new contact
- GET /api/contacts/:id Get contact by ID
- PUT /api/contacts/:id Update contact by ID
- DELETE /api/contacts/:id Delete contact by ID

### Categories

- Method Endpoint Description
- GET /api/categories Get all categories
- GET /api/categories/:category Get contacts by category
  🎨 Frontend Components
  ![Home.jsx](https://plus.unsplash.com/premium_photo-1681967056414?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D)

- Landing page with professional design and call-to-action.

### Contacts.jsx

- Main contacts display page with grid layout and category filtering.

### AddContact.jsx

- Form for creating and updating contact information with validation.

### ContactCard.jsx

- Individual contact card component displaying contact details.

### 📸 Screenshots

![Home Page](https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D)

![Contact Management](https://images.unsplash.com/photo-1688372296394-f8c21c15ed65?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D)

```
🔧 Environment Variables
Backend (.env)
env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret
📜 Scripts
Backend Scripts
json
{
"start": "node server.js",
"dev": "nodemon server.js"
}
Frontend Scripts
json
{
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test"
}
🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License.

```

```

```
