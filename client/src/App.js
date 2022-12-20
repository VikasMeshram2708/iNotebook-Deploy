import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import NoteState from "./Components/Context/notes/NoteState";
import Notes from "./Components/Notes";

const App = () => {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </NoteState>
  );
};

export default App;
