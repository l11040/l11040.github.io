import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
