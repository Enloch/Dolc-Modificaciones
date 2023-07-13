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
    console.log("Que fondo?", cambio);
    setImagenFormato(cambio);
  };
  const handleImagenFormato = (miniatura) => {
    const formatos = {
      "20x120": {
        Cream: Formato20x120[0].imagen,
        Earth: Formato20x120[1].imagen,
        Grey: Formato20x120[2].imagen,
        Shadow: Formato20x120[3].imagen,
        White: Formato20x120[4].imagen,
      },
      "30x120": {
        Cream: Formato30x120[0].imagen,
        Earth: Formato30x120[1].imagen,
        Grey: Formato30x120[2].imagen,
        Shadow: Formato30x120[3].imagen,
        White: Formato30x120[4].imagen,
      },
      "30x60": {
        Cream: Formato30x60[0].imagen,
        Earth: Formato30x60[1].imagen,
        Grey: Formato30x60[2].imagen,
        Shadow: Formato30x60[3].imagen,
        White: Formato30x60[4].imagen,
      },
      "30x90": {
        Cream: Formato30x90[0].imagen,
        Earth: Formato30x90[1].imagen,
        Grey: Formato30x90[2].imagen,
        Shadow: Formato30x90[3].imagen,
        White: Formato30x90[4].imagen,
      },
      "40x120": {
        Cream: Formato40x120[0].imagen,
        Earth: Formato40x120[1].imagen,
        Grey: Formato40x120[2].imagen,
        Shadow: Formato40x120[3].imagen,
        White: Formato40x120[4].imagen,
      },
      "40x80": {
        Cream: Formato40x80[0].imagen,
        Earth: Formato40x80[1].imagen,
        Grey: Formato40x80[2].imagen,
        Shadow: Formato40x80[3].imagen,
        White: Formato40x80[4].imagen,
      },
      "45x90": {
        Cream: Formato45x90[0].imagen,
        Earth: Formato45x90[1].imagen,
        Grey: Formato45x90[2].imagen,
        Shadow: Formato45x90[3].imagen,
        White: Formato45x90[4].imagen,
      },
      "50x100": {
        Cream: Formato50x100[0].imagen,
        Earth: Formato50x100[1].imagen,
        Grey: Formato50x100[2].imagen,
        Shadow: Formato50x100[3].imagen,
        White: Formato50x100[4].imagen,
      },
      "50x120": {
        Cream: Formato50x120[0].imagen,
        Earth: Formato50x120[1].imagen,
        Grey: Formato50x120[2].imagen,
        Shadow: Formato50x120[3].imagen,
        White: Formato50x120[4].imagen,
      },
      "60x60": {
        Cream: Formato60x60[0].imagen,
        Earth: Formato60x60[1].imagen,
        Grey: Formato60x60[2].imagen,
        Shadow: Formato60x60[3].imagen,
        White: Formato60x60[4].imagen,
      },
      "60x90": {
        Cream: Formato60x90[0].imagen,
        Earth: Formato60x90[1].imagen,
        Grey: Formato60x90[2].imagen,
        Shadow: Formato60x90[3].imagen,
        White: Formato60x90[4].imagen,
      },
      "60x120": {
        Cream: Formato60x120[0].imagen,
        Earth: Formato60x120[1].imagen,
        Grey: Formato60x120[2].imagen,
        Shadow: Formato60x120[3].imagen,
        White: Formato60x120[4].imagen,
      },
      "80x80": {
        Cream: Formato80x80[0].imagen,
        Earth: Formato80x80[1].imagen,
        Grey: Formato80x80[2].imagen,
        Shadow: Formato80x80[3].imagen,
        White: Formato80x80[4].imagen,
      },
      Modular1: {
        Cream: FormatoModular1[0].imagen,
        Earth: FormatoModular1[1].imagen,
        Grey: FormatoModular1[2].imagen,
        Shadow: FormatoModular1[3].imagen,
        White: FormatoModular1[4].imagen,
      },
      Modular2: {
        Cream: FormatoModular2[0].imagen,
        Earth: FormatoModular2[1].imagen,
        Grey: FormatoModular2[2].imagen,
        Shadow: FormatoModular2[3].imagen,
        White: FormatoModular2[4].imagen,
      },
      Modular3: {
        Cream: FormatoModular3[0].imagen,
        Earth: FormatoModular3[1].imagen,
        Grey: FormatoModular3[2].imagen,
        Shadow: FormatoModular3[3].imagen,
        White: FormatoModular3[4].imagen,
      },
      Modular4: {
        Cream: FormatoModular4[0].imagen,
        Earth: FormatoModular4[1].imagen,
        Grey: FormatoModular4[2].imagen,
        Shadow: FormatoModular4[3].imagen,
        White: FormatoModular4[4].imagen,
      },
      Modular5: {
        Cream: FormatoModular5[0].imagen,
        Earth: FormatoModular5[1].imagen,
        Grey: FormatoModular5[2].imagen,
        Shadow: FormatoModular5[3].imagen,
        White: FormatoModular5[4].imagen,
      },
      Modular6: {
        Cream: FormatoModular6[0].imagen,
        Earth: FormatoModular6[1].imagen,
        Grey: FormatoModular6[2].imagen,
        Shadow: FormatoModular6[3].imagen,
        White: FormatoModular6[4].imagen,
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
    if (seleccionPerfil === "Perfil1") {
      if (perfilSize === "20x120" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[0].imagen;
      } else if (perfilSize === "20x120" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[0].imagen;
      }

      if (perfilSize === "30x120" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[1].imagen;
      } else if (perfilSize === "30x120" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[1].imagen;
      }

      if (perfilSize === "40x120" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[2].imagen;
      } else if (perfilSize === "40x120" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[2].imagen;
      }
      if (perfilSize === "30x60" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[1].imagen;
      } else if (perfilSize === "30x60" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[1].imagen;
      }

      if (perfilSize === "30x90" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[1].imagen;
      } else if (perfilSize === "30x90" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[1].imagen;
      }

      if (perfilSize === "40x80" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[2].imagen;
      } else if (perfilSize === "40x80" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[2].imagen;
      }

      if (perfilSize === "45x90" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[3].imagen;
      } else if (perfilSize === "45x90" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[3].imagen;
      }

      if (perfilSize === "50x100" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[4].imagen;
      } else if (perfilSize === "50x100" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[4].imagen;
      }

      if (perfilSize === "50x120" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[4].imagen;
      } else if (perfilSize === "50x120" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[4].imagen;
      }

      if (perfilSize === "60x60" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[5].imagen;
      } else if (perfilSize === "60x60" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[5].imagen;
      }
      if (perfilSize === "60x90" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[5].imagen;
      } else if (perfilSize === "60x90" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[5].imagen;
      }

      if (perfilSize === "80x80" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[6].imagen;
      } else if (perfilSize === "80x80" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[6].imagen;
      }
      if (perfilSize === "Modular1" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[7].imagen;
      } else if (perfilSize === "Modular1" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[7].imagen;
      }

      if (perfilSize === "Modular2" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[8].imagen;
      } else if (perfilSize === "Modular2" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[8].imagen;
      }

      if (perfilSize === "Modular3" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[9].imagen;
      } else if (perfilSize === "Modular3" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[9].imagen;
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
      if (perfilSize === "Modular5" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[11].imagen;
      } else if (perfilSize === "Modular5" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[11].imagen;
      }

      if (perfilSize === "Modular6" && miniatura.id === "Bronce") {
        cambio = Perfil_1_Bronce[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "Burdeos") {
        cambio = Perfil_1_Burdeos[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "Inox") {
        cambio = Perfil_1_Inox[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "Negro") {
        cambio = Perfil_1_Negro[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "Oro") {
        cambio = Perfil_1_Oro[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "Plata") {
        cambio = Perfil_1_Plata[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "Embero") {
        cambio = Perfil_1_Embero[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "Nogal") {
        cambio = Perfil_1_Nogal[12].imagen;
      } else if (perfilSize === "Modular6" && miniatura.id === "Olmo") {
        cambio = Perfil_1_Olmo[12].imagen;
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
    }

    setImagenPerfil(cambio);
  };
  const handleRAL = (miniatura) => {
    let cambio = null;
    console.log("Que hay aqui?", miniatura.id);
    console.log("Color PErfil?:", colorPerfil);
    console.log("tamaño perfil:", perfilSize);
    if (seleccionPerfil === "Perfil1") {
      if (perfilSize === "20x120" && miniatura.id === "RAL") {
        // cambio = Perfil_1_RAL[0].imagen;
        cambio = "20x120";
      }
      if (perfilSize === "30x120" && miniatura.id === "RAL") {
        cambio = "30x120";
      }
      if (perfilSize === "40x120" && miniatura.id === "RAL") {
        cambio = "40x120";
      }
      if (perfilSize === "30x60" && miniatura.id === "RAL") {
        cambio = "30x60";
      }
      if (perfilSize === "30x90" && miniatura.id === "RAL") {
        cambio = "30x90";
      }
      if (perfilSize === "40x80" && miniatura.id === "RAL") {
        cambio = "40x80";
      }
      if (perfilSize === "45x90" && miniatura.id === "RAL") {
        cambio = "45x90";
      }
      if (perfilSize === "50x100" && miniatura.id === "RAL") {
        cambio = "50x100";
      }
      if (perfilSize === "50x120" && miniatura.id === "RAL") {
        cambio = "50x120";
      }
      if (perfilSize === "60x60" && miniatura.id === "RAL") {
        cambio = "60x60";
      }
      if (perfilSize === "60x90" && miniatura.id === "RAL") {
        cambio = "60x90";
      }
      if (perfilSize === "80x80" && miniatura.id === "RAL") {
        cambio = "80x80";
      }
      if (perfilSize === "Modular1" && miniatura.id === "RAL") {
        cambio = "Modular1";
      }
      if (perfilSize === "Modular2" && miniatura.id === "RAL") {
        cambio = "Modular2";
      }
      if (perfilSize === "Modular3" && miniatura.id === "RAL") {
        cambio = "Modular3";
      }
      if (perfilSize === "Modular4" && miniatura.id === "RAL") {
        cambio = "Modular4";
      }
      if (perfilSize === "Modular5" && miniatura.id === "RAL") {
        cambio = "Modular5";
      }
      if (perfilSize === "Modular6" && miniatura.id === "RAL") {
        cambio = "Modular6";
      }
      if (perfilSize === "Modular9" && miniatura.id === "RAL") {
        cambio = "Modular9";
      }
    }
    setImagenSvg(cambio);
  };
  const handlePerfilBase = (miniatura) => {
    let cambio = null;
    if (miniatura.id === "Perfil1") {
      if (perfilSize === "20x120") {
        cambio = Perfil_1_Inox[0].imagen;
      }
      if (perfilSize === "30x120") {
        cambio = Perfil_1_Inox[1].imagen;
      }
      if (perfilSize === "40x120") {
        cambio = Perfil_1_Inox[2].imagen;
      }
      if (perfilSize === "30x60") {
        cambio = Perfil_1_Inox[1].imagen;
      }
      if (perfilSize === "30x90") {
        cambio = Perfil_1_Inox[1].imagen;
      }
      if (perfilSize === "40x80") {
        cambio = Perfil_1_Inox[2].imagen;
      }
      if (perfilSize === "45x90") {
        cambio = Perfil_1_Inox[3].imagen;
      }
      if (perfilSize === "50x100") {
        cambio = Perfil_1_Inox[4].imagen;
      }
      if (perfilSize === "50x120") {
        cambio = Perfil_1_Inox[4].imagen;
      }
      if (perfilSize === "60x60") {
        cambio = Perfil_1_Inox[5].imagen;
      }
      if (perfilSize === "60x90") {
        cambio = Perfil_1_Inox[5].imagen;
      }
      if (perfilSize === "80x80") {
        cambio = Perfil_1_Inox[6].imagen;
      }
      if (perfilSize === "Modular1") {
        cambio = Perfil_1_Inox[7].imagen;
      }
      if (perfilSize === "Modular2") {
        cambio = Perfil_1_Inox[8].imagen;
      }
      if (perfilSize === "Modular3") {
        cambio = Perfil_1_Inox[9].imagen;
      }
      if (perfilSize === "Modular4") {
        cambio = Perfil_1_Inox[10].imagen;
      }
      if (perfilSize === "Modular5") {
        cambio = Perfil_1_Inox[11].imagen;
      }
      if (perfilSize === "Modular6") {
        cambio = Perfil_1_Inox[12].imagen;
      }
      if (perfilSize === "Modular9") {
        cambio = Perfil_1_Inox[13].imagen;
      }
    }
    setSeleccionPerfil(miniatura.id);
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
              <ImgRectangulos src={SelectoresFormato[9].imagen} />
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
              <ImgRectangulos src={SelectoresModular[6].imagen} />
              <TextTextura>Multiformatos</TextTextura>
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
              setMenuColorFormato(false),
              setMenuTipoFormato(false),
              setMenuFormato(false),
              setMenuPerfil(true)
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
              setMenuPerfil(true)
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
        <MenuRectangulos classname='Formatos'>
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
              setMenuTipoFormato(false),
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
