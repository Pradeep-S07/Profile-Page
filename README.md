# Gidy Profile Project (MERN Stack)

This is a full-stack MERN application that replicates the Profile Page UI and functionality of Gidy.ai. It includes a responsive React frontend, a Node.js + Express backend, and MongoDB database integration.

## 🚀 Innovation Features (The "Edge")

In addition to the pixel-perfect clone, I have implemented two key innovation features to enhance user engagement and personalization:

### 1. Interactive Skill Endorsement System
Instead of static tags, the skills section is now interactive. Users (or visitors) can **click on any skill to endorse it**. 
- **Why?**: This adds a social proof layer to the profile, making it more dynamic and valuable for recruiters who want to see validated skills.
- **How it works**: Clicking a skill pill instantly updates the UI (optimistic update) and persists the incremented endorsement count to the MongoDB backend.

### 2. Persistent Dark Mode
A seamless dark mode toggle has been added to the Navbar.
- **Why?**: Developer-focused platforms must have a dark mode for accessibility and user preference during late-night coding sessions.
- **How it works**: The preference is saved in `localStorage`, so the theme remembers your choice even after you refresh or close the browser.

---

## Features
- **Pixel-Perfect UI**: Matches the Gidy.ai profile design exactly.
- **Profile Display**: View profile details, skills, experience, education, certifications, and career vision.
- **Dynamic Data**: All data is fetched from and saved to MongoDB.
- **Responsive Design**: Optimized for mobile and desktop.

## Tech Stack
- **Frontend**: React (Vite), Axios, Lucide React (Icons), CSS Modules/Variables.
- **Backend**: Node.js, Express.js, Mongoose.
- **Database**: MongoDB.

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed locally

### Backend Setup
1. Navigate to backend:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm run dev
   ```
   Server will start on `http://localhost:5000`.

### Frontend Setup
1. Navigate to frontend:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.
