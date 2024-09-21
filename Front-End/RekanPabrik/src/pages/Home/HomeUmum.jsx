import React from "react";
import bgImg from "../../assets/img/iconBgGreen.png";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../assets/svg/SearchIcon";
import PekerjaanHome from "../../components/PekerjaanHome";

function HomeUmum() {
  return (
    <div>
      <div className="flex justify-center flex-col bg-[#AFD198] h-[300px] w-[100%] bg-hero-pattern bg-cover bg-no-repeat bg-fixed">
        <div className="gap-[10px] flex items-end justify-center">
          <div className="flex flex-col gap-[10px] capitalize">
            <p className="font-semibold text-[20px]">cari pekerjaan, lokasi, dan perusahaan</p>
            <Input
              className="w-[900px]"
              size="lg"
              placeholder="Type to search..."
              startContent={<SearchIcon size={18} />}
              type="search"
            />
          </div>
          <div>
            <Button color="primary" size="lg" className=" bg-[#A86108] capitalize">
              cari
            </Button>
          </div>
        </div>
      </div>
      <div>
        <PekerjaanHome/>
      </div>
    </div>
  );
}

export default HomeUmum;
