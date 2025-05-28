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

// NEW CATALOG FOR PERFILES - Ensure main textures like OlmoRugoso, NogalRugoso, etc., are imported at the top of this file.
export const CatalogoPerfiles = {
  OLMO_RUGOSO: {
    id: "OLMO_RUGOSO",
    label: "Olmo", // Label from your ui.jsx snippet
    mainTexture: OlmoRugoso,
    miniTexture: OlmoRugosoMini,
    roughness: 0.4,
    metalness: 0.0,
  },
  NOGAL_RUGOSO: {
    id: "NOGAL_RUGOSO",
    label: "Nogal Rugoso",
    mainTexture: NogalRugoso,
    miniTexture: NogalRugosoMini,
    roughness: 0.4,
    metalness: 0.0,
  },
  EMBERO_DORADO_RUGOSO: {
    id: "EMBERO_DORADO_RUGOSO",
    label: "Embero Dorado", // Label from your ui.jsx snippet
    mainTexture: EmberoDoradoRugoso,
    miniTexture: EmberoDoradoRugosoMini,
    roughness: 0.4,
    metalness: 0.0,
  },
  EMBERO_TEXTURA_RUGOSO: {
    id: "EMBERO_TEXTURA_RUGOSO",
    label: "Embero", // Label from your ui.jsx snippet
    mainTexture: EmberoTexturaRugoso,
    miniTexture: EmberoTexturaRugosoMini,
    roughness: 0.4,
    metalness: 0.0,
  },
  PLATA_BRILLO: {
    id: "PLATA_BRILLO",
    label: "Plata Brillo",
    mainTexture: null, // Ensure PlataBrillo is imported
    miniTexture: PlataBrilloMini, // Ensure PlataBrilloMini is imported
    color: "#bababa",
    roughness: 0.2, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  PLATA_MATE: {
    id: "PLATA_MATE",
    label: "Plata Mate",
    mainTexture: null, // Ensure PlataMate is imported
    miniTexture: PlataMateMini, // Ensure PlataMateMini is imported
    color: "#bababa",
    roughness: 0.3, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  PLATA_GRATA: {
    id: "PLATA_GRATA",
    label: "Plata Grata",
    mainTexture: null, // Ensure PlataGrata is imported
    miniTexture: PlataGrataMini, // Ensure PlataGrataMini is imported
    color: "#bababa",
    roughness: 0.4, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  PLATA_GRATA_RFP: {
    id: "PLATA_GRATA_RFP",
    label: "Plata Grata RFP",
    mainTexture: null, // Ensure PlataGrataRFP is imported
    miniTexture: PlataGrataRFPMini, // Ensure PlataGrataRFPMini is imported
    color: "#bababa",
    roughness: 0.5, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizadoss
  },

  ORO_MATE: {
    id: "ORO_MATE",
    label: "Oro Mate",
    mainTexture: null, // Ensure OroMate is imported
    miniTexture: OroMateMini, // Ensure OroMateMini is imported
    color: "#cfaa66",
    roughness: 0.3, // From MaterialesMetalizados
    metalness: 1, // From MaterialesMetalizados
  },
  ORO_GRATA: {
    id: "ORO_GRATA",
    label: "Oro Grata",
    mainTexture: null, // Ensure OroGrata is imported
    miniTexture: OroGrataMini, // Ensure OroGrataMini is imported
    color: "#cfaa66",
    roughness: 0.4, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  ORO_GRATA_RFP: {
    id: "ORO_GRATA_RFP",
    label: "Oro Grata RFP",
    mainTexture: null, // Ensure OroGrataRFP is imported
    miniTexture: OroGrataRFPMini, // Ensure OroGrataRFPMini is imported
    color: "#cfaa66",
    roughness: 0.5, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  BRONCE_MATE: {
    id: "BRONCE_MATE",
    label: "Bronce Mate",
    mainTexture: null, // Ensure BronceMate is imported
    miniTexture: BronceMateMini, // Ensure BronceMateMini is imported
    color: "#645035",
    roughness: 0.3, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  BRONCE_GRATA: {
    id: "BRONCE_GRATA",
    label: "Bronce Grata",
    mainTexture: null, // Ensure BronceGrata is imported
    miniTexture: BronceGrataMini, // Ensure BronceGrataMini is imported
    color: "#645035",
    roughness: 0.4, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  BRONCE_GRATA_RFP: {
    id: "BRONCE_GRATA_RFP",
    label: "Bronce Grata RFP",
    mainTexture: null, // Ensure BronceGrataRFP is imported
    miniTexture: BronceGrataRFPMini, // Ensure BronceGrataRFPMini is imported
    color: "#645035",
    roughness: 0.5, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  INOX_MATE: {
    id: "INOX_MATE",
    label: "Inox Mate",
    mainTexture: null, // Ensure InoxMate is imported
    miniTexture: InoxMateMini, // Ensure InoxMateMini is imported
    color: "#b8b1a5",
    roughness: 0.3, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  INOX_GRATA: {
    id: "INOX_GRATA",
    label: "Inox Grata",
    mainTexture: null, // Ensure InoxGrata is imported
    miniTexture: InoxGrataMini, // Ensure InoxGrataMini is imported
    color: "#b8b1a5",
    roughness: 0.4, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  INOX_GRATA_RFP: {
    id: "INOX_GRATA_RFP",
    label: "Inox Grata RFP",
    mainTexture: null, // Ensure InoxGrataRFP is imported
    miniTexture: InoxGrataRFPMini, // Ensure InoxGrataRFPMini is imported
    color: "#b8b1a5",
    roughness: 0.5, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  BURDEOS_MATE: {
    id: "BURDEOS_MATE",
    label: "Burdeos Mate",
    mainTexture: null, // Ensure BurdeosMate is imported
    miniTexture: BurdeosMateMini, // Ensure BurdeosMateMini is importe d
    color: "#631610",
    roughness: 0.3, // From MaterialesMetalizados
    metalness: 1, // From MaterialesMetalizados
  },
  BURDEOS_GRATA: {
    id: "BURDEOS_GRATA",
    label: "Burdeos Grata",
    mainTexture: null, // Ensure BurdeosGrata is imported
    miniTexture: BurdeosGrataMini, // Ensure BurdeosGrataMini is imported
    color: "#631610",
    roughness: 0.4, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  BURDEOS_GRATA_RFP: {
    id: "BURDEOS_GRATA_RFP",
    label: "Burdeos Grata RFP",
    mainTexture: null, // Ensure BurdeosGrataRFP is imported
    miniTexture: BurdeosGrataRFPMini, // Ensure BurdeosGrataRFPMini is imported
    color: "#631610",
    roughness: 0.5, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  NEGRO_GRATA: {
    id: "NEGRO_GRATA",
    label: "Negro Grata",
    mainTexture: null, // Ensure NegroGrata is imported
    miniTexture: NegroGrataMini, // Ensure NegroGrataMini is imported
    color: "#202020",
    roughness: 0.4, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
  NEGRO_GRATA_RFP: {
    id: "NEGRO_GRATA_RFP",
    label: "Negro Grata RFP",
    mainTexture: null, // Ensure NegroGrata is imported
    miniTexture: NegroGrataRFPMini, // Ensure NegroGrataMini is imported
    color: "#202020",
    roughness: 0.5, // From MaterialesMetalizados
    metalness: 1.0, // From MaterialesMetalizados
  },
};
