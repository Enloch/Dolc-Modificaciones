import useIndicadoresVariaciones from "../../hooks/useIndicadoresVariaciones";
import Menu from "./Menu";
import StyledVisualizadorVariaciones from "./styles";
import IsOpenContext from "../../contexts/IsOpenMenuContext";
import Indicador from "../Indicador";

const VisualizadorVariaciones = ({
  config,
  srcfondo,
  altFondo,
  volumen,
  visRef,
}) => {
  // Desestructurar los valores del hook personalizado useIndicadoresVariaciones
  const {
    actualTitulo,
    capas,
    indicadores,
    selectores,
    seleccionado,
    isOpen,
    closeMenu,
    idMenu,
    changeSeleccionado,
    changeMenu,
    openMenu,
    anotherElement,
    selectedColor,
  } = useIndicadoresVariaciones(config, volumen);

  // Controlador del evento de clic para cerrar el menú
  const handleClick = (e) => {
    if (e.target.className === "indicadores") {
      closeMenu();
    }
  };

  // Renderizar cuando volumen tiene un valor verdadero (no nulo o indefinido)
  if (volumen) {
    return (
      <StyledVisualizadorVariaciones ref={visRef} selectedColor={selectedColor}>
        <img src={srcfondo} alt={altFondo} />
        {capas}
        {anotherElement}
        {capas.length === 1 ? <span>{actualTitulo}</span> : null}

        {/* Renderizar los componentes indicadores e Indicador */}
        <div className='indicadores' onClick={handleClick}>
          <IsOpenContext.Provider value={isOpen}>
            {indicadores}
          </IsOpenContext.Provider>
          <Indicador
            onClick={() => {
              if (isOpen) {
                volumen.cleanListaCambios();
                closeMenu();
              } else {
                openMenu();
                changeMenu(volumen.listaCambios[0]);
              }
            }}
            top='6%'
            left='10%'
            isHidden={volumen.listaCambios.length === 0}
          />
        </div>

        {/* Renderizar el componente Menu */}
        <Menu
          selectores={selectores}
          seleccionado={seleccionado}
          isOpen={isOpen}
          idMenu={idMenu}
          changeSeleccionado={changeSeleccionado}
          volumen={volumen}
        />
      </StyledVisualizadorVariaciones>
    );
  }

  // Renderizar cuando volumen tiene un valor falso (nulo o indefinido)
  return (
    <StyledVisualizadorVariaciones selectedColor={selectedColor}>
      <img src={srcfondo} alt={altFondo} />
      {capas}
      {anotherElement}
      {capas.length === 1 ? <span>{actualTitulo}</span> : null}

      {/* Renderizar solo el componente indicadores */}
      <div className='indicadores' onClick={handleClick}>
        <IsOpenContext.Provider value={isOpen}>
          {indicadores}
        </IsOpenContext.Provider>
      </div>

      {/* Renderizar el componente Menu */}
      <Menu
        selectores={selectores}
        seleccionado={seleccionado}
        isOpen={isOpen}
        idMenu={idMenu}
        changeSeleccionado={changeSeleccionado}
      />
    </StyledVisualizadorVariaciones>
  );
};

export default VisualizadorVariaciones;
