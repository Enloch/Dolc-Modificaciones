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
        geometries: ["matrix1_1_1", "matrix1_1_2"],
        name: "Librex_1",
        image: Librex1,
        posicion: 0.11,
      },
      {
        geometries: ["matrix1_2_1", "matrix1_2_2"],
        name: "Librex_2",
        image: Librex2,
        posicion: 0.162,
      },
      {
        geometries: ["matrix1_3_1", "matrix1_3_2"],
        name: "Librex_3",
        image: Librex3,
        posicion: 0.11,
      },
      {
        geometries: ["matrix1_4_1", "matrix1_4_2"],
        name: "Librex_4",
        image: Librex4,
        posicion: 0.293,
      },
      {
        geometries: ["matrix1_5_1", "matrix1_5_2"],
        name: "Librex_5",
        image: Librex5,
        posicion: 0.1155,
      },
      {
        geometries: ["matrix1_6_1", "matrix1_6_2"],
        name: "Librex_6",
        image: Librex6,
        posicion: 0.1155,
      },
      {
        geometries: ["matrix1_7_1", "matrix1_7_2"],
        name: "Librex_7",
        image: Librex7,
        posicion: 0.1155,
      },
    ],
    image: "",
  },
};
