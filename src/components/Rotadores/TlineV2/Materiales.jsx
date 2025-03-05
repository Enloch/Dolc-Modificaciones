import PlataMate from "/texturas/PlataMate.jpg";
import PlataGrata from "/texturas/PlataGrata.jpg";
import PlataGrataRFP from "/texturas/PlataGrata.jpg";
import PlataBrillo from "/texturas/PlataBrillo.jpg";
import OroMate from "/texturas/Matrix/OroMate.jpg";
import OroGrata from "/texturas/OroGrata.jpg";
import OroGrataRFP from "/texturas/OroGrata.jpg";
import BronceMate from "/texturas/BronceMate.jpg";
import BronceGrata from "/texturas/BronceGrata.jpg";
import BronceGrataRFP from "/texturas/BronceGrata.jpg";
import InoxMate from "/texturas/InoxMate.jpg";
import InoxGrata from "/texturas/InoxGrata.jpg";
import InoxGrataRFP from "/texturas/InoxGrata.jpg";
import BurdeosMate from "/texturas/BurdeosMate.jpg";
import BurdeosGrata from "/texturas/BurdeosGrata.jpg";
import BurdeosGrataRFP from "/texturas/BurdeosGrata.jpg";
import NegroGrata from "/texturas/NegroGrata.jpg";
import NegroGrataRFP from "/texturas/NegroGrata.jpg";
import OlmoRugoso from "/texturas/OlmoRugoso.jpg";
import NogalRugoso from "/texturas/NogalRugoso.jpg";
import EmberoDoradoRugoso from "/texturas/EmberoDoradoRugoso.jpg";
import EmberoTexturaRugoso from "/texturas/EmberoTexturaRugoso.jpg";
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

// Definición unificada de materiales para mejorar la consistencia y mantenibilidad
const materialesData = [
  {
    id: 0,
    nombre: "Plata Mate",
    map: PlataMate,
    textura: PlataMateMini,
    tipo: "metal",
    roughness: "0.65",
    metalness: "0.75"
  },
  {
    id: 1,
    nombre: "Plata Grata",
    map: PlataGrata,
    textura: PlataGrataMini,
    tipo: "metal",
    roughness: "0.6",
    metalness: "0.6"
  },
  {
    id: 2,
    nombre: "Plata Grata REP.",
    map: PlataGrataRFP,
    textura: PlataGrataRFPMini,
    tipo: "metal",
    roughness: "0.55",
    metalness: "0.75"
  },
  {
    id: 3,
    nombre: "Plata Brillo",
    map: PlataBrillo,
    textura: PlataBrilloMini,
    tipo: "metal",
    roughness: "0.35",
    metalness: "1"
  },
  {
    id: 4,
    nombre: "Oro Mate",
    map: OroMate,
    textura: OroMateMini,
    tipo: "metal",
    roughness: "0.65",
    metalness: "0.75"
  },
  {
    id: 5,
    nombre: "Oro Grata",
    map: OroGrata,
    textura: OroGrataMini,
    tipo: "metal",
    roughness: "0.6",
    metalness: "0.6"
  },
  {
    id: 6,
    nombre: "Oro Grata REF",
    map: OroGrataRFP,
    textura: OroGrataRFPMini,
    tipo: "metal",
    roughness: "0.55",
    metalness: "0.75"
  },
  {
    id: 7,
    nombre: "Bronce Mate",
    map: BronceMate,
    textura: BronceMateMini,
    tipo: "metal",
    roughness: "0.65",
    metalness: "0.75"
  },
  {
    id: 8,
    nombre: "Bronce Grata",
    map: BronceGrata,
    textura: BronceGrataMini,
    tipo: "metal",
    roughness: "0.6",
    metalness: "0.6"
  },
  {
    id: 9,
    nombre: "Bronce Grata REF",
    map: BronceGrataRFP,
    textura: BronceGrataRFPMini,
    tipo: "metal",
    roughness: "0.55",
    metalness: "0.75"
  },
  {
    id: 10,
    nombre: "Inox Mate",
    map: InoxMate,
    textura: InoxMateMini,
    tipo: "metal",
    roughness: "0.65",
    metalness: "0.75"
  },
  {
    id: 11,
    nombre: "Inox Grata",
    map: InoxGrata,
    textura: InoxGrataMini,
    tipo: "metal",
    roughness: "0.6",
    metalness: "0.6"
  },
  {
    id: 12,
    nombre: "Inox Grata REF",
    map: InoxGrataRFP,
    textura: InoxGrataRFPMini,
    tipo: "metal",
    roughness: "0.55",
    metalness: "0.75"
  },
  {
    id: 13,
    nombre: "Burdeos Mate",
    map: BurdeosMate,
    textura: BurdeosMateMini,
    tipo: "metal",
    roughness: "0.65",
    metalness: "1"
  },
  {
    id: 14,
    nombre: "Burdeos Grata",
    map: BurdeosGrata,
    textura: BurdeosGrataMini,
    tipo: "metal",
    roughness: "0.6",
    metalness: "1"
  },
  {
    id: 15,
    nombre: "Burdeos Grata REF",
    map: BurdeosGrataRFP,
    textura: BurdeosGrataRFPMini,
    tipo: "metal",
    roughness: "0.55",
    metalness: "0.75"
  },
  {
    id: 16,
    nombre: "Negro Grata",
    map: NegroGrata,
    textura: NegroGrataMini,
    tipo: "metal",
    roughness: "0.6",
    metalness: "0.6"
  },
  {
    id: 17,
    nombre: "Negro Grata REF",
    map: NegroGrataRFP,
    textura: NegroGrataRFPMini,
    tipo: "metal",
    roughness: "0.55",
    metalness: "0.75"
  },
  {
    id: 18,
    nombre: "BASR01-01",
    map: OlmoRugoso,
    textura: OlmoRugosoMini,
    tipo: "madera",
    roughness: "0.6",
    metalness: "0.2"
  },
  {
    id: 19,
    nombre: "BASR03-02",
    map: NogalRugoso,
    textura: NogalRugosoMini,
    tipo: "madera",
    roughness: "0.6",
    metalness: "0.2"
  },
  {
    id: 20,
    nombre: "BASR03-04",
    map: EmberoDoradoRugoso,
    textura: EmberoDoradoRugosoMini,
    tipo: "madera",
    roughness: "0.6",
    metalness: "0.2"
  },
  {
    id: 21,
    nombre: "BASR04-01",
    map: EmberoTexturaRugoso,
    textura: EmberoTexturaRugosoMini,
    tipo: "madera",
    roughness: "0.6",
    metalness: "0.2"
  },
];

// Exportar las estructuras de datos derivadas para mantener compatibilidad con el código existente
export const Materiales = materialesData.map(material => ({ map: material.map }));

export const MaterialesMetalizados = materialesData.map(material => ({
  name: material.map,
  roughness: material.roughness,
  metalness: material.metalness
}));

export const NombreMateriales = materialesData.map(material => ({
  nombre: material.nombre,
  textura: material.textura,
  tipo: material.tipo
}));

// Exportar la estructura completa para uso futuro
export default materialesData;
