import getDataFromModules from "../helpers/getDataFromModules";
const piezasImport = import.meta.globEager("../assets/icons/Matrix/piezas/**");
const piezas = getDataFromModules(piezasImport);

const config = [
  {
    top: "20%",
    left: "18%",
    content: {
      imgSrc: piezas[0],
      title: "Coronación",
    },
  },
  {
    top: "23%",
    left: "76%",
    content: {
      imgSrc: piezas[1],
      title: "Esquina A",
    },
  },
  //   {
  //     top: "70.3%",
  //     left: "77.3%",
  //     content: {
  //       imgSrc: piezas[2],
  //       title: "Esquina b",
  //     },
  //   },
  {
    top: "66%",
    left: "16%",
    content: {
      imgSrc: piezas[3],
      title: "LED",
    },
  },
  {
    top: "48%",
    left: "31%",
    content: {
      imgSrc: piezas[4],
      title: "Recerco",
    },
  },
  {
    top: "73%",
    left: "60%",
    content: {
      imgSrc: piezas[5],
      title: "Rejilla",
    },
  },
];

export default config;
