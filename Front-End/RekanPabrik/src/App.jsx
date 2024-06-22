import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePelamar from "./pages/HomePelamar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/HomePelamar" element={<HomePelamar/>}/>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
