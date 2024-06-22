import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import gooleIcon from "../assets/Google.png";
import logoRekanPabrik from "../assets/logoRekanPabrik.png";
import { Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

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
            />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
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
            <Button className="w-[400px] bg-[#A86108] text-white text-[16px]">
              Log in
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

      <footer className="mb-[30px]">
        <div className="">
          <div className="flex justify-center">
            <hr className="w-[1000px] border-[2px] " />
          </div>
          <div className="flex justify-center">
            <img src={logoRekanPabrik} alt="logo rekan pabrik" className="h-[250px]" />
          </div>
          <h1 className="text-center text-[12px] font-semibold">© Kelompok kosan KPK 2024. All rights reserved</h1>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
