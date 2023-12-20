//Librex
import Librex1 from "../../../assets/icons/Matrix/Rotador/librex1.svg";
import Librex2 from "../../../assets/icons/Matrix/Rotador/librex2.svg";
import Librex3 from "../../../assets/icons/Matrix/Rotador/librex3.svg";
import Librex4 from "../../../assets/icons/Matrix/Rotador/librex4.svg";
import Librex5 from "../../../assets/icons/Matrix/Rotador/librex5.svg";
import Librex6 from "../../../assets/icons/Matrix/Rotador/librex6.svg";
import Librex7 from "../../../assets/icons/Matrix/Rotador/librex7.svg";

const PrecargaImg = [
  Librex1,
  Librex2,
  Librex3,
  Librex4,
  Librex5,
  Librex6,
  Librex7,
];

// export const PreloadImages = () => {
//   useEffect(() => {
//     PrecargaImg.forEach((imagen) => {
//       const img = new Image();
//       img.src = imagen;
//     });
//   }, []);

//   return <></>;
// };

export const Mallas = {
  1: {
    matrices: [
      {
        geometries: ["matriz13_1_1", "matriz13_1_2"],
        name: "Librex_1",
        image: Librex1,
        posicion: 0.15,
      },
      {
        geometries: ["matriz13_2_1", "matriz13_2_2"],
        name: "Librex_2",
        image: Librex2,
        posicion: 0.15,
      },
      {
        geometries: ["matriz13_3_1", "matriz13_3_2"],
        name: "Librex_3",
        image: Librex3,
        posicion: 0.15,
      },
      {
        geometries: ["matriz13_4_1", "matriz13_4_2"],
        name: "Librex_4",
        image: Librex4,
        posicion: 0.15,
      },
      {
        geometries: ["matriz13_5_1", "matriz13_5_2"],
        name: "Librex_5",
        image: Librex5,
        posicion: 0.15,
      },
      {
        geometries: ["matriz13_6_1", "matriz13_6_2"],
        name: "Librex_6",
        image: Librex6,
        posicion: 0.15,
      },
      {
        geometries: ["matriz13_7_1", "matriz13_7_2"],
        name: "Librex_7",
        image: Librex7,
        posicion: 0.15,
      },
    ],
    image: "",
  },
};
