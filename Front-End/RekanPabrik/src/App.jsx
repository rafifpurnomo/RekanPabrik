import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePelamar from "./pages/Home/HomePelamar";
import HomeHRD from "./pages/Home/HomeHRD";
import HomeUmum from "./pages/Home/HomeUmum";
import HomeAdmin from "./pages/Home/HomeAdmin";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/404NotFound" element={<NotFound404 />} />
        <Route path="/HomeUmum" element={<HomeUmum />} />

        <Route element={<ProtectedRoute allowedRoles={["Pelamar"]} />}>
          <Route path="/HomePelamar" element={<HomePelamar />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["HRD"]} />}>
          <Route path="/HomeHRD" element={<HomeHRD />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
          <Route path="/HomeAdmin" element={<HomeAdmin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
