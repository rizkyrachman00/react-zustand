import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import FetchApiPage from "./pages/FetchApiPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/fetch" element={<FetchApiPage />} />
      </Routes>
    </>
  );
}

export default App;
