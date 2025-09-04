import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TeamContact from "./components/TeamContact";
import TeamHero from "./components/TeamHero";
import TeamProjects from "./components/TeamProjects";
import TeamSection from "./components/TeamSection";
import Portafolio_Edgard from "./pages/Portafolio_Edgard";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/Portafolio_Edgard" element={<Portafolio_Edgard />} />
        <Route
          path="/"
          element={
            <>
              <TeamHero />
              <TeamSection />
              <TeamProjects />
              <TeamContact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
