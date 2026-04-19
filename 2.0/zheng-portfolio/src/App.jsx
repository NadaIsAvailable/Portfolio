import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from './components/Cursor.jsx';
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectTemplate from './pages/ProjectTemplate.jsx';
import Connect from "./pages/Connect.jsx";
import NotFound from './pages/NotFound.jsx';
import NavBar from "./components/NavBar.jsx";
import ScrollToTop from "./utils/ScrollToTop";
import Footer from './components/Footer.jsx';

import './App.css'

function App() {
  return (
    <>
      <Cursor />
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectTemplate />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;