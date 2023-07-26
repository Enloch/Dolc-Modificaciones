import getDataFromModules from "../helpers/getDataFromModules";

const flamed = import.meta.globEager(
    "../assets/images/DolckerTline/Diseno/Acabados/RENDER FLAMED/**"
  ),
  pulido = import.meta.globEager(
    "../assets/images/DolckerTline/Diseno/Acabados/RENDER PULIDO/**"
  ),
  mate = import.meta.globEager(
    "../assets/images/DolckerTline/Diseno/Acabados/RENDER MATE/**"
  );

const flamedImports = getDataFromModules(flamed),
  pulidoImports = getDataFromModules(pulido),
  mateImports = getDataFromModules(mate);

const config = {
  indicadores: [
    { top: "35%", left: "40%" },
    { top: "48%", left: "54%" },
    { top: "60%", left: "65%" },
  ],
  desplazadores: [
    {
      titulo: "Mate",
      imgs: mateImports,
    },
    {
      titulo: "Pulido",
      imgs: pulidoImports,
    },
    {
      titulo: "Rústico",
      imgs: flamedImports,
    },
  ],
};

export default config;
