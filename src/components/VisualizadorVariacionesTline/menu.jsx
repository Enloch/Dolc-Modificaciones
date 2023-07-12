import React, { useState } from "react";
import {
  MiniaturasColor,
  SelectoresFormato,
  SelectoresModular,
  Metales,
  Maderas,
  PerfilesMini,
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
} from "./data";
import { color } from "framer-motion";

const Menu = ({
  presionado,
  setPresionado,
  imagenFormato,
  setImagenFormato,
  imagenPerfil,
  setImagenPerfil,
  perfilSize,
  setPerfilSize,
}) => {
  const [menuBase, setMenuBase] = useState(true);
  const [menuColorFormato, setMenuColorFormato] = useState(false);
  const [menuTipoFormato, setMenuTipoFormato] = useState(false);
  const [menuFormato, setMenuFormato] = useState(false);
  const [menuMultiformato, setMenuMultiformato] = useState(false);
  const [menuColorPerfil, setMenuColorPerfil] = useState(false);
  const [menuPerfil, setMenuPerfil] = useState(false);

  // const [perfilSize, setPerfilSize] = useState(null);
  const [colorFormato, setColorFormato] = useState(false);
  const [colorPerfil, setColorPerfil] = useState(false);
  console.log("img formato:", imagenFormato);
  console.log("tamaño perfil:", perfilSize);
  console.log("Color perfil:", colorPerfil);
  const handleButtonClick = (imagenFormato) => {
    if (imagenFormato === null) {
      setMenuColorFormato(true);
      setMenuColorPerfil(false);
      window.alert("Selecciona un formato primero!");
    }
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
    if (miniatura.id === "Perfil1") {
      if (perfilSize === "20x120" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[0].imagen;
      } else if (perfilSize === "20x120" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[0].imagen;
      }

      if (perfilSize === "30x120" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[1].imagen;
      } else if (perfilSize === "30x120" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[1].imagen;
      }

      if (perfilSize === "40x120" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[3].imagen;
      } else if (perfilSize === "40x120" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[3].imagen;
      }

      if (perfilSize === "30x60" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[1].imagen;
      } else if (perfilSize === "30x60" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[1].imagen;
      }

      if (perfilSize === "30x90" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[1].imagen;
      } else if (perfilSize === "30x90" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[1].imagen;
      }

      if (perfilSize === "40x80" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[2].imagen;
      } else if (perfilSize === "40x80" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[2].imagen;
      }

      if (perfilSize === "45x90" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[3].imagen;
      } else if (perfilSize === "45x90" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[3].imagen;
      }

      if (perfilSize === "50x100" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[4].imagen;
      } else if (perfilSize === "50x100" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[4].imagen;
      }

      if (perfilSize === "50x120" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[4].imagen;
      } else if (perfilSize === "50x120" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[4].imagen;
      }

      if (perfilSize === "60x60" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[5].imagen;
      } else if (perfilSize === "60x60" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[5].imagen;
      }

      if (perfilSize === "60x90" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[5].imagen;
      } else if (perfilSize === "60x90" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[5].imagen;
      }

      if (perfilSize === "80x80" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[6].imagen;
      } else if (perfilSize === "80x80" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[6].imagen;
      }

      if (perfilSize === "Modular1" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[7].imagen;
      } else if (perfilSize === "Modular1" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[7].imagen;
      }

      if (perfilSize === "Modular2" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[8].imagen;
      } else if (perfilSize === "Modular2" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[8].imagen;
      }

      if (perfilSize === "Modular3" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[9].imagen;
      } else if (perfilSize === "Modular3" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[9].imagen;
      }

      if (perfilSize === "Modular4" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[10].imagen;
      } else if (perfilSize === "Modular4" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[10].imagen;
      }

      if (perfilSize === "Modular5" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[11].imagen;
      } else if (perfilSize === "Modular5" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[11].imagen;
      }

      if (perfilSize === "Modular6" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[12].imagen;
      } else if (perfilSize === "Modular6" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[12].imagen;
      }

      if (perfilSize === "Modular9" && colorPerfil === "Bronce") {
        cambio = Perfil_1_Bronce[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "Burdeos") {
        cambio = Perfil_1_Burdeos[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "Inox") {
        cambio = Perfil_1_Inox[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "Negro") {
        cambio = Perfil_1_Negro[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "Oro") {
        cambio = Perfil_1_Oro[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "Plata") {
        cambio = Perfil_1_Plata[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "Embero") {
        cambio = Perfil_1_Embero[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "EmberoDorado") {
        cambio = Perfil_1_Embero_Dorado[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "Nogal") {
        cambio = Perfil_1_Nogal[13].imagen;
      } else if (perfilSize === "Modular9" && colorPerfil === "Olmo") {
        cambio = Perfil_1_Olmo[13].imagen;
      }
    }

    setImagenPerfil(cambio);
  };

  return (
    <AppMenu>
      {presionado && menuBase && (
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
      )}
      {menuColorFormato && (
        <MenuCirculos classname='Seleccionar color Formatos'>
          <TituloMenu>Acabados</TituloMenu>
          <ContenedorCirculos>
            {MiniaturasColor.map((miniatura, index) => (
              <TextureContainer
                key={miniatura.id}
                onClick={() => setColorFormato(miniatura.id)}
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
                setImagenPerfil(null)
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
              setPresionado(false),
              setMenuBase(true),
              setMenuColorFormato(false),
              setMenuTipoFormato(false),
              setMenuFormato(false)
            )}
          >
            Aceptar
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
              setPresionado(false),
              setMenuBase(true),
              setMenuColorFormato(false),
              setMenuTipoFormato(false),
              setMenuFormato(false)
            )}
          >
            Aceptar
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
                  setColorPerfil(miniatura.id),
                  console.log("Material", miniatura.id)
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
                onClick={() => setColorPerfil(miniatura.id)}
              >
                <ImgCirculos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainer>
            ))}
          </ContenedorCirculos>
          <BotonMenu
            onClick={() => (setMenuPerfil(true), setMenuColorPerfil(false))}
          >
            Siguiente
          </BotonMenu>
        </MenuCirculos>
      )}
      {menuPerfil && (
        <MenuRectangulos classname='Formatos'>
          <TituloMenu>Cenefas</TituloMenu>
          <ContenedorRectangulo>
            {PerfilesMini.map((miniatura, index) => (
              <TextureContainerRectangulo
                key={miniatura.id}
                onClick={() => handlePerfil(miniatura)}
              >
                <ImgRectangulos src={miniatura.imagen} />
                <TextTextura>{miniatura.name}</TextTextura>
              </TextureContainerRectangulo>
            ))}
          </ContenedorRectangulo>
          <BotonMenu
            onClick={() => (
              setPresionado(false),
              setMenuBase(true),
              setMenuColorFormato(false),
              setMenuTipoFormato(false),
              setMenuFormato(false),
              setMenuPerfil(false)
            )}
          >
            Aceptar
          </BotonMenu>
        </MenuRectangulos>
      )}
    </AppMenu>
  );
};
export default Menu;
