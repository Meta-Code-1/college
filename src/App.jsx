import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Infrastructure from "./pages/Infrastructure";
import Course from "./pages/Course";
import Highlights from "./pages/Highlights";
import Contact from "./pages/Contact";
import View from "./pages/View";
import ScrollToTop from "./components/ScrollToTop";
import Information from "./pages/Information";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/View" element={<View />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Highlights" element={<Highlights />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Infrastructure" element={<Infrastructure />} />
          <Route path="/Information" element={<Information />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
