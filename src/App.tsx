import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import Heroes from "./pages/Heroes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/heroes/:heroId" element={<Heroes />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
