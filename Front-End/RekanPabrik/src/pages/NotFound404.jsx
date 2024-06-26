import React from "react";
import notFoundImg from "../assets/notFound404.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/button";

function NotFound404() {
  const navigate = useNavigate();

  const handleBack = () => {
    const token = sessionStorage.getItem("token");
    const user = JSON.parse(sessionStorage.getItem("me"));

    if (token && user && user.role) {
      if (user.role === "Pelamar") {
        navigate("/HomePelamar");
      } else if (user.role === "HRD") {
        navigate("/HomeHRD");
      } else if (user.role === "Admin") {
        navigate("/HomeAdmin");
      } else {
        navigate("/HomeUmum");
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <div className="flex flex-col gap-[30px]">
        <img src={notFoundImg} alt="404 Not Found img" className="w-[400px]" />
        <h1 className="text-[20px] font-semibold">Halaman Tidak Ditemukan</h1>
      </div>
      <Button
        color="primary"
        className="bg-[#A86108] mt-[10px]"
        onClick={handleBack}
      >
        Back
      </Button>
    </div>
  );
}

export default NotFound404;
