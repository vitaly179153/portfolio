import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-100 bg-[#1F2937]">
        <Header />
        <main className="flex flex-col items-center pt-24">
          <Welcome />
          <ProjectsCarousel />
        </main>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
