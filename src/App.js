import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Competences from "./pages/Competences/Competences";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
          {/* Déclaration des routes de l'application */}
      <Routes>
          {/* Route principale contenant le composant Navigation */}
        <Route element={<Navigation />}>
           {/* Déclaration des sous-routes de la route principale */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Competences" element={<Competences />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
