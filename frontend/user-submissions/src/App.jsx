/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./components/FormPage";
import Submissions from "./components/Submissions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/submissions" element={<Submissions />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
