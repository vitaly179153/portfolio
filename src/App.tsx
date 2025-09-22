import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Models from "./components/Models";
import Contact from "./components/Contact";
import ModelDetail from "./components/ModelDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-gray-800 bg-gray-50">
        <Header />
        <main className="flex flex-col items-center">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Models />
                </>
              }
            />
            <Route path="/models/:id" element={<ModelDetail />} />
          </Routes>
        </main>
        <Contact />
      </div>
    </Router>
  );
}

export default App;