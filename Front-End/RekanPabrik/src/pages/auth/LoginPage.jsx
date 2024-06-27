import React, { useState } from "react";
import { Input, user } from "@nextui-org/react";
import { EyeFilledIcon } from "../../assets/svg/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../assets/svg/EyeSlashFilledIcon";
import gooleIcon from "../../assets/img/Google.png";
import { Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import Swal from "sweetalert2";
import { login, userInfo } from "../../utils/Authentification";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (email, password) => {
    if (!email.trim() || !password.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Email or password cannot be empty",
        icon: "error",
        confirmButtonText: "Continue",
      });
      return;
    }

    const token = await login(email, password);
    const userinfo = await userInfo(token);
    const convert = JSON.stringify(userinfo)
    
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("me", convert);
    
    try {
      const user   =  JSON.parse( sessionStorage.getItem("me"));
      if (user.role === "Pelamar") {
        // <Navigate to="/HomePelamar" replace />;
        navigate("/HomePelamar");
      } else if (user.role === "HRD") {
        // <Navigate to="/HomeHRD" replace />;
        navigate("/HomeHRD");
      } else if (user.role === "Admin") {
        // <Navigate to="/HomeAdmin" replace />;
        navigate("/HomeAdmin");
      } else {
        navigate("/HomeUmum");
      }
      
    } catch (error) {
    }
  };

  return (
    <div className="font-poppins">
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="capitalize text-[60px] font-medium text-[#182A36]">
            selamat datang
          </h1>
          <h2 className="font-normal text-[20px] text-[#AD9F9F]">
            Masuk ke akun anda untuk melanjutkan
          </h2>
        </div>
        <div className="mt-[44px]">
          <div className="flex items-center flex-col l ">
            <Input
              type="email"
              variant="bordered"
              label="Email"
              className="w-[400px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className=" w-[400px] mt-[20px]"
            />
          </div>
          <div className="flex justify-end capitalize mt-[10px]">
            <a href="" className="underline font-semibold">
              Lupa Password
            </a>
          </div>
          <div className="mt-7 flex justify-center">
            <Button
              className="w-[400px] bg-[#A86108] text-white text-[16px]"
              onClick={(e) => {
                handleLogin(email, password);
              }}
            >
              Login
            </Button>
          </div>
          <div className="flex items-center justify-center mt-[25px] ">
            <Divider className="my-4 w-[100px] text-[#E6E6E6]" />
            <span className="mx-[10px] text-[#828282] capitalize">
              atau masuk dengan
            </span>
            <Divider className="my-4 w-[100px] text-[#E6E6E6]" />
          </div>
          <div className="mt-7 flex justify-center flex-col items-center">
            <Button
              className="w-[400px] bg-[#EEEEEE] text-black text-[16px] font-medium"
              startContent={<img src={gooleIcon} />}
            >
              Google
            </Button>
            <p className="w-[400px] text-center mt-[30px] text-[#828282]">
              belum mempunyai akun?{" "}
              <span className="text-black font-bold underline capitalize">
                <a href="">buat akun baru</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
