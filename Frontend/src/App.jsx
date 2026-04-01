import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contactus from "./contactus/Contactus";


function App() {
  return (
    /* Change bg-white to bg-base-100 and ensure min-h-screen covers everything */
    <div className="bg-base-100 text-base-content min-h-screen transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contactus />}/>
      </Routes>
    </div>
  );
}

export default App;