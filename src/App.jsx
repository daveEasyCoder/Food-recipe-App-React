
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Details from "../components/Details";
import Favorites from "../components/Favorites";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
