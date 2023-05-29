import React from "react";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
