'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";


export const NavBar = () => {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    if(theme == 'dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Sobre",
    "Contato",
  ];


  return (
    <Navbar
      className=""
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fechar' : 'Abrir'}
          className="sm:hidden"
        />
      </NavbarContent>




      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Sobre
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>


        
        <Switch
            className=""
            defaultSelected
            size="lg"
            color="default"
            onClick={handleTheme}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <CiLight className={className} />
              ) : (
                <MdDarkMode className={className} />
              )
            }
          >
        </Switch>
      


      <NavbarMenu className="">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}
