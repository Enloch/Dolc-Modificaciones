import { useState } from "react";
import { Titulo2 } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledIndiceSeries from "./styles";
import Modal from "../../../../components/Modal";
import SeriesCard from "./SeriesCard";
import Slider from "react-slick";

// Import slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  { id: 1, name: "Allure Anthracite Soft Textured", image: allureAnthracite },
  { id: 2, name: "Allure Light Grey Soft Textured", image: allureLightGrey },
  { id: 3, name: "Atlantis Gold Silk", image: atlantisGold },
  { id: 4, name: "Atlantis Silk", image: atlantisSilk },
  { id: 5, name: "Bahia Black Satin", image: bahiaBlack },
  { id: 6, name: "Basic Blanco Natural", image: basicBlanco },
  { id: 7, name: "Bera Ice Soft", image: beraice },
  { id: 8, name: "Beren Light Grey Soft", image: berenLightGrey },
  { id: 9, name: "Berici Beige Satin", image: bericiBeige },
  { id: 10, name: "Berici Bianco Satin", image: bericiBianco },
  { id: 11, name: "Blanc Borghini Soft Textured", image: blancBorghini },
  { id: 12, name: "Blanc Calacatta Soft Textured", image: blancCalacatta },
  { id: 13, name: "Blanc Calacatta Gold Soft", image: blancCalacattaGold },
  { id: 14, name: "Blanc Statuario Gold Soft", image: blancStatuarioGold },
  { id: 15, name: "Blue Roma Natural", image: blueRoma },
  { id: 16, name: "Brazil Superwhite Hond", image: brazilSw },
  { id: 17, name: "Breccia Imperiale Satin", image: brecciaImperiale },
  { id: 18, name: "Calacatta Natural", image: calacatta },
  { id: 19, name: "Calacata Gold Hond", image: calacattaGold },
  { id: 20, name: "Calacata Paonazzo Pulido O Hond", image: calacattaPaonazzo },
  {
    id: 21,
    name: "Calacatta Suprem Satin Puro 3D Ink",
    image: calacattaSupreme,
  },
  { id: 22, name: "Camargue Arena Natural", image: camargueArena },
  { id: 23, name: "Camargue Blanco Natural", image: camargueBlanco },
  { id: 24, name: "Canela Roma Natural", image: canelaRoma },
  { id: 25, name: "Capraia Natural", image: capraia },
  { id: 26, name: "Corinto Natural", image: corinto },
  { id: 27, name: "Cuarzo Reno Natural O Pulido", image: cuarzoReno },
  { id: 28, name: "Distrito Aluminio Natural", image: distritoAluminio },
  { id: 29, name: "Distrito Marfil Natural", image: distritoMarfil },
  { id: 30, name: "Dual White", image: dualWhite },
  { id: 31, name: "Eden Sand", image: edenSand },
  { id: 32, name: "Edra Light Soft", image: edraLight },
  { id: 33, name: "Eme Light Grey Soft Textured", image: emeLightGrey },
  { id: 34, name: "Era Deep Black Soft", image: eraDeepBlack },
  { id: 35, name: "Era Infinity White Soft", image: eraInfinityWhite },
  { id: 36, name: "Estatuario Hond O Pulido", image: estatuario },
  { id: 37, name: "Estatuario Book Natural O Pulido", image: estatuarioBook },
  { id: 38, name: "Golden White", image: goldenWhite },
  { id: 39, name: "Iceberg Natural", image: iceberg },
  { id: 40, name: "Jungla Ciprés Natural", image: junglaCipres },
  { id: 41, name: "Jungla Roble Natural", image: junglaRoble },
  { id: 42, name: "Kendo Light Soft Textured", image: kendoLight },
  { id: 43, name: "Limestone Ivory Satin", image: limestoneIvory },
  { id: 44, name: "Limestone Sand", image: limestoneSand },
  { id: 45, name: "Linen Desert", image: linen },
  { id: 46, name: "Linen Cloud", image: linenCloud },
  { id: 47, name: "Macchia Vecchia Natural", image: macchiaVecchia },
  { id: 48, name: "Melbourne Hond", image: melbourne },
  { id: 49, name: "Negro Marquina Silk", image: negroMarquina },
  { id: 50, name: "Nero Ardi Natural", image: neroArdi },
  { id: 51, name: "Noon Grey Soft Textured", image: noonGrey },
  { id: 52, name: "Noon Sand Soft Textured", image: noonSand },
  { id: 53, name: "Wood Oak Satin", image: oakSatin },
  { id: 54, name: "Paladio Natural", image: paladio },
  { id: 55, name: "Pórfido Sand Natural", image: porfidoSand },
  { id: 56, name: "Pure Superwhite Hond O Pulido", image: pureSw },
  { id: 57, name: "Sahara Noir Hond", image: saharaNoir },
  { id: 58, name: "Silver Root Satin", image: silverRoot },
  { id: 59, name: "Sublime Iceberg", image: sublimeIceberg },
  { id: 60, name: "Supreme", image: supreme },
  { id: 61, name: "Syrac Hond", image: syrac },
  { id: 62, name: "Taj Mahal Natural", image: tajMahal },
  { id: 63, name: "Titán Antracita Natural", image: titanAntracita },
  { id: 64, name: "Titán Cemento Natural", image: titanCemento },
  {
    id: 65,
    name: "Travertini Classico Puro 3D Ink",
    image: travertinoClassico,
  },
  { id: 66, name: "Tundra Beige Natural", image: tundraBeige },
  { id: 67, name: "Tundra Greige Natural", image: tundraGreige },
  {
    id: 68,
    name: "Verso Cross Cut Classic Natural",
    image: versoCrosscutClassic,
  },
  { id: 69, name: "Verso Vein Cut Light Honed", image: versoVeincutLight },
  { id: 70, name: "Vonn Light Soft", image: vonn },
  { id: 71, name: "Wega Black Soft Textured", image: wegaBlack },
];

const IndiceSeries = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: false, // Desactivar puntos en móviles muy pequeños
        },
      },
    ],
  };

  return (
    <StyledIndiceSeries id={id} backgroundColor={COLORS.gray02}>
      <Titulo2>SERIES</Titulo2>

      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {seriesData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((series) => (
              <div key={series.id} className="carousel-item">
                <SeriesCard
                  name={series.name}
                  size={series.size}
                  image={series.image}
                  onClick={() => openModal(series)}
                />
              </div>
            ))}
        </Slider>
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
