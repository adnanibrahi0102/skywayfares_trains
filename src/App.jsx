import Home from "./pages/Home";
import TurbulencePage from "./pages/TurbulencePage";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turbulence" element={<TurbulencePage />} />
        </Routes>
      </Router>
    );
 
}

export default App;
