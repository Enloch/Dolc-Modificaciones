import { useState, useEffect, useRef } from "react";
import { Titulo2 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledIndiceSeries from "./styles";
import Modal from "../../../../components/Modal";
import SeriesCard from "./SeriesCard";

// Import images
import atlantisSilk from "../../../../assets/images/T5/Series/atlantissilk.webp";
import atlantisGold from "../../../../assets/images/T5/Series/atlantisgold.webp";
import brazilSw from "../../../../assets/images/T5/Series/brazilsw.webp";
import calacattaGold from "../../../../assets/images/T5/Series/calacattagold.webp";
import calacattaPaonazzo from "../../../../assets/images/T5/Series/calacattapaonazzo.webp";
import estatuario from "../../../../assets/images/T5/Series/estatuario.webp";
import melbourne from "../../../../assets/images/T5/Series/melbourne.webp";
import negroMarquina from "../../../../assets/images/T5/Series/negromarquina.webp";
import tundraBeige from "../../../../assets/images/T5/Series/Tundra-Beige_1.jpg";
import tundraGreige from "../../../../assets/images/T5/Series/Tundra-Greige_1.jpg";
import pureSw from "../../../../assets/images/T5/Series/puresw.webp";
import saharaNoir from "../../../../assets/images/T5/Series/saharanoir.webp";
import syrac from "../../../../assets/images/T5/Series/syrac.webp";
import allureAnthracite from "../../../../assets/images/T5/Series/allureanthracite.webp";
import allureLightGrey from "../../../../assets/images/T5/Series/allurelightgrey.webp";
import basicBlanco from "../../../../assets/images/T5/Series/basicblanco.webp";
import beraice from "../../../../assets/images/T5/Series/beraice.webp";
import berenLightGrey from "../../../../assets/images/T5/Series/berenlightgrey.webp";
import bahiaBlack from "../../../../assets/images/T5/Series/BAHIA-BLACK_1.jpg";
import bericiBeige from "../../../../assets/images/T5/Series/BERICI-BEIGE_1.jpg";
import bericiBianco from "../../../../assets/images/T5/Series/BERICI-BIANCO_1.jpg";
import blancBorghini from "../../../../assets/images/T5/Series/blancborghini.webp";
import blancCalacatta from "../../../../assets/images/T5/Series/blanccalacatta.webp";
import blancCalacattaGold from "../../../../assets/images/T5/Series/blanccalacattagold.webp";
import blancStatuarioGold from "../../../../assets/images/T5/Series/blancstatuariogold.webp";
import blueRoma from "../../../../assets/images/T5/Series/BLUE-ROMA.jpg";
import brecciaImperiale from "../../../../assets/images/T5/Series/BRECCIA-IMPERIALE_1.jpg";
import calacatta from "../../../../assets/images/T5/Series/calacatta_1.webp";
import calacattaSupreme from "../../../../assets/images/T5/Series/CALACATTA-SUPREME_1.jpg";
import camargueArena from "../../../../assets/images/T5/Series/camarguearena.webp";
import camargueBlanco from "../../../../assets/images/T5/Series/camargueblanco.webp";
import canelaRoma from "../../../../assets/images/T5/Series/CANELA-ROMA.jpg";
import capraia from "../../../../assets/images/T5/Series/CAPRAIA.jpg";
import corinto from "../../../../assets/images/T5/Series/corinto_1.webp";
import cuarzoReno from "../../../../assets/images/T5/Series/cuarzoreno.webp";
import distritoAluminio from "../../../../assets/images/T5/Series/distritoaluminio.webp";
import distritoMarfil from "../../../../assets/images/T5/Series/distritomarfil.webp";
import dualWhite from "../../../../assets/images/T5/Series/dualwhite.webp";
import edenSand from "../../../../assets/images/T5/Series/EDEN_Sand_1.jpg";
import edraLight from "../../../../assets/images/T5/Series/edralight.webp";
import emeLightGrey from "../../../../assets/images/T5/Series/emelightgrey.webp";
import eraDeepBlack from "../../../../assets/images/T5/Series/eradeepblack.webp";
import eraInfinityWhite from "../../../../assets/images/T5/Series/erainfinitywhite.webp";
import estatuarioBook from "../../../../assets/images/T5/Series/estatuariobook.webp";
import goldenWhite from "../../../../assets/images/T5/Series/GOLDEN-WHITE_1.jpg";
import iceberg from "../../../../assets/images/T5/Series/iceberg_1.webp";
import junglaRoble from "../../../../assets/images/T5/Series/JUNGLA-ROBLE.jpg";
import junglaCipres from "../../../../assets/images/T5/Series/junglacipres.webp";
import kendoLight from "../../../../assets/images/T5/Series/kendolight.webp";
import limestoneIvory from "../../../../assets/images/T5/Series/LIMESTONE-IVORY-SATIN_1.jpg";
import limestoneSand from "../../../../assets/images/T5/Series/LIMESTONE-SAND_1.jpg";
import linenCloud from "../../../../assets/images/T5/Series/LINEN_CLOUD_1.jpg";
import linen from "../../../../assets/images/T5/Series/linen.webp";
import macchiaVecchia from "../../../../assets/images/T5/Series/macchiavecchia.webp";
import neroArdi from "../../../../assets/images/T5/Series/neroardi.webp";
import noonGrey from "../../../../assets/images/T5/Series/noongrey.webp";
import noonSand from "../../../../assets/images/T5/Series/noonsand.webp";
import oakSatin from "../../../../assets/images/T5/Series/OAK-SATIN_1.jpg";
import paladio from "../../../../assets/images/T5/Series/paladio_1.webp";
import porfidoSand from "../../../../assets/images/T5/Series/porfidosand.webp";
import silverRoot from "../../../../assets/images/T5/Series/SILVER-ROOT_1.jpg";
import sublimeIceberg from "../../../../assets/images/T5/Series/sublimeiceberg.webp";
import supreme from "../../../../assets/images/T5/Series/supreme.webp";
import tajMahal from "../../../../assets/images/T5/Series/tajmahal.webp";
import titanAntracita from "../../../../assets/images/T5/Series/titanantracita.webp";
import titanCemento from "../../../../assets/images/T5/Series/titancemento.webp";
import travertinoClassico from "../../../../assets/images/T5/Series/TRAVERTINO-CLASSICO_1.jpg";
import versoCrosscutClassic from "../../../../assets/images/T5/Series/VERSO_CROSSCUT_CLASSIC_NATURAL_1.jpg";
import versoVeincutLight from "../../../../assets/images/T5/Series/VERSO_VEINCUT_LIGHT_HONED_1.jpg";
import vonn from "../../../../assets/images/T5/Series/vonn_1.webp";
import wegaBlack from "../../../../assets/images/T5/Series/wegablack.webp";

// Series data with image information
const seriesData = [
  { id: 1, name: "Allure anthracite soft textured", image: allureAnthracite },
  { id: 2, name: "Allure light grey soft textured", image: allureLightGrey },
  { id: 3, name: "Atlantis gold silk", image: atlantisGold },
  { id: 4, name: "Atlantis silk", image: atlantisSilk },
  { id: 5, name: "Bahia black satin", image: bahiaBlack },
  { id: 6, name: "Basic blanco natural", image: basicBlanco },
  { id: 7, name: "Bera ice soft", image: beraice },
  { id: 8, name: "Beren light grey soft", image: berenLightGrey },
  { id: 9, name: "Berici beige satin", image: bericiBeige },
  { id: 10, name: "Berici bianco satin", image: bericiBianco },
  { id: 11, name: "Blanc borghini soft textured", image: blancBorghini },
  { id: 12, name: "Blanc calacatta soft textured", image: blancCalacatta },
  { id: 13, name: "Blanc calacatta gold soft", image: blancCalacattaGold },
  { id: 14, name: "Blanc statuario gold soft", image: blancStatuarioGold },
  { id: 15, name: "Blue roma natural", image: blueRoma },
  { id: 16, name: "Brazil superwhite hond", image: brazilSw },
  { id: 17, name: "Breccia imperiale satin", image: brecciaImperiale },
  { id: 18, name: "Calacatta natural", image: calacatta },
  { id: 19, name: "Calacata gold hond", image: calacattaGold },
  { id: 20, name: "Calacata paonazzo pulido o hond", image: calacattaPaonazzo },
  {
    id: 21,
    name: "Calacatta suprem satin puro 3d ink",
    image: calacattaSupreme,
  },
  { id: 22, name: "Camargue arena natural", image: camargueArena },
  { id: 23, name: "Camargue blanco natural", image: camargueBlanco },
  { id: 24, name: "Canela roma natural", image: canelaRoma },
  { id: 25, name: "Capraia natural", image: capraia },
  { id: 26, name: "Corinto natural", image: corinto },
  { id: 27, name: "Cuarzo reno natural o pulido", image: cuarzoReno },
  { id: 28, name: "Distrito aluminio natural", image: distritoAluminio },
  { id: 29, name: "Distrito marfil natural", image: distritoMarfil },
  { id: 30, name: "Dual white", image: dualWhite },
  { id: 31, name: "Eden sand", image: edenSand },
  { id: 32, name: "Edra light soft", image: edraLight },
  { id: 33, name: "Eme light grey soft textured", image: emeLightGrey },
  { id: 34, name: "Era deep black soft", image: eraDeepBlack },
  { id: 35, name: "Era infinity white soft", image: eraInfinityWhite },
  { id: 36, name: "Estatuario hond o pulido", image: estatuario },
  { id: 37, name: "Estatuario book natural o pulido", image: estatuarioBook },
  { id: 38, name: "Golden white", image: goldenWhite },
  { id: 39, name: "Iceberg natural", image: iceberg },
  { id: 40, name: "Jungla ciprés natural", image: junglaCipres },
  { id: 41, name: "Jungla roble natural", image: junglaRoble },
  { id: 42, name: "Kendo light soft textured", image: kendoLight },
  { id: 43, name: "Limestone ivory satin", image: limestoneIvory },
  { id: 44, name: "Limestone sand", image: limestoneSand },
  { id: 45, name: "Linen desert", image: linen },
  { id: 46, name: "Linen cloud", image: linenCloud },
  { id: 47, name: "Macchia vecchia natural", image: macchiaVecchia },
  { id: 48, name: "Melbourne hond", image: melbourne },
  { id: 49, name: "Negro marquina silk", image: negroMarquina },
  { id: 50, name: "Nero ardi natural", image: neroArdi },
  { id: 51, name: "Noon grey soft textured", image: noonGrey },
  { id: 52, name: "Noon sand soft textured", image: noonSand },
  { id: 53, name: "Wood oak satin", image: oakSatin },
  { id: 54, name: "Paladio natural", image: paladio },
  { id: 55, name: "Pórfido sand natural", image: porfidoSand },
  { id: 56, name: "Pure superwhite hond o pulido", image: pureSw },
  { id: 57, name: "Sahara noir hond", image: saharaNoir },
  { id: 58, name: "Silver root satin", image: silverRoot },
  { id: 59, name: "Sublime iceberg", image: sublimeIceberg },
  { id: 60, name: "Supreme", image: supreme },
  { id: 61, name: "Syrac hond", image: syrac },
  { id: 62, name: "Taj mahal natural", image: tajMahal },
  { id: 63, name: "Titán antracita natural", image: titanAntracita },
  { id: 64, name: "Titán cemento natural", image: titanCemento },
  {
    id: 65,
    name: "Travertini classico puro 3d ink",
    image: travertinoClassico,
  },
  { id: 66, name: "Tundra beige natural", image: tundraBeige },
  { id: 67, name: "Tundra greige natural", image: tundraGreige },
  {
    id: 68,
    name: "Verso cross cut classic natural",
    image: versoCrosscutClassic,
  },
  { id: 69, name: "Verso vein cut light honed", image: versoVeincutLight },
  { id: 70, name: "Vonn light soft", image: vonn },
  { id: 71, name: "Wega black soft textured", image: wegaBlack },
];

const IndiceSeries = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Responsive itemsPerPage - 4 for desktop, 2 for mobile
  const itemsPerPage = windowWidth <= 768 ? 2 : 4;

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the total number of pages
  const totalItems = seriesData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Sort the series data alphabetically
  const sortedSeriesData = [...seriesData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  // Get current items to display
  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return sortedSeriesData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <StyledIndiceSeries id={id} backgroundColor={COLORS.gray02}>
      <Titulo2>SERIES</Titulo2>

      <div className="carousel-container">
        <button className="carousel-arrow prev" onClick={prevSlide}>
          &lt;
        </button>

        <div className="carousel-items">
          {getCurrentItems().map((series) => (
            <SeriesCard
              key={series.id}
              name={series.name}
              image={series.image}
              onClick={() => openModal(series)}
            />
          ))}
        </div>

        <button className="carousel-arrow next" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        caption={selectedImage ? `${selectedImage.name}` : ""}
      >
        {selectedImage && (
          <img src={selectedImage.image} alt={selectedImage.name} />
        )}
      </Modal>
    </StyledIndiceSeries>
  );
};

export default IndiceSeries;
