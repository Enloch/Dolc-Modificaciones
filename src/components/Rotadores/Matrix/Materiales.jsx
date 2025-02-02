import PlataMate from "/texturas/Matrix/PlataMate.jpg";
import PlataGrata from "/texturas/Matrix/PlataGrata.jpg";
import PlataGrataRFP from "/texturas/Matrix/PlataGrata.jpg";
import PlataBrillo from "/texturas/Matrix/PlataBrillo.jpg";
import OroMate from "/texturas/Matrix/OroMate.jpg";
import OroGrata from "/texturas/Matrix/OroGrata.jpg";
import OroGrataRFP from "/texturas/Matrix/OroGrata.jpg";
import BronceMate from "/texturas/Matrix/BronceMate.jpg";
import BronceGrata from "/texturas/Matrix/BronceGrata.jpg";
import BronceGrataRFP from "/texturas/Matrix/BronceGrata.jpg";
import InoxMate from "/texturas/Matrix/InoxMate.jpg";
import InoxGrata from "/texturas/Matrix/InoxGrata.jpg";
import InoxGrataRFP from "/texturas/Matrix/InoxGrata.jpg";
import BurdeosMate from "/texturas/Matrix/BurdeosMate.jpg";
import BurdeosGrata from "/texturas/Matrix/BurdeosGrata.jpg";
import BurdeosGrataRFP from "/texturas/Matrix/BurdeosGrata.jpg";
import NegroGrata from "/texturas/Matrix/NegroGrata.jpg";
import NegroGrataRFP from "/texturas/Matrix/NegroGrata.jpg";
import OlmoRugoso from "/texturas/Matrix/OlmoRugoso.jpg";
import NogalRugoso from "/texturas/Matrix/NogalRugoso.jpg";
import EmberoDoradoRugoso from "/texturas/Matrix/EmberoDoradoRugoso.jpg";
import EmberoTexturaRugoso from "/texturas/Matrix/EmberoTexturaRugoso.jpg";
//minis
import PlataMateMini from "/texturasmini/PlataMate.jpg";
import PlataGrataMini from "/texturasmini/PlataGrata.jpg";
import PlataGrataRFPMini from "/texturasmini/PlataGrata.jpg";
import PlataBrilloMini from "/texturasmini/PlataBrillo.jpg";
import OroMateMini from "/texturasmini/OroMate.jpg";
import OroGrataMini from "/texturasmini/OroGrata.jpg";
import OroGrataRFPMini from "/texturasmini/OroGrata.jpg";
import BronceMateMini from "/texturasmini/BronceMate.jpg";
import BronceGrataMini from "/texturasmini/BronceGrata.jpg";
import BronceGrataRFPMini from "/texturasmini/BronceGrata.jpg";
import InoxMateMini from "/texturasmini/InoxMate.jpg";
import InoxGrataMini from "/texturasmini/InoxGrata.jpg";
import InoxGrataRFPMini from "/texturasmini/InoxGrata.jpg";
import BurdeosMateMini from "/texturasmini/BurdeosMate.jpg";
import BurdeosGrataMini from "/texturasmini/BurdeosGrata.jpg";
import BurdeosGrataRFPMini from "/texturasmini/BurdeosGrata.jpg";
import NegroGrataMini from "/texturasmini/NegroGrata.jpg";
import NegroGrataRFPMini from "/texturasmini/NegroGrata.jpg";
import OlmoRugosoMini from "/texturasmini/OlmoRugoso.jpg";
import NogalRugosoMini from "/texturasmini/NogalRugoso.jpg";
import EmberoDoradoRugosoMini from "/texturasmini/EmberoDoradoRugoso.jpg";
import EmberoTexturaRugosoMini from "/texturasmini/EmberoTexturaRugoso.jpg";

