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
          {/* Menu for large screens */}
          <Bloque2>
            <Links href='/fr/quienes-somos'>À propos de nous</Links>
            <Links href='/fr/contacto'>Contact</Links>
            <Links href='/fr/aviso-legal'>Avis légal</Links>
            <Links href='/fr/politica-privacidad'>Politique de confidentialité</Links>
          </Bloque2>
          <Bloque3>
            <Links href='/'>ES</Links>
            <Links href='/en'>EN</Links>
            <Links href='/fr'>FR</Links>
          </Bloque3>
        </Bottom>
      </Contenedor2>
      {/* Menu for mobile devices */}
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

            <Links href='/fr/quienes-somos'>À propos de nous</Links>
            <Links href='/fr/contacto'>Contact</Links>
            <Links href='/fr/aviso-legal'>Avis légal</Links>
            <Links href='/fr/politica-privacidad'>Politique de confidentialité</Links>
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
