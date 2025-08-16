import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import PlantsView from "./pages/plants/PlantsView";
import Macetas from "./pages/macetas/Macetas";
import Contacto from "./pages/contacto/Contacto";
import DigitalGarden from "./pages/gardenSimulator/DigitalGarden";
import ScrollToTop from "./componets/ScrollTop";

export default function App() {
  return (
    // <div>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/plantas" element={<PlantsView />} />
    //     <Route path="/Macetas" element={<Macetas />} />
    //     <Route path="/Contacto" element={<Contacto />} />
    //     <Route path="/JardinDigital" element={<DigitalGarden />} />
    //   </Routes>
    // </div>

    <>
      {/* aquí lo agregas */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantas" element={<PlantsView />} />
        <Route path="/Macetas" element={<Macetas />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/JardinDigital" element={<DigitalGarden />} />
      </Routes>
    </>
  );
}