export const Materiales = [
  { map: PlataMate },
  { map: PlataGrata },
  { map: PlataGrataRFP },
  { map: PlataBrillo },
  { map: OroMate },
  { map: OroGrata },
  { map: OroGrataRFP },
  { map: BronceMate },
  { map: BronceGrata },
  { map: BronceGrataRFP },
  { map: InoxMate },
  { map: InoxGrata },
  { map: InoxGrataRFP },
  { map: BurdeosMate },
  { map: BurdeosGrata },
  { map: BurdeosGrataRFP },
  { map: NegroGrata },
  { map: NegroGrataRFP },
  { map: OlmoRugoso },
  { map: NogalRugoso },
  { map: EmberoDoradoRugoso },
  { map: EmberoTexturaRugoso },
];
export const MaterialesMetalizados = [
  { name: PlataMate, roughness: "0.65", metalness: "1" },
  { name: PlataGrata, roughness: "0.6", metalness: "1" },
  { name: PlataGrataRFP, roughness: "0.55", metalness: "1" },
  { name: PlataBrillo, roughness: "0.5", metalness: "1" },
  { name: OroMate, roughness: "0.65", metalness: "1" },
  { name: OroGrata, roughness: "0.65", metalness: "1" },
  { name: OroGrataRFP, roughness: "0.65", metalness: "1" },
  { name: BronceMate, roughness: "0.65", metalness: "1" },
  { name: BronceGrata, roughness: "0.6", metalness: "1" },
  { name: BronceGrataRFP, roughness: "0.55", metalness: "1" },
  { name: InoxMate, roughness: "0.65", metalness: "1" },
  { name: InoxGrata, roughness: "0.6", metalness: "1" },
  { name: InoxGrataRFP, roughness: "0.55", metalness: "1" },
  { name: BurdeosMate, roughness: "0.65", metalness: "1" },
  { name: BurdeosGrata, roughness: "0.6", metalness: "1" },
  { name: BurdeosGrataRFP, roughness: "0.55", metalness: "1" },
  { name: NegroGrata, roughness: "0.6", metalness: "1" },
  { name: NegroGrataRFP, roughness: "0.55", metalness: "1" },
  { name: OlmoRugoso, roughness: "0.4", metalness: "0" },
  { name: NogalRugoso, roughness: "0.4", metalness: "0" },
  { name: EmberoDoradoRugoso, roughness: "0.4", metalness: "0" },
  { name: EmberoTexturaRugoso, roughness: "0.4", metalness: "0" },
];
export const NombreMateriales = [
  { nombre: "Plata Mate", textura: PlataMateMini, tipo: "metal" },
  { nombre: "Plata Grata", textura: PlataGrataMini, tipo: "metal" },
  { nombre: "Plata Grata REP.", textura: PlataGrataRFPMini, tipo: "metal" },
  { nombre: "Plata Brillo", textura: PlataBrilloMini, tipo: "metal" },
  { nombre: "Oro Mate", textura: OroMateMini, tipo: "metal" },
  { nombre: "Oro Grata", textura: OroGrataMini, tipo: "metal" },
  { nombre: "Oro Grata REF", textura: OroGrataRFPMini, tipo: "metal" },
  { nombre: "Bronce Mate", textura: BronceMateMini, tipo: "metal" },
  { nombre: "Bronce Grata", textura: BronceGrataMini, tipo: "metal" },
  { nombre: "Bronce Grata REF", textura: BronceGrataRFPMini, tipo: "metal" },
  { nombre: "Inox Mate", textura: InoxMateMini, tipo: "metal" },
  { nombre: "Inox Grata", textura: InoxGrataMini, tipo: "metal" },
  { nombre: "Inox Grata REF", textura: InoxGrataRFPMini, tipo: "metal" },
  { nombre: "Burdeos Mate", textura: BurdeosMateMini, tipo: "metal" },
  { nombre: "Burdeos Grata", textura: BurdeosGrataMini, tipo: "metal" },
  {
    nombre: "Burdeos Grata REF",
    textura: BurdeosGrataRFPMini,
    tipo: "metal",
  },
  { nombre: "Negro Grata", textura: NegroGrataMini, tipo: "metal" },
  { nombre: "Negro Grata REF", textura: NegroGrataRFPMini, tipo: "metal" },
  { nombre: "BASR01-01", textura: OlmoRugosoMini, tipo: "madera" },
  { nombre: "BASR03-02", textura: NogalRugosoMini, tipo: "madera" },
  { nombre: "BASR03-04", textura: EmberoDoradoRugosoMini, tipo: "madera" },
  { nombre: "BASR04-01", textura: EmberoTexturaRugosoMini, tipo: "madera" },
];
