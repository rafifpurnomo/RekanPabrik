import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  ButtonGroup,
  Chip,
} from "@nextui-org/react";
import testFoto from "../assets/img/logoRekanPabrik.png";
import dataPekerjaan from "../utils/dataPekerjaan";
import defUserPict from "../assets/img/defaultUserPict.png";
// const [isLoggedIn, setIsLoggedIn] = useState(false);
const visibleJobs = dataPekerjaan.slice(0, 3);

// useEffect(() => {
//   const token = sessionStorage.getItem("token");
//   const storedUser = sessionStorage.getItem("me");
//   if (token && storedUser) {
//     setIsLoggedIn(true);
//     setUser(JSON.parse(storedUser));
//   }
// }, []);

const getStatusClass = (status) => {
  switch (status) {
    case "Diterima":
      return "bg-green-500 text-white";
    case "Ditolak":
      return "bg-red-500 text-white";
    case "Dalam Proses":
      return "bg-yellow-500 text-black";
    default:
      return "bg-gray-500 text-white";
  }
};

function PekerjaanHome() {
  return (
    <div>
      <div className="capitalize flex mt-[20px] gap-[70px] justify-center">
        <div className="flex flex-col gap-[20px]">
          <p className="text-[30px] font-normal ">riwayat lamaran</p>
          {visibleJobs.length > 0 ? (
            visibleJobs.map((data, index) => {
              return (
                <div key={index}>
                  <Link href="#">
                    <Card className="w-[300px]">
                      <CardHeader className="flex gap-3 justify-between ">
                        <h1 className="text-md font-semibold">
                          {data.namaPerusahaan}
                        </h1>
                        <Chip className={getStatusClass(data.statusLamaran)}>
                          {data.statusLamaran}
                        </Chip>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <div className="flex flex-col">
                          <p className="text-md text-default-500">
                            {data.posisi}
                          </p>
                        </div>
                      </CardBody>
                      <CardFooter></CardFooter>
                    </Card>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="w-[300px]">
              <p className="opacity-[50%]">
                anda belum melakukan lamaran, ayo temukan kesempatan anda
              </p>
            </div>
          )}
          {dataPekerjaan.length > 3 && (
            <div className="flex justify-center">
              <Link href="#">
                <Button
                  color="primary"
                  className="bg-[#A86108] capitalize w-[100%] h-[50px] text-[16px]"
                >
                  lihat riwayat lamaran (
                  <span className="font-semibold">{dataPekerjaan.length}</span>)
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div>
          <p className="text-[30px] font-normal">pekerjaan favorite</p>
        </div>
        <div>
          <p className="text-[30px] font-normal">perusahaan favorite</p>
        </div>
      </div>
    </div>
  );
}

export default PekerjaanHome;
