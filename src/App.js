import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WszystkieZajecia from "./components/WszystkieZajecia";
import AktualneZajecia from "./components/AktualneZajecia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WszystkieZajecia />} />
        <Route path="/teraz" element={<AktualneZajecia />} />
      </Routes>
    </Router>
  );
}

export default App;
