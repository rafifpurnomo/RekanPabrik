import React from "react";
import logoRekanPabrik from "../assets/img/logoRekanPabrik.png";

function Footer() {
  return (
    <div>
      <footer className="mb-[30px] mt-[100px]">
        <div className="">
          <div className="flex justify-center">
            <hr className="w-[1000px] border-[2px] " />
          </div>
          <div className="flex justify-center">
            <img
              src={logoRekanPabrik}
              alt="logo rekan pabrik"
              className="h-[250px]"
            />
          </div>
          <h1 className="text-center text-[12px] font-semibold">
            © Kelompok kosan KPK 2024. All rights reserved
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
