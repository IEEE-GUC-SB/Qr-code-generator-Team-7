import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
function App() {
  return (
    <div className="App">
      <label>HI</label>
      <BrowserRouter>
        <div className="Pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
