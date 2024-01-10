//Librex
import Leiva1 from "../../../assets/icons/Matrix/Rotador/leiva1.svg";
import Leiva2 from "../../../assets/icons/Matrix/Rotador/leiva2.svg";
import Leiva3 from "../../../assets/icons/Matrix/Rotador/leiva3.svg";
import Leiva4 from "../../../assets/icons/Matrix/Rotador/leiva4.svg";
import Leiva5 from "../../../assets/icons/Matrix/Rotador/leiva5.svg";
import Leiva6 from "../../../assets/icons/Matrix/Rotador/leiva6.svg";
import Leiva7 from "../../../assets/icons/Matrix/Rotador/leiva7.svg";

const PrecargaImg = [Leiva1, Leiva2, Leiva3, Leiva4, Leiva5, Leiva6, Leiva7];

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
        name: "Leiva_1",
        image: Leiva1,
        posicion: 0.11,
      },
      {
        geometries: ["matrix1_2_1", "matrix1_2_2"],
        name: "Leiva_2",
        image: Leiva2,
        posicion: 0.162,
      },
      {
        geometries: ["matrix1_3_1", "matrix1_3_2"],
        name: "Leiva_3",
        image: Leiva3,
        posicion: 0.11,
      },
      {
        geometries: ["matrix1_4_1", "matrix1_4_2"],
        name: "Leiva_4",
        image: Leiva4,
        posicion: 0.293,
      },
      {
        geometries: ["matrix1_5_1", "matrix1_5_2"],
        name: "Leiva_5",
        image: Leiva5,
        posicion: 0.1155,
      },
      {
        geometries: ["matrix1_6_1", "matrix1_6_2"],
        name: "Leiva_6",
        image: Leiva6,
        posicion: 0.1155,
      },
      {
        geometries: ["matrix1_7_1", "matrix1_7_2"],
        name: "Leiva_7",
        image: Leiva7,
        posicion: 0.1155,
      },
    ],
    image: "",
  },
};
