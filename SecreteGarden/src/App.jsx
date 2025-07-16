import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import PlantsView from "./pages/plants/PlantsView";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantas" element={<PlantsView />} />
      </Routes>
    </div>
  );
}
