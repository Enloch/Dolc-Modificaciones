import React, { useRef } from "react";
import MenuLanzadera from "../../components/ListaContenidos/MenuLanzaderaLandingEn";
import useMenuDesplegable from "../../hooks/useMenuDesplegable";
import Loading from "../../components/LoadingFR";
import DolkSystem from "./DolkSystemFr";
import Logo from "../../assets/images/Inicio/logo.png";
import Footer from "../../components/FooterFr";
import Navbar from "../../components/NavBarFr";

const MainFr = () => {
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
      {/* <DolckertTline /> */}
      <Footer />
    </>
  );
};

export default MainFr;
