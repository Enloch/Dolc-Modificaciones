import { useEffect, useRef, useState } from "react";
import StyledMenu from "./styles";
import izq from "../../../assets/icons/desplIzq.svg";
import der from "../../../assets/icons/desplDer.svg";
import { css } from "styled-components";
import StyledSelector from "../Selector/styles";

const Menu = ({
  isOpen,
  seleccionado,
  selectores,
  idMenu,
  changeSeleccionado,
  volumen,
}) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const menuContainerRef = useRef();

  useEffect(() => {
    // Verificar si el ancho del contenido del menú excede el ancho del contenedor
    if (
      menuContainerRef.current.scrollWidth >
      menuContainerRef.current.clientWidth
    ) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  }, [selectores, menuContainerRef, isOverflow]);

  // Estilos condicionales del menú basados en el estado de isOpen y seleccionado
  const menuStyles = css`
    opacity: ${isOpen ? "1" : "0"};
    visibility: ${isOpen ? "visible" : "hidden"};

    ${StyledSelector}:nth-child(${seleccionado + 1}) {
      span {
        font-weight: bold;
      }
    }
  `;

  const handleClick = ({ target }) => {
    const children = menuContainerRef.current.children;

    let checker = target.tagName !== "DIV" ? target.parentNode : target;

    for (let i = 0; i < children.length; i++) {
      if (checker === children[i]) {
        if (volumen) {
          // Actualizar el contenido de los elementos según la selección en el menú de volumen
          for (const cambio of volumen.listaCambios) {
            volumen.idsMenu[cambio].plano.current.src =
              volumen.idsMenu[cambio].listaSelector[i];
          }
          volumen.cleanListaCambios();
          break;
        } else {
          // Cambiar la opción seleccionada en el menú
          changeSeleccionado(i, idMenu);
        }
      }
    }
  };

  return (
    <StyledMenu moreStyles={menuStyles}>
      {isOverflow ? (
        // Botón para desplazarse hacia la izquierda
        <img
          src={izq}
          alt='Desplazar izquierda'
          onClick={() => {
            menuContainerRef.current.scrollBy({
              left: -menuContainerRef.current.offsetWidth,
            });
          }}
        />
      ) : (
        // Imagen transparente para desplazarse hacia la izquierda cuando no hay desbordamiento
        <img
          src={izq}
          alt='Desplazar izquierda'
          style={{ opacity: 0, cursor: "auto" }}
        />
      )}
      <div
        className='menu-container'
        ref={menuContainerRef}
        onClick={handleClick}
      >
        {selectores}
      </div>
      {isOverflow ? (
        // Botón para desplazarse hacia la derecha
        <img
          src={der}
          alt='Desplazar derecha'
          onClick={() => {
            menuContainerRef.current.scrollBy({
              left: menuContainerRef.current.offsetWidth,
            });
          }}
        />
      ) : (
        // Imagen transparente para desplazarse hacia la derecha cuando no hay desbordamiento
        <img
          src={der}
          alt='Desplazar derecha'
          style={{ opacity: 0, cursor: "auto" }}
        />
      )}
    </StyledMenu>
  );
};

export default Menu;
