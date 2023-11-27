import React, { useState } from "react";
import {
  Nav,
  Contenedor2,
  Bottom,
  Logo,
  Bloque1,
  Bloque2,
  Links,
  MenuButton,
  MobileMenu,
  Bloque3,
} from "./styles";
import LogoDolcker from "../../assets/icons/Introduccion/logo.svg";
// import LogoIndus from "../../assets/imagenes/logos/IndusMenu.svg";
import { AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const variants = {
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 20 } },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { type: "spring", stiffness: 80 },
    },
  };
  return (
    <Nav>
      <Contenedor2>
        <Bottom>
          <Bloque1>
            <a
              href='/'
              style={{
                textDecoration: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Logo
                src={LogoDolcker}
                alt='Logo'
                style={{ filter: "invert(1)" }}
              />
            </a>
          </Bloque1>
          <MenuButton onClick={toggleMenu}>☰</MenuButton>
          {/* Menú para pantallas grandes */}
          <Bloque2>
            <Links href='/quienes-somos'>Quienes somos</Links>
            <Links href='/contacto'>Contacto</Links>
            <Links href='/aviso-legal'>Legal</Links>
            <Links href='/politica-privacidad'>Privacidad</Links>
          </Bloque2>
          <Bloque3>
            <Links href='/'>ES</Links>
            <Links href='/en'>EN</Links>
            <Links href='/fr'>FR</Links>
          </Bloque3>
        </Bottom>
      </Contenedor2>
      {/* Menú para móviles */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            onClick={toggleMenu}
            initial='closed'
            animate='open'
            exit='closed'
            variants={variants}
          >
            <a
              href='/'
              style={{
                textDecoration: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                position: "absolute",
                top: "5%",
              }}
            >
              <Logo
                src={LogoDolcker}
                alt='Logo'
                style={{ filter: "invert(1)" }}
              />
            </a>

            <Links href='/quienes-somos'>Quienes somos</Links>
            <Links href='/contacto'>Contacto</Links>
            <Links href='/aviso-legal'>Legal</Links>
            <Links href='/politica-privacidad'>Privacidad</Links>
            <div style={{ display: "flex", paddingTop: "30px" }}>
              <Links href='/'>ES</Links>

              <Links style={{ marginLeft: "20px" }} href='/en'>
                EN
              </Links>
              <Links style={{ marginLeft: "40px" }} href='/FR'>
                FR
              </Links>
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
