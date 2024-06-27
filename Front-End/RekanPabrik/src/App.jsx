import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePelamar from "./pages/Home/HomePelamar";
import HomeHRD from "./pages/Home/HomeHRD";
import HomeUmum from "./pages/Home/HomeUmum";
import HomeAdmin from "./pages/Home/HomeAdmin";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import NotFound404 from "./pages/NotFound404";
import Nav from "./components/Nav";

function App() {
  const [loggin, setLoggin] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const storedUser = sessionStorage.getItem("me");

    if (token && storedUser) {
      setLoggin(true);
    }
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeUmum />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/404NotFound" element={<NotFound404 />} />

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
