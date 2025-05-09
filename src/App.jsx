import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="main-wrapper stack:l">
        <div className="mx-width underlay">
          <div className="grid:2 g-wrapper">
            <div className="grid:2">
              <div></div>
              <div></div>
            </div>
            <div className="grid:2">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
