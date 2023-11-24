// import React, { useState } from "react";
// import {
//   Nav,
//   Contenedor2,
//   Bottom,
//   Logo,
//   Bloque1,
//   Bloque2,
//   Bloque3,
//   Links,
//   MenuButton,
//   MobileMenu,
// } from "./styles";
// import LogoIndus from "../../assets/imagenes/logos/IndusMenu.svg";
// import { AnimatePresence } from "framer-motion";
// const NavbarEN = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const variants = {
//     open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 20 } },
//     closed: {
//       opacity: 0,
//       y: "-100%",
//       transition: { type: "spring", stiffness: 80 },
//     },
//   };
//   return (
//     <Nav>
//       <Contenedor2>
//         <Bottom>
//           <Bloque1>
//             <a
//               href='/en'
//               style={{
//                 textDecoration: "none",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Logo src={LogoIndus} alt='Logo' />
//             </a>
//           </Bloque1>
//           <MenuButton onClick={toggleMenu}>☰</MenuButton>
//           {/* Menú para pantallas grandes */}
//           <Bloque2>
//             <Links href='/en/bipod'>
//               <svg
//                 width='5'
//                 height='5'
//                 viewBox='0 0 12 12'
//                 fill='#e42320'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <circle cx='6' cy='6' r='6' fill='#e42320'></circle>
//               </svg>
//               bipod
//             </Links>
//             <Links href='/en/biout'>
//               <svg
//                 width='5'
//                 height='5'
//                 viewBox='0 0 12 12'
//                 fill='#e42320'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <circle cx='6' cy='6' r='6' fill='#e42320'></circle>
//               </svg>
//               biout
//             </Links>
//             <Links>contact</Links>
//             <Links href='/descargas'>downloads</Links>
//           </Bloque2>
//           <Bloque3>
//             <Links href='/'>ES</Links>
//             <Links href='/en'>EN</Links>
//           </Bloque3>
//         </Bottom>
//       </Contenedor2>
//       {/* Menú para móviles */}
//       <AnimatePresence>
//         {isOpen && (
//           <MobileMenu
//             onClick={toggleMenu}
//             initial='closed'
//             animate='open'
//             exit='closed'
//             variants={variants}
//           >
//             <a
//               href='/en'
//               style={{
//                 textDecoration: "none",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 position: "absolute",
//                 top: "5%",
//               }}
//             >
//               <Logo src={LogoIndus} alt='Logo' />
//             </a>

//             <Links href='/en/bipod'>
//               <svg
//                 width='5'
//                 height='5'
//                 viewBox='0 0 12 12'
//                 fill='#e42320'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <circle cx='6' cy='6' r='6' fill='#e42320'></circle>
//               </svg>
//               bipod
//             </Links>
//             <Links href='/en/biout'>
//               <svg
//                 width='5'
//                 height='5'
//                 viewBox='0 0 12 12'
//                 fill='#e42320'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <circle cx='6' cy='6' r='6' fill='#e42320'></circle>
//               </svg>
//               biout
//             </Links>
//             <Links>contact</Links>
//             <Links href='/descargas'>downloads</Links>
//             <div style={{ display: "flex", paddingTop: "30px" }}>
//               <Links href='/'>ES</Links>

//               <Links style={{ marginLeft: "20px" }} href='/en'>
//                 EN
//               </Links>
//             </div>
//           </MobileMenu>
//         )}
//       </AnimatePresence>
//     </Nav>
//   );
// };

// export default NavbarEN;
