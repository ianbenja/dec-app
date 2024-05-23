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

const NavBarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    Home: "#",
    Ponderación: "#ponderacion",
    Moora: "#moora",
    Topsis: "#topsis",
    Documentación: "#documentacion",
    Contacto: "#contacto",
  };
  const [activeItem, setActiveItem] = useState(menuItems.Home);

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

      <NavbarContent className="hidden sm:flex" justify="center">
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
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarHome;
