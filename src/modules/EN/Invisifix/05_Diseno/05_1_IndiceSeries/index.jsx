import { useState } from "react";
import { Titulo2, Titulo3 } from "../../../../../components/Titulos";
import { COLORS } from "../../../../../global/GlobalStyles";
import StyledIndiceSeries from "./styles";
import Slider from "react-slick";
import Modal from "../../../../../components/Modal";
import SeriesCard from "./SeriesCard";
import { seriesInvisifix, seriesTline, seriesInvisifixClean } from "./data";

// Import slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          dots: false,
        },
      },
    ],
  };

  return (
    <StyledIndiceSeries id={id} backgroundColor={COLORS.gray02}>
      <Titulo2>SERIES</Titulo2>

      {/* Sección Invisifix */}
      <Titulo3>System</Titulo3>
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {seriesInvisifix.map((series) => (
            <div key={series.id} className="carousel-item">
              <SeriesCard
                name={series.name}
                image={series.image}
                onClick={() => openModal(series)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Sección Tline */}
      <Titulo3>TLINE</Titulo3>
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {seriesTline.map((series) => (
            <div key={series.id} className="carousel-item">
              <SeriesCard
                name={series.name}
                image={series.image}
                onClick={() => openModal(series)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Sección Invisifix Clean */}
      <Titulo3>Clean</Titulo3>
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {seriesInvisifixClean.map((series) => (
            <div key={series.id} className="carousel-item">
              <SeriesCard
                name={series.name}
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
        caption={selectedImage ? selectedImage.name : ""}
      >
        {selectedImage && (
          <img src={selectedImage.image} alt={selectedImage.name} />
        )}
      </Modal>
    </StyledIndiceSeries>
  );
};

export default IndiceSeries;
