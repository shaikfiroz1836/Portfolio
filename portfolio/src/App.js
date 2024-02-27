import React from "react";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {

  return (
    
    
    <div className="App">
      <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
