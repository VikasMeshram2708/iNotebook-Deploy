import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import NoteState from "./Components/Context/notes/NoteState";
import Notes from "./Components/Notes";
import SignUp from "./Components/Forms/SignUp";
import SignIn from "./Components/Forms/SignIn";

const App = () => {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
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
