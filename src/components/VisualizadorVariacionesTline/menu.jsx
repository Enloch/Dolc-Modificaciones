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
  LargosLibres,
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
  Largos,
  Formato20x120,
  Formato30x120,
  Formato30x60,
  Formato30x90,
  Formato40x120,
  Formato40x80,
  Formato45x90,
  Formato50x100,
  Formato50x120,
  Formato60x60,
  Formato60x120,
  Formato60x90,
  Formato80x80,
  FormatoModular1,
  FormatoModular2,
  FormatoModular3,
  FormatoModular4,
  FormatoModular5,
  FormatoModular6,
  FormatoModular8,
  FormatoModular9,
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
  const handleButtonClick = (imagenFormato) => {
    if (imagenFormato === null) {
      setMenuColorFormato(true);
      setMenuColorPerfil(false);
      window.alert("Selecciona un formato primero!");
    }
  };
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
      "Largos libre": {
        Cream: Largos[0].imagen,
        Earth: Largos[1].imagen,
        Grey: Largos[2].imagen,
        Shadow: Largos[3].imagen,
        White: Largos[4].imagen,
      },
      "60x60": {
        Cream: Formato60x60[0].imagen,
        Earth: Formato60x60[1].imagen,
        Grey: Formato60x60[2].imagen,
        Shadow: Formato60x60[3].imagen,
        White: Formato60x60[4].imagen,
      },
      "60x120": {
        Cream: Formato60x120[0].imagen,
        Earth: Formato60x120[1].imagen,
        Grey: Formato60x120[2].imagen,
        Shadow: Formato60x120[3].imagen,
        White: Formato60x120[4].imagen,
      },
      "75x75": {
        Cream: Formato60x60[0].imagen,
        Earth: Formato60x60[1].imagen,
        Grey: Formato60x60[2].imagen,
        Shadow: Formato60x60[3].imagen,
        White: Formato60x60[4].imagen,
      },
      "75x150": {
        Cream: Formato60x120[0].imagen,
        Earth: Formato60x120[1].imagen,
        Grey: Formato60x120[2].imagen,
        Shadow: Formato60x120[3].imagen,
        White: Formato60x120[4].imagen,
      },
      "80x80": {
        Cream: Formato60x60[0].imagen,
        Earth: Formato60x60[1].imagen,
        Grey: Formato60x60[2].imagen,
        Shadow: Formato60x60[3].imagen,
        White: Formato60x60[4].imagen,
      },
      "80x160": {
        Cream: Formato60x120[0].imagen,
        Earth: Formato60x120[1].imagen,
        Grey: Formato60x120[2].imagen,
        Shadow: Formato60x120[3].imagen,
        White: Formato60x120[4].imagen,
      },
      "90x90": {
        Cream: Formato60x60[0].imagen,
        Earth: Formato60x60[1].imagen,
        Grey: Formato60x60[2].imagen,
        Shadow: Formato60x60[3].imagen,
        White: Formato60x60[4].imagen,
      },
      "90x180": {
        Cream: Formato60x120[0].imagen,
        Earth: Formato60x120[1].imagen,
        Grey: Formato60x120[2].imagen,
        Shadow: Formato60x120[3].imagen,
        White: Formato60x120[4].imagen,
      },
      Modular4: {
        Cream: FormatoModular4[0].imagen,
        Earth: FormatoModular4[1].imagen,
        Grey: FormatoModular4[2].imagen,
        Shadow: FormatoModular4[3].imagen,
        White: FormatoModular4[4].imagen,
      },
      Modular8: {
        Cream: FormatoModular8[0].imagen,
        Earth: FormatoModular8[1].imagen,
        Grey: FormatoModular8[2].imagen,
        Shadow: FormatoModular8[3].imagen,
        White: FormatoModular8[4].imagen,
      },
      Modular9: {
        Cream: FormatoModular9[0].imagen,
        Earth: FormatoModular9[1].imagen,
        Grey: FormatoModular9[2].imagen,
        Shadow: FormatoModular9[3].imagen,
        White: FormatoModular9[4].imagen,
      },
    };
    const cambio = formatos[miniatura.id][colorFormato];
    setPerfilSize(miniatura.id);
    setImagenFormato(cambio);
  };
  const handlePerfil = (miniatura) => {
    let cambio = null;

    if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Bronce"
    ) {
      cambio = Perfil_1_Bronce[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Burdeos"
    ) {
      cambio = Perfil_1_Burdeos[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Inox"
    ) {
      cambio = Perfil_1_Inox[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Negro"
    ) {
      cambio = Perfil_1_Negro[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Oro"
    ) {
      cambio = Perfil_1_Oro[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Plata"
    ) {
      cambio = Perfil_1_Plata[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Embero"
    ) {
      cambio = Perfil_1_Embero[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "EmberoDorado"
    ) {
      cambio = Perfil_1_Embero_Dorado[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Nogal"
    ) {
      cambio = Perfil_1_Nogal[5].imagen;
    } else if (
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "Olmo"
    ) {
      cambio = Perfil_1_Olmo[5].imagen;
    }
    if (perfilSize === "Modular4" && miniatura.id === "Bronce") {
      cambio = Perfil_1_Bronce[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "Burdeos") {
      cambio = Perfil_1_Burdeos[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "Inox") {
      cambio = Perfil_1_Inox[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "Negro") {
      cambio = Perfil_1_Negro[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "Oro") {
      cambio = Perfil_1_Oro[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "Plata") {
      cambio = Perfil_1_Plata[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "Embero") {
      cambio = Perfil_1_Embero[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "EmberoDorado") {
      cambio = Perfil_1_Embero_Dorado[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "Nogal") {
      cambio = Perfil_1_Nogal[10].imagen;
    } else if (perfilSize === "Modular4" && miniatura.id === "Olmo") {
      cambio = Perfil_1_Olmo[10].imagen;
    }

    if (perfilSize === "Modular8" && miniatura.id === "Bronce") {
      cambio = Perfil_1_Bronce[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "Burdeos") {
      cambio = Perfil_1_Burdeos[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "Inox") {
      cambio = Perfil_1_Inox[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "Negro") {
      cambio = Perfil_1_Negro[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "Oro") {
      cambio = Perfil_1_Oro[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "Plata") {
      cambio = Perfil_1_Plata[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "Embero") {
      cambio = Perfil_1_Embero[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "EmberoDorado") {
      cambio = Perfil_1_Embero_Dorado[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "Nogal") {
      cambio = Perfil_1_Nogal[10].imagen;
    } else if (perfilSize === "Modular8" && miniatura.id === "Olmo") {
      cambio = Perfil_1_Olmo[10].imagen;
    }

    if (perfilSize === "Modular9" && miniatura.id === "Bronce") {
      cambio = Perfil_1_Bronce[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "Burdeos") {
      cambio = Perfil_1_Burdeos[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "Inox") {
      cambio = Perfil_1_Inox[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "Negro") {
      cambio = Perfil_1_Negro[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "Oro") {
      cambio = Perfil_1_Oro[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "Plata") {
      cambio = Perfil_1_Plata[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "Embero") {
      cambio = Perfil_1_Embero[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "EmberoDorado") {
      cambio = Perfil_1_Embero_Dorado[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "Nogal") {
      cambio = Perfil_1_Nogal[13].imagen;
    } else if (perfilSize === "Modular9" && miniatura.id === "Olmo") {
      cambio = Perfil_1_Olmo[13].imagen;
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
      (perfilSize === "60x60" ||
        perfilSize === "60x120" ||
        perfilSize === "Largos libre") &&
      miniatura.id === "RAL"
    ) {
      cambio = "60x60";
    }
    if (perfilSize === "Modular4" && miniatura.id === "RAL") {
      cambio = "Modular4";
    }
    if (perfilSize === "Modular8" && miniatura.id === "RAL") {
      cambio = "Modular8";
    }
    if (perfilSize === "Modular9" && miniatura.id === "RAL") {
      cambio = "Modular9";
    }
    setImagenSvg(cambio);
  };
  const handlePerfilBase = () => {
    let cambio = null;
    // if (miniatura.id === "Perfil1") {

    // }
    if (
      perfilSize === "60x60" ||
      perfilSize === "60x120" ||
      perfilSize === "Largos libre"
    ) {
      cambio = Perfil_1_Inox[5].imagen;
    }
    if (perfilSize === "Modular4") {
      cambio = Perfil_1_Inox[10].imagen;
    }
    if (perfilSize === "Modular8") {
      cambio = Perfil_1_Inox[13].imagen;
    }

    if (perfilSize === "Modular9") {
      cambio = Perfil_1_Inox[14].imagen;
    }
    // setSeleccionPerfil(miniatura.id);
    setImagenPerfil(cambio);
  };
  return (
    <AppMenu>
      {/* {presionado && menuBase && (
        <MenuRectangulos classname='Base'>
          <TituloMenu>Personaliza la fachada</TituloMenu>
          <ContenedorRectangulo>
            <TextureContainerRectangulo
              onClick={() => (setMenuBase(false), setMenuColorFormato(true))}
            >
              <ImgRectangulos src={SelectoresModular[6].imagen} />
              <TextTextura>Formatos</TextTextura>
            </TextureContainerRectangulo>
            <TextureContainerRectangulo
              onClick={() => (
                setMenuBase(false),
                setMenuColorPerfil(true),
                handleButtonClick(imagenFormato)
              )}
            >
              <ImgRectangulos src={MiniaturasColor[0].imagen} />
              <TextTextura>Acabado Cenefa</TextTextura>
            </TextureContainerRectangulo>
          </ContenedorRectangulo>
        </MenuRectangulos>
      )} */}
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
            onClick={() => (
              setMenuColorFormato(false), setMenuTipoFormato(true)
            )}
          >
            Siguiente
          </BotonMenu>
        </MenuCirculos>
      )}
      {menuTipoFormato && (
        <MenuRectangulos classname='Select Formatos'>
          <TituloMenu>Selecciona tu formato</TituloMenu>
          <ContenedorRectangulo>
            <TextureContainerRectangulo
              onClick={() => (
                setMenuColorFormato(false),
                setMenuTipoFormato(false),
                setMenuFormato(true),
                setMenuMultiformato(false),
                setImagenPerfil(null),
                setImagenSvg(null)
              )}
            >
              <ImgRectangulos src={SelectoresFormato[0].imagen} />
              <TextTextura>Formatos</TextTextura>
            </TextureContainerRectangulo>
            <TextureContainerRectangulo
              onClick={() => (
                setMenuColorFormato(false),
                setMenuTipoFormato(false),
                setMenuFormato(false),
                setMenuMultiformato(true),
                setImagenPerfil(null)
              )}
            >
              <ImgRectangulos src={SelectoresModular[2].imagen} />
              <TextTextura>Multiformatos</TextTextura>
            </TextureContainerRectangulo>
            <TextureContainerRectangulo
              onClick={() => (
                setMenuColorFormato(false),
                setMenuTipoFormato(false),
                setMenuFormato(false),
                setMenuMultiformato(false),
                setImagenPerfil(null),
                setMenuColorPerfil(true),
                handleImagenFormato(LargosLibres),
                handlePerfilBase()
              )}
            >
              <ImgRectangulos src={LargosLibres.imagen} />
              <TextTextura>Largos Libre</TextTextura>
            </TextureContainerRectangulo>
          </ContenedorRectangulo>
          <BotonMenu
            onClick={() => (
              setMenuColorFormato(true), setMenuTipoFormato(false)
            )}
          >
            Atrás
          </BotonMenu>
        </MenuRectangulos>
      )}
      {menuFormato && (
        <MenuRectangulos classname='Formatos'>
          <TituloMenu>Formatos</TituloMenu>
          <ContenedorRectangulo>
            {SelectoresFormato.map((miniatura, index) => (
              <TextureContainerRectangulo
                key={miniatura.name}
                onClick={() => handleImagenFormato(miniatura)}
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
              handlePerfilBase(),
              setMenuColorPerfil(true)
            )}
          >
            Aceptar
          </BotonMenu>
          <BotonMenu
            onClick={() => (
              setMenuColorFormato(false),
              setMenuTipoFormato(true),
              setMenuFormato(false)
            )}
          >
            Atrás
          </BotonMenu>
        </MenuRectangulos>
      )}
      {menuMultiformato && (
        <MenuRectangulos classname='Multiformatos'>
          <TituloMenu>Multiformatos</TituloMenu>
          <ContenedorRectangulo>
            {SelectoresModular.map((miniatura, index) => (
              <TextureContainerRectangulo
                key={miniatura.id}
                onClick={() => handleImagenFormato(miniatura)}
              >
                <ImgRectangulos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainerRectangulo>
            ))}
          </ContenedorRectangulo>
          <BotonMenu
            onClick={() => (
              setMenuBase(true),
              setMenuColorFormato(false),
              setMenuTipoFormato(false),
              setMenuFormato(false),
              setMenuMultiformato(false),
              setMenuPerfil(false),
              handlePerfilBase(),
              setMenuColorPerfil(true)
            )}
          >
            Aceptar
          </BotonMenu>
          <BotonMenu
            onClick={() => (
              setMenuColorFormato(false),
              setMenuTipoFormato(true),
              setMenuFormato(false),
              setMenuMultiformato(false)
            )}
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
                // onClick={() => handlePerfilBase(miniatura)}
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
              setMenuTipoFormato(true),
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
          <TituloMenu>RAL</TituloMenu>
          <ContenedorCirculos>
            {RALS.map((miniatura, index) => (
              <TextureContainer
                key={miniatura.id}
                onClick={() => {
                  handleRAL(miniatura);
                  setShowColorPicker(true);
                  setImagenPerfil(null);
                }}
              >
                <ImgCirculos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainer>
            ))}
          </ContenedorCirculos>
          {showColorPicker && (
            <>
              <TituloMenu>Selecciona tu Color</TituloMenu>
              <SketchPicker
                color={color}
                onChange={(selectedColor) =>
                  handleColorChange(selectedColor.hex)
                }
              />
            </>
          )}
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
              // setMenuPerfil(true),
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
