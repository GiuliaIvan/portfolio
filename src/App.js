// import "./index.css";

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
// import ProjectsPage from "./pages/ProjectsPage";
import About from "./components/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ProjectsSection from "./components/ProjectsSection";
// Navigate;

export default function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/work" element={<ProjectsSection />} />
        <Route exact path="/footer" element={<Footer />} />
        {/* <Route path="*" element={<Navigate to="/footer" />} /> */}
      </Routes>
      <Footer />
    </main>
  );
}