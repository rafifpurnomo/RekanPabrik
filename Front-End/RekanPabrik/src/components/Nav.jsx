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
      label: "Riwayat lamaran",
      href: "#",
    },
    {
      label: "Untuk Pabrik",
      href: "#",
    },
  ];

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const menuItems_IsLoggin = [
    {
      label: "Profile",
      href: "#",
    },
    {
      label: "Curriculum Vitae",
      href: "#",
    },
    {
      label: "Log Out",
      href: "#",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); 
  const navigate = useNavigate()

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
          <Link color="foreground" href="/">
            <img src={logoRekanPabrik} alt="" className="w-[100px]" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
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
                  {user && user.name} {/* Example: Display user's name */}
                  {user && user.avatar ? ( // Example: Check if user has avatar
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
              itemClasses={{
                base: "gap-4",
              }}
            >
              {menuItems_IsLoggin.map((item, index) => (
              <DropdownItem key={index} description={item.description}>
                <Link href={item.href} className="text-black capitalize">
                  {item.label}
                </Link>
              </DropdownItem>
            ))}
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link className="text-[#A86108] cursor-pointer" onClick={redirectToLogin}>
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
            <Link className="w-full text-black" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
