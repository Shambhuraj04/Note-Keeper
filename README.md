# Note Keeper App

A simple note-taking application built with React and Vite. This app allows users to add and delete notes dynamically.

## Features
- Add a new note with a title and content.
- View all saved notes.
- Delete individual notes.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern build tool for faster development.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
  
## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/note-keeper-app.git
```

### 2. Install dependencies:

```bash
cd note-keeper-app
npm install
```

### 3. Start the development server:

```bash
npm run dev
```

This will start the app on `http://localhost:3000` (or another available port).

## File Structure

```
note-keeper-app/
├── public/              # Public assets (e.g., index.html)
├── src/                 # Source files for the React app
│   ├── App.jsx          # Main app component
│   ├── Header.jsx       # Header component
│   ├── Footer.jsx       # Footer component
│   ├── CreateArea.jsx   # Component for creating notes
│   ├── Note.jsx         # Individual note component
├── vite.config.js       # Vite configuration
├── package.json         # Project metadata and dependencies
```

## Components

### `App.jsx`

The main application component that handles state and displays other components. It manages the list of notes and provides functions to add and delete notes.

### `Header.jsx`

Displays the title of the app, "Note Keeper".

### `Footer.jsx`

Displays a footer (currently empty).

### `CreateArea.jsx`

Allows users to input and submit new notes. It contains form inputs for the title and content of the note.

### `Note.jsx`

Displays individual notes with their title, content, and a delete button.

## Running the App

1. Clone the repository.
2. Install dependencies (`npm install`).
3. Run the development server (`npm run dev`).
4. Open your browser and go to `http://localhost:3000`.

## Customization

Feel free to customize the styling of the app or extend its functionality. For example:
- Add a search feature.
- Style the app using CSS or styled-components.
- Persist notes in localStorage or integrate a backend API for storing notes.

## Contributing

If you'd like to contribute to this project, feel free to fork the repo and submit a pull request with your improvements.

---
