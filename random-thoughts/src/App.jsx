import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Favorites2 from "./pages/Favorites2";
import Settings2 from "./pages/Settings2";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites2 />} />
        <Route path="/settings" element={<Settings2 />} />
      </Routes>
    </Router>
  );
};

export default App;
