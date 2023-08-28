import React, { useRef } from "react";
import MenuLanzadera from "../components/ListaContenidos/MenuLanzaderaLanding";
import useMenuDesplegable from "../hooks/useMenuDesplegable";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import DolkSystem from "./landing/DolkSystem";
import Navbar from "../components/NavBar";
import Logo from "../assets/images/Inicio/logo.png";
import DolckerTline from "./landing/TLine";
import G10 from "./landing/G10";

const Main = () => {
  const dolckerSystemRef = useRef(null);
  // const { menuDesplegable, btnIndice } = useMenuDesplegable(
  //     MenuLanzadera,
  //     <img src={Logo} style={{ scale: '0.5', filter: 'invert(1)' }} />
  // )

  const handleButtonClick = () => {
    dolckerSystemRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* {menuDesplegable}
            {btnIndice} */}
      <Navbar />
      <Loading onButtonClick={handleButtonClick} />
      <div ref={dolckerSystemRef}>
        <DolkSystem id='dolcker-system' />
      </div>
      {/* <DolckerTline /> */}
      <Footer />
    </>
  );
};

export default Main;
