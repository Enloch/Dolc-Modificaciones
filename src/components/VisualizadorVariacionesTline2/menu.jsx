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
  Horizontal,
  Vertical,
  Perfil_1_Bronce,
  Perfil_1_Burdeos,
  Perfil_1_Inox,
  Perfil_1_Negro,
  Perfil_1_Oro,
  Perfil_1_Plata,
  Perfil_1_Embero,
  Perfil_1_Embero_Dorado,
  Perfil_1_Nogal,
  Perfil_1_Olmo,
  Perfil_2_Bronce,
  Perfil_2_Burdeos,
  Perfil_2_Inox,
  Perfil_2_Negro,
  Perfil_2_Oro,
  Perfil_2_Plata,
  Perfil_2_Embero,
  Perfil_2_Embero_Dorado,
  Perfil_2_Nogal,
  Perfil_2_Olmo,
  Perfil_3_Bronce,
  Perfil_3_Burdeos,
  Perfil_3_Inox,
  Perfil_3_Negro,
  Perfil_3_Oro,
  Perfil_3_Plata,
  Perfil_3_Embero,
  Perfil_3_Embero_Dorado,
  Perfil_3_Nogal,
  Perfil_3_Olmo,
  Perfil_4_Bronce,
  Perfil_4_Burdeos,
  Perfil_4_Inox,
  Perfil_4_Negro,
  Perfil_4_Oro,
  Perfil_4_Plata,
  Perfil_4_Embero,
  Perfil_4_Embero_Dorado,
  Perfil_4_Nogal,
  Perfil_4_Olmo,
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
      cambio = Fondos[0].imagen;
    }
    if (miniatura === "Earth") {
      cambio = Fondos[1].imagen;
    }
    if (miniatura === "Grey") {
      cambio = Fondos[2].imagen;
    }
    if (miniatura === "Shadow") {
      cambio = Fondos[3].imagen;
    }
    if (miniatura === "White") {
      cambio = Fondos[4].imagen;
    }
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
      Horizontal: {
        Cream: Horizontal[0].imagen,
        Earth: Horizontal[1].imagen,
        Grey: Horizontal[2].imagen,
        Shadow: Horizontal[3].imagen,
        White: Horizontal[4].imagen,
      },
    };
    const cambio = formatos[miniatura.id][colorFormato];
    setPerfilSize(miniatura.id);
    setImagenFormato(cambio);
  };
  const handlePerfil = (miniatura) => {
    let cambio = null;
    if (seleccionPerfil === "Perfil1") {
      if (perfilSize === "Horizontal") {
        if (miniatura.id === "Bronce") {
          cambio = Perfil_1_Bronce[1].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perfil_1_Burdeos[1].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perfil_1_Inox[1].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perfil_1_Negro[1].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perfil_1_Oro[1].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perfil_1_Plata[1].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perfil_1_Embero[1].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perfil_1_Embero_Dorado[1].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perfil_1_Nogal[1].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perfil_1_Olmo[1].imagen;
        }
      } else if (perfilSize === "Vertical") {
        if (miniatura.id === "Bronce") {
          cambio = Perfil_1_Bronce[0].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perfil_1_Burdeos[0].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perfil_1_Inox[0].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perfil_1_Negro[0].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perfil_1_Oro[0].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perfil_1_Plata[0].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perfil_1_Embero[0].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perfil_1_Embero_Dorado[0].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perfil_1_Nogal[0].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perfil_1_Olmo[0].imagen;
        }
      }
    }
    if (seleccionPerfil === "Perfil2") {
      if (perfilSize === "Horizontal") {
        if (miniatura.id === "Bronce") {
          cambio = Perfil_2_Bronce[1].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perfil_2_Burdeos[1].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perfil_2_Inox[1].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perfil_2_Negro[1].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perfil_2_Oro[1].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perfil_2_Plata[1].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perfil_2_Embero[1].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perfil_2_Embero_Dorado[1].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perfil_2_Nogal[1].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perfil_2_Olmo[1].imagen;
        }
      } else if (perfilSize === "Vertical") {
        if (miniatura.id === "Bronce") {
          cambio = Perfil_2_Bronce[0].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perfil_2_Burdeos[0].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perfil_2_Inox[0].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perfil_2_Negro[0].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perfil_2_Oro[0].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perfil_2_Plata[0].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perfil_2_Embero[0].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perfil_2_Embero_Dorado[0].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perfil_2_Nogal[0].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perfil_2_Olmo[0].imagen;
        }
      }
    }
    if (seleccionPerfil === "Perfil3") {
      if (perfilSize === "Horizontal") {
        if (miniatura.id === "Bronce") {
          cambio = Perfil_3_Bronce[1].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perfil_3_Burdeos[1].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perfil_3_Inox[1].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perfil_3_Negro[1].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perfil_3_Oro[1].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perfil_3_Plata[1].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perfil_3_Embero[1].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perfil_3_Embero_Dorado[1].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perfil_3_Nogal[1].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perfil_3_Olmo[1].imagen;
        }
      } else if (perfilSize === "Vertical") {
        if (miniatura.id === "Bronce") {
          cambio = Perfil_3_Bronce[0].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perfil_3_Burdeos[0].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perfil_3_Inox[0].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perfil_3_Negro[0].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perfil_3_Oro[0].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perfil_3_Plata[0].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perfil_3_Embero[0].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perfil_3_Embero_Dorado[0].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perfil_3_Nogal[0].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perfil_3_Olmo[0].imagen;
        }
      }
    }
    if (seleccionPerfil === "Perfil4") {
      if (perfilSize === "Horizontal") {
        if (miniatura.id === "Bronce") {
          cambio = Perfil_4_Bronce[1].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perfil_4_Burdeos[1].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perfil_4_Inox[1].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perfil_4_Negro[1].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perfil_4_Oro[1].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perfil_4_Plata[1].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perfil_4_Embero[1].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perfil_4_Embero_Dorado[1].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perfil_4_Nogal[1].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perfil_4_Olmo[1].imagen;
        }
      } else if (perfilSize === "Vertical") {
        if (miniatura.id === "Bronce") {
          cambio = Perfil_4_Bronce[0].imagen;
        } else if (miniatura.id === "Burdeos") {
          cambio = Perfil_4_Burdeos[0].imagen;
        } else if (miniatura.id === "Inox") {
          cambio = Perfil_4_Inox[0].imagen;
        } else if (miniatura.id === "Negro") {
          cambio = Perfil_4_Negro[0].imagen;
        } else if (miniatura.id === "Oro") {
          cambio = Perfil_4_Oro[0].imagen;
        } else if (miniatura.id === "Plata") {
          cambio = Perfil_4_Plata[0].imagen;
        } else if (miniatura.id === "Embero") {
          cambio = Perfil_4_Embero[0].imagen;
        } else if (miniatura.id === "EmberoDorado") {
          cambio = Perfil_4_Embero_Dorado[0].imagen;
        } else if (miniatura.id === "Nogal") {
          cambio = Perfil_4_Nogal[0].imagen;
        } else if (miniatura.id === "Olmo") {
          cambio = Perfil_4_Olmo[0].imagen;
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
    if (miniatura.id === "Perfil1") {
      if (perfilSize === "Horizontal") {
        cambio = Perfil_1_Inox[1].imagen;
      }
      if (perfilSize === "Vertical") {
        cambio = Perfil_1_Inox[0].imagen;
      }
    }
    if (miniatura.id === "Perfil2") {
      if (perfilSize === "Horizontal") {
        cambio = Perfil_2_Inox[1].imagen;
      }
      if (perfilSize === "Vertical") {
        cambio = Perfil_2_Inox[0].imagen;
      }
    }
    if (miniatura.id === "Perfil3") {
      if (perfilSize === "Horizontal") {
        cambio = Perfil_3_Inox[1].imagen;
      }
      if (perfilSize === "Vertical") {
        cambio = Perfil_3_Inox[0].imagen;
      }
    }
    if (miniatura.id === "Perfil4") {
      if (perfilSize === "Horizontal") {
        cambio = Perfil_4_Inox[1].imagen;
      }
      if (perfilSize === "Vertical") {
        cambio = Perfil_4_Inox[0].imagen;
      }
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
            onClick={() => (setMenuColorFormato(false), setMenuFormato(true))}
          >
            Siguiente
          </BotonMenu>
        </MenuCirculos>
      )}
      {menuFormato && (
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
      )}
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
              setMenuColorFormato(false),
              setMenuFormato(true),
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
