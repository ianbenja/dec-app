import PropTypes from "prop-types";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import Logo from "./iconos/logo.jsx";
import SunIcon from "./iconos/SunIcon.jsx";
import MoonIcon from "./iconos/MoonIcon.jsx";

const NavBarHome = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    HOME: "#",
    PONDERACION: "#ponderacion",
    MOORA: "#moora",
    TOPSIS: "#topsis",
    DOCUMENTACION: "#documentacion",
    CONTACTO: "#contacto",
  };

  const [activeItem, setActiveItem] = useState(
    menuItems[window.location.hash.split("#")[1]?.toUpperCase() ?? "HOME"]
  );

  const handleMenuItemClick = (path) => {
    setActiveItem(path);
    setIsMenuOpen(false); // Cierra el menú al seleccionar un ítem
  };

  if (localStorage.getItem("theme")) {
    let html = document.querySelector("html")
    html.classList.remove("dark", "light");
    html.classList.add(localStorage.getItem("theme"))
  }

  const changeTheme = (color) => {
    setTheme(color)
    let html = document.querySelector("html")
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      html.classList.add("light")
    }
    else {
      html.classList.remove("light");
      html.classList.add("dark")
    }
    localStorage.setItem("theme", color)
  }

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">DEC</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="center">
        {/* Generamos los ítems del menú */}
        {Object.entries(menuItems).map(([label, path]) => (
          <NavbarItem key={label}>
            <Link
              href={path}
              className={
                activeItem === path
                  ? "text-center text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                  : "text-inherit text-xl"
              }
              onClick={() => handleMenuItemClick(path)}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          {theme === "dark" ? (
            <Link color="foreground" onClick={() => changeTheme("light")}>
              <SunIcon />
            </Link>
          ) : (
            <Link color="foreground" onClick={() => changeTheme("dark")}>
              <MoonIcon />
            </Link>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent">
        {Object.entries(menuItems).map(([label, path]) => (
          <NavbarMenuItem key={label}>
            <Link
              href={path}
              className={
                activeItem === path
                  ? "text-center text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                  : "text-xl text-slate-600 dark:text-slate-300"
              }
              onClick={() => handleMenuItemClick(path)}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          {theme === "dark" ? (
            <Link color="foreground" onClick={() => changeTheme("light")}>
              <SunIcon />
            </Link>
          ) : (
            <Link color="foreground" onClick={() => changeTheme("dark")}>
              <MoonIcon />
            </Link>
          )}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

NavBarHome.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
};

export default NavBarHome;
