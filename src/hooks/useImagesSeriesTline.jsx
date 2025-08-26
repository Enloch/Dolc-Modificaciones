/* eslint-disable react/jsx-key */
import { Children } from "react";
import getDataFromModules from "../helpers/getDataFromModules";
import Enlace from "../modules/ES/System/06_Diseno/06_1_IndiceSeries/Enlace";
import img1 from "../assets/images/DolckerTline/ranurado11mm.webp";
const imagenesAmbienteImports = import.meta.globEager("../assets/images/DolckerTline/Series/**/EJEMPLO/**");

const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports);

const enlacesObj = [
	{
		titulo: "DOLCKER & LINE ARD",
		formato: "120x120/90x180/90x90/45x90/60x120",
		src: imagenesAmbiente[0],
		id: "#ard",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE BALM",
		formato: "60x60/30x90/80x80/80x160/60x120",
		src: imagenesAmbiente[1],
		id: "#balm",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE BELLA",
		formato: "260x120/120x120/60x120/80x160/60x60",
		src: imagenesAmbiente[2],
		id: "#bella",
		categoria: "Marmol",
	},
	{
		titulo: "DOLCKER & LINE BYB",
		formato: "60x120/80x160/260x120/30x60/120x120/80x80/60x60",
		src: imagenesAmbiente[4],
		id: "#byb",
		categoria: "Monocolor",
	},
	{
		titulo: "DOLCKER & LINE BRUN",
		formato: "60x120/60x60/80x80/80x160",
		src: imagenesAmbiente[3],
		id: "#brun",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE CAP",
		formato: "120x120/75x150/60x120/75x75/60x60",
		src: imagenesAmbiente[5],
		id: "#cap",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE COR",
		formato: "30x60/37,5x75/60x60/75x150/75x75/90x90",
		src: imagenesAmbiente[6],
		id: "#cor",
		categoria: "Cemento",
	},
	{
		titulo: "DOLCKER & LINE CROM",
		formato: "120x120/30x60/90x180/60x60/60x120/75x75",
		src: imagenesAmbiente[7],
		id: "#crom",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE DOM",
		formato: "80x80/30x90/120x120/60x60/60x120/80x160/260x120",
		src: imagenesAmbiente[8],
		id: "#dom",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE ETER",
		formato: "260x120/30x60/120x120/60x120/33,3x100/60x60/80x80/80x160/30x90",
		src: imagenesAmbiente[9],
		id: "#eter",
		categoria: "Marmol",
	},
	{
		titulo: "DOLCKER & LINE GRAV",
		formato: "120x120/25x75/30x60/60x120/60x60/75x150/75x75/90x90",
		src: imagenesAmbiente[10],
		id: "#grav",
		categoria: "Cemento",
	},
	{
		titulo: "DOLCKER & LINE HABI",
		formato: "260x120/80x160/120x120/80x80/60x60",
		src: imagenesAmbiente[11],
		id: "#habi",
		categoria: "Cemento",
	},
	{
		titulo: "DOLCKER & LINE HAN",
		formato: "60x120/60x60/80x80/80x160",
		src: imagenesAmbiente[12],
		id: "#han",
		categoria: "Terrazo",
	},
	{
		titulo: "DOLCKER & LINE INV",
		formato: "260x120/120x120/80x160/80x80/60x120",
		src: imagenesAmbiente[13],
		id: "#inv",
		categoria: "Marmol",
	},
	{
		titulo: "DOLCKER & LINE KUR",
		formato: "30x60/37,5x75/60x120/60x60/75x150/75x75/90x90",
		src: imagenesAmbiente[14],
		id: "#kur",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE NIK",
		formato: "60x120/80x160",
		src: imagenesAmbiente[15],
		id: "#nik",
		categoria: "Marmol",
	},
	{
		titulo: "DOLCKER & LINE STONE",
		formato: "30x90/40x120/120x120/60x60/60x120/80x80/80x160",
		src: imagenesAmbiente[16],
		id: "#stone",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE STOR",
		formato: "120x120/120x260/25x75/30x60/40x120/60x120/60x60/75x150/90x90",
		src: imagenesAmbiente[17],
		id: "#stor",
		categoria: "Piedra",
	},
	{
		titulo: "DOLCKER & LINE UNI",
		formato: "260x120/120x120/60x120/80x80/80x160/30x90/60x60",
		src: imagenesAmbiente[18],
		id: "#uni",
		categoria: "Cemento",
	},
];

const useImagesSeries = (categoria, queSerieActiva) => {
	// Filtra los enlaces de acuerdo a la categoría seleccionada
	const enlacesFiltrados = enlacesObj.filter((enlace) => {
		if (categoria === "Todas") {
			return true; // Mostrar todas las categorías
		} else {
			return enlace.categoria === categoria; // Mostrar solo la categoría seleccionada
		}
	});
	const handleSerieChange = (event, id) => {
		// event.preventDefault();
		queSerieActiva(id);
	};
	return Children.toArray(
		enlacesFiltrados.map(({ titulo, src, id, formato }) => {
			return (
				<Enlace href={id} className="enlace" onClick={(event) => handleSerieChange(event, id)}>
					<img src={src} alt={titulo + " ejemplo"} />
					<span style={{ margin: "0" }}>{titulo}</span>
					<span className="formatos" style={{ margin: "0" }}>
						{formato}
					</span>
				</Enlace>
			);
		})
	);
};

export default useImagesSeries;
