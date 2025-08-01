import { Titulo } from "../../../../../components/Titulos";
import { COLORS } from "../../../../../global/GlobalStyles";
import useImagesSeries from "../../../../../hooks/useImagesSeriesTline";
import StyledIndiceSeries from "./styles";
import React, { useState } from "react";

const IndiceSeries = ({ id, queSerieActiva }) => {
	const [categoria, setCategoria] = useState("Todas");
	const enlacesSeries = useImagesSeries(categoria, queSerieActiva);

	const handleCategoriaChange = (event) => {
		setCategoria(event.target.value); // Actualiza la categoría seleccionada
	};
	return (
		<>
			<StyledIndiceSeries
				id={id}
				backgroundColor={COLORS.gray02}
				style={{ paddingBottom: "0", rowGap: "20px" }}
			>
				<Titulo style={{ paddingBottom: "0" }}>SÉRIES</Titulo>
				<select value={categoria} onChange={handleCategoriaChange}>
					<option value="Todas">Toutes les séries</option>
					<option value="Piedra">Pierre</option>
					<option value="Cemento">Ciment</option>
					<option value="Marmol">Marbre</option>
					<option value="Monocolor">Monocolore</option>
					<option value="Terrazo">Terrazzo</option>
				</select>
			</StyledIndiceSeries>
			<StyledIndiceSeries
				id={id}
				backgroundColor={COLORS.gray02}
				style={{ paddingTop: "20px" }}
			>
				{enlacesSeries}
			</StyledIndiceSeries>
		</>
	);
};
export default IndiceSeries;
