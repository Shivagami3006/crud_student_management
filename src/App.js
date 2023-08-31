import React from "react";
import Home from "./Home";
import Create from "./create";
import Edit from "./edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:myid" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
