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
    menuItems[
      window.location.hash.split("#")[1] !== undefined
        ? window.location.hash.split("#")[1].toUpperCase()
        : "HOME"
    ]
  );

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">DEC</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex"
        justify="center"
      >
        {/* generamos los items del menu */}
        {Object.entries(menuItems).map(([label, path]) => (
          <NavbarItem
            key={label}
            // isActive={activeItem === path}
          >
            <Link
              href={path}
              className={
                activeItem === path
                  ? "text-center text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                  : "text-inherit text-xl"
              }
              onClick={() => setActiveItem(path)}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarMenuItem>
          {theme === "dark" ? (
            <Link
              color="foreground"
              onClick={() => setTheme("light")}
            >
              <SunIcon />
            </Link>
          ) : (
            <Link
              color="foreground"
              onClick={() => setTheme("dark")}
            >
              <MoonIcon />
            </Link>
          )}
        </NavbarMenuItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent">
        {Object.entries(menuItems).map(([label, path]) => (
          <NavbarMenuItem key={label}>
            <Link
              href={path}
              className={
                activeItem === path
                  ? "text-center text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                  : "text-slate-300 text-xl"
              }
              onClick={() => setActiveItem(path)}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          {theme === "dark" ? (
            <Link
              color="foreground"
              onClick={() => setTheme("light")}
            >
              <SunIcon />
            </Link>
          ) : (
            <Link
              color="foreground"
              onClick={() => setTheme("dark")}
            >
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
  setTheme: PropTypes.func,
};

export default NavBarHome;
