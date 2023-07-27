import React, { useState } from "react";
import { SketchPicker } from "react-color";
import {
  MiniaturasColor,
  SelectoresFormato,
  SelectoresModular,
  Metales,
  Maderas,
  PerfilesMini,
  RALS,
} from "./miniaturas";
import {
  AppMenu,
  MenuCirculos,
  TituloMenu,
  ImgCirculos,
  ImgRectangulos,
  TextTextura,
  TextureContainer,
  TextureContainerRectangulo,
  ContenedorCirculos,
  ContenedorRectangulo,
  MenuRectangulos,
  BotonMenu,
} from "./styles";
import {
  Fondos,
  Vertical,
  Perf1,
  Perf2,
  Perf3,
  Perf4,
  Perfil_1_RAL,
} from "./data";

const Menu = ({
  presionado,
  setPresionado,
  imagenFormato,
  setImagenFormato,
  imagenPerfil,
  setImagenPerfil,
  perfilSize,
  setPerfilSize,
  imagenSvg,
  setImagenSvg,
  color,
  handleColorChange,
}) => {
  const [menuBase, setMenuBase] = useState(true);
  const [menuColorFormato, setMenuColorFormato] = useState(true);
  const [menuTipoFormato, setMenuTipoFormato] = useState(false);
  const [menuFormato, setMenuFormato] = useState(false);
  const [menuMultiformato, setMenuMultiformato] = useState(false);
  const [menuColorPerfil, setMenuColorPerfil] = useState(false);
  const [menuPerfil, setMenuPerfil] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  // const [perfilSize, setPerfilSize] = useState(null);
  const [seleccionRal, setSeleccionRal] = useState(null);
  const [seleccionPerfil, setSeleccionPerfil] = useState(null);
  const [colorFormato, setColorFormato] = useState(false);
  const [colorPerfil, setColorPerfil] = useState(false);
  // console.log("img formato:", imagenFormato);
  // console.log("tamaño perfil:", perfilSize);
  // console.log("color RAL:", color);
  // console.log("Color PErfil?:", colorPerfil);
  // console.log("color perfil:", imagenSvg);
  // console.log("Color perfil:", colorPerfil);

  const handleFondoFormatos = (miniatura) => {
    let cambio = null;
    if (miniatura === "Cream") {
      cambio = Vertical[0].imagen;
    }
    if (miniatura === "Earth") {
      cambio = Vertical[1].imagen;
    }
    if (miniatura === "Grey") {
      cambio = Vertical[2].imagen;
    }
    if (miniatura === "Shadow") {
      cambio = Vertical[3].imagen;
    }
    if (miniatura === "White") {
      cambio = Vertical[4].imagen;
    }
    setPerfilSize("Vertical");
    // console.log("Que fondo?", cambio);
    setImagenFormato(cambio);
  };
  const handleImagenFormato = (miniatura) => {
    const formatos = {
      Vertical: {
        Cream: Vertical[0].imagen,
        Earth: Vertical[1].imagen,
        Grey: Vertical[2].imagen,
        Shadow: Vertical[3].imagen,
        White: Vertical[4].imagen,
      },
    };
    const cambio = formatos[miniatura.id][colorFormato];
    setPerfilSize("Vertical");
    setImagenFormato(cambio);
  };
  const handlePerfil = (miniatura) => {
    let cambio = null;
    if (seleccionPerfil === "Perfil1") {
      if (perfilSize === "Vertical") {
        if (miniatura.id === "Bronce") {
          cambio = Perf1[0].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perf1[1].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perf1[4].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perf1[5].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perf1[8].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perf1[9].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perf1[3].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perf1[2].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perf1[6].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perf1[7].imagen;
        }
      }
    }
    if (seleccionPerfil === "Perfil2") {
      if (perfilSize === "Vertical") {
        if (miniatura.id === "Bronce") {
          cambio = Perf2[0].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perf2[1].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perf2[4].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perf2[5].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perf2[8].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perf2[9].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perf2[3].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perf2[2].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perf2[6].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perf2[7].imagen;
        }
      }
    }
    if (seleccionPerfil === "Perfil3") {
      if (perfilSize === "Vertical") {
        if (miniatura.id === "Bronce") {
          cambio = Perf3[0].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perf3[1].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perf3[4].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perf3[5].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perf3[8].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perf3[9].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perf3[3].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perf3[2].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perf3[6].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perf3[7].imagen;
        }
      }
    }
    if (seleccionPerfil === "Perfil4") {
      if (perfilSize === "Vertical") {
        if (miniatura.id === "Bronce") {
          cambio = Perf4[0].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perf4[1].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perf4[4].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perf4[5].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perf4[8].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perf4[9].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perf4[3].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perf4[2].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perf4[6].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perf4[7].imagen;
        }
      }
    }
    setImagenPerfil(cambio);
  };
  const handleRAL = (miniatura) => {
    let cambio = null;
    console.log("Que hay aqui?", miniatura.id);
    console.log("Color PErfil?:", colorPerfil);
    console.log("tamaño perfil:", perfilSize);
    // if (seleccionPerfil === "Perfil1") {
    // }
    if (
      (perfilSize === "60x60" || perfilSize === "60x120") &&
      miniatura.id === "RAL"
    ) {
      cambio = "60x60";
    }
    if (perfilSize === "Modular4" && miniatura.id === "RAL") {
      cambio = "Modular4";
    }
    if (perfilSize === "Modular9" && miniatura.id === "RAL") {
      cambio = "Modular9";
    }
    setImagenSvg(cambio);
  };
  const handlePerfilBase = (miniatura) => {
    let cambio = null;
    if (miniatura.id === "Perfil1" && perfilSize === "Vertical") {
      cambio = Perf1[4].imagen;
    }
    if (miniatura.id === "Perfil2" && perfilSize === "Vertical") {
      cambio = Perf2[4].imagen;
    }
    if (miniatura.id === "Perfil3" && perfilSize === "Vertical") {
      cambio = Perf3[4].imagen;
    }
    if (miniatura.id === "Perfil4" && perfilSize === "Vertical") {
      cambio = Perf4[4].imagen;
    }

    setSeleccionPerfil(miniatura.id);
    setImagenPerfil(cambio);
  };
  return (
    <AppMenu>
      {presionado && menuColorFormato && (
        <MenuCirculos classname='Seleccionar color Formatos'>
          <TituloMenu>Acabados</TituloMenu>
          <ContenedorCirculos>
            {MiniaturasColor.map((miniatura, index) => (
              <TextureContainer
                key={miniatura.id}
                onClick={() => (
                  setColorFormato(miniatura.id),
                  handleFondoFormatos(miniatura.id),
                  setImagenPerfil(null),
                  setImagenSvg(null)
                )}
              >
                <ImgCirculos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainer>
            ))}
          </ContenedorCirculos>
          <BotonMenu
            onClick={() => (setMenuColorFormato(false), setMenuPerfil(true))}
          >
            Siguiente
          </BotonMenu>
        </MenuCirculos>
      )}
      {/* {menuFormato && (
        <MenuRectangulos classname='Formatos'>
          <TituloMenu>Selecciona tu formato</TituloMenu>
          <ContenedorRectangulo>
            {SelectoresFormato.map((miniatura, index) => (
              <TextureContainerRectangulo
                key={miniatura.name}
                onClick={() => (
                  setMenuColorFormato(false),
                  setMenuTipoFormato(false),
                  setMenuFormato(false),
                  setMenuPerfil(true),
                  handleImagenFormato(miniatura)
                )}
              >
                <ImgRectangulos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainerRectangulo>
            ))}
          </ContenedorRectangulo>
          <BotonMenu
            onClick={() => (setMenuColorFormato(true), setMenuFormato(false))}
          >
            Atrás
          </BotonMenu>
        </MenuRectangulos>
      )} */}
      {menuPerfil && (
        <MenuRectangulos classname='Cenefas'>
          <TituloMenu>Cenefas</TituloMenu>
          <ContenedorRectangulo>
            {PerfilesMini.map((miniatura, index) => (
              <TextureContainerRectangulo
                key={miniatura.id}
                onClick={() => handlePerfilBase(miniatura)}
              >
                <ImgRectangulos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainerRectangulo>
            ))}
          </ContenedorRectangulo>
          <BotonMenu
            onClick={() => (
              setMenuColorFormato(false),
              setMenuTipoFormato(false),
              setMenuFormato(false),
              setMenuPerfil(false),
              setMenuColorPerfil(true)
            )}
          >
            Aceptar
          </BotonMenu>
          <BotonMenu
            onClick={() => (
              setMenuColorFormato(true),
              setMenuFormato(false),
              setMenuPerfil(false),
              setImagenPerfil(null)
            )}
          >
            Atrás
          </BotonMenu>
        </MenuRectangulos>
      )}
      {menuColorPerfil && (
        <MenuCirculos className='Cenefas color'>
          <TituloMenu>Acabados Cenefa</TituloMenu>
          <TituloMenu>Metales</TituloMenu>
          <ContenedorCirculos>
            {Metales.map((miniatura, index) => (
              <TextureContainer
                key={miniatura.id}
                onClick={() => (
                  handlePerfil(miniatura),
                  setShowColorPicker(false),
                  setImagenSvg(null)
                )}
              >
                <ImgCirculos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainer>
            ))}
          </ContenedorCirculos>
          <TituloMenu>Maderas</TituloMenu>
          <ContenedorCirculos>
            {Maderas.map((miniatura, index) => (
              <TextureContainer
                key={miniatura.id}
                onClick={() => (
                  handlePerfil(miniatura),
                  setShowColorPicker(false),
                  setImagenSvg(null)
                )}
              >
                <ImgCirculos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainer>
            ))}
          </ContenedorCirculos>
          <BotonMenu
            onClick={() => (
              setPresionado(false),
              setMenuColorPerfil(false),
              setMenuColorFormato(false),
              setMenuPerfil(false)
            )}
          >
            Finalizar
          </BotonMenu>
          <BotonMenu
            onClick={() => (
              setMenuColorFormato(false),
              setMenuTipoFormato(true),
              setMenuFormato(false),
              setMenuPerfil(true),
              setImagenPerfil(null),
              setImagenSvg(null),
              setMenuColorPerfil(false)
            )}
          >
            Atrás
          </BotonMenu>
        </MenuCirculos>
      )}
    </AppMenu>
  );
};
export default Menu;
