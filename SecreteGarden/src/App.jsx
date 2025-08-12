import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import PlantsView from "./pages/plants/PlantsView";
import Macetas from "./pages/macetas/Macetas";
import Contacto from "./pages/contacto/Contacto";
import DigitalGarden from "./pages/gardenSimulator/DigitalGarden";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantas" element={<PlantsView />} />
        <Route path="/Macetas" element={<Macetas />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/JardinDigital" element={<DigitalGarden />} />
      </Routes>
    </div>
  );
}
