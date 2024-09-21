import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import logoRekanPabrik from "../assets/img/logoRekanPabrik.png";
import defaultAvatar from "../assets/img/defaultUserPict.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const dropdownItems = [
    {
      label: "Cari Pekerjaan",
      href: "#",
    },
    {
      label: "jelajahi perusahaan",
      href: "#",
    },
    {
      label: "panduan berkarir",
      href: "#",
    },
    {
      label: "Untuk perusahaan",
      href: "#",
    },
  ];

  const menuItems = [
    {
      label: "Cari Pekerjaan",
      href: "#",
    },
    {
      label: "jelajahi perusahaan",
      href: "#",
    },
    {
      label: "panduan berkarir",
      href: "#",
    },
    {
      label: "Untuk perusahaan",
      href: "#",
    },
    {
      label: "tentang kami",
      href: "#",
    },
    {
      label: "Login atau register",
      href: "/loginPage",
    },
  ];

  const menuItems_asHRD = [
    {
      label: "Profil",
      href: "#",
    },
    {
      label: "Log Out",
      href: "#",
    },
  ];

  const dropdown_asHRD = [
    {
      label: "buat lowongan Pekerjaan",
      href: "#",
    },
    {
      label: "notifikasi",
      href: "#",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const storedUser = sessionStorage.getItem("me");
    if (token && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const redirectToLogin = () => {
    navigate("/loginPage");
  };

  const redirectToSignUp = () => {
    navigate("#");
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="max-sm:hidden">
          {isLoggedIn ? (
            <>
              {user && user.role === "HRD" ? (
                <>
                  <Link color="foreground" href="/HomeHRD">
                    <img src={logoRekanPabrik} alt="" className="w-[100px]" />
                  </Link>
                </>
              ) : user && user.role === "ADMIN" ? (
                <>
                  <Link color="foreground" href="/HomeAdmin">
                    <img src={logoRekanPabrik} alt="" className="w-[100px]" />
                  </Link>
                </>
              ) : user && user.role === "PELAMAR" ? (
                <>
                  <Link color="foreground" href="/HomePelamar">
                    <img src={logoRekanPabrik} alt="" className="w-[100px]" />
                  </Link>
                </>
              ) : (
                <DropdownItem key="logout" onClick={handleLogout}>
                  Log Out
                </DropdownItem>
              )}
            </>
          ) : (
            <>
              <Link color="foreground" href="/">
                <img src={logoRekanPabrik} alt="" className="w-[100px]" />
              </Link>
            </>
          )}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {isLoggedIn ? (
          <>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[16px]"
                    radius="sm"
                    variant="light"
                  >
                    Pekerjaan
                    <Icon icon="entypo:chevron-down" />
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {dropdown_asHRD.map((item, index) => (
                  <DropdownItem key={index} description={item.description}>
                    <Link href={item.href} className={`text-black capitalize`}>
                      {item.label}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <NavbarItem>
              <Link color="foreground" href="#" className="capitalize">
                profil perusahaan
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="capitalize">
                Tentang kami
              </Link>
            </NavbarItem>
          </>
        ) : (
          <>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[16px]"
                    radius="sm"
                    variant="light"
                  >
                    Pekerjaan
                    <Icon icon="entypo:chevron-down" />
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {dropdownItems.map((item, index) => (
                  <DropdownItem key={index} description={item.description}>
                    <Link href={item.href} className="text-black capitalize">
                      {item.label}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <NavbarItem>
              <Link color="foreground" href="#" className="capitalize">
                lihat profil
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="capitalize">
                tentang kami
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarContent justify="end" className="max-sm:hidden">
        {isLoggedIn ? (
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[16px]"
                  radius="sm"
                  variant="light"
                >
                  {user && user.name}
                  {user && user.avatar ? (
                    <div>
                      <img
                        src={user.avatar}
                        alt="Profile"
                        className="rounded-full h-8 w-8 ml-2"
                      />
                      <p>{user.nama}</p>
                    </div>
                  ) : (
                    <div className="flex flex-row-reverse items-center">
                      <img
                        src={defaultAvatar}
                        alt="Default"
                        className="rounded-full h-8 w-8 ml-2"
                      />
                      <p>{user.nama_depan + " " + user.nama_belakang}</p>
                    </div>
                  )}
                  <Icon icon="entypo:chevron-down" />
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="User menu"
              className="w-[240px]"
              itemClasses={{ base: "gap-4" }}
            >
              {user && user.role === "HRD" ? (
                menuItems_asHRD.map((item, index) => (
                  <DropdownItem key={index} description={item.description}>
                    <Link
                      href={item.href}
                      className={`text-black capitalize ${
                        item.label === "Log Out" ? "text-red-700" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </DropdownItem>
                ))
              ) : user && user.role === "ADMIN" ? (
                menuItems_asAdmin.map((item, index) => (
                  <DropdownItem key={index} description={item.description}>
                    <Link href={item.href} className="text-black capitalize">
                      {item.label}
                    </Link>
                  </DropdownItem>
                ))
              ) : user && user.role === "PELAMAR" ? (
                menuItems_asPelamar.map((item, index) => (
                  <DropdownItem key={index} description={item.description}>
                    <Link href={item.href} className="text-black capitalize">
                      {item.label}
                    </Link>
                  </DropdownItem>
                ))
              ) : (
                <DropdownItem key="logout" onClick={handleLogout}>
                  Log Out
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link
                className="text-[#A86108] cursor-pointer"
                onClick={redirectToLogin}
              >
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                onClick={redirectToSignUp}
                color="primary"
                href="#"
                variant="flat"
                className="bg-[#A86108] text-white"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={item.href}
              className={`w-full text-black ${
                item.label === "Login atau register" ? "text-[#A86108]" : ""
              }`}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
