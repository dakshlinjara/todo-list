import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="*" element={<Login />} /> {/* Default to Login Page */}
      </Routes>
    </Router>
  );
}

export default App;
