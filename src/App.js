import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Assets from "./pages/Assets.js";
import Landing from "./pages/Landing.js";
import Tracker from "./pages/Tracker.js";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/assets" element={<Assets />}></Route>
          <Route path="/tracker" element={<Tracker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
