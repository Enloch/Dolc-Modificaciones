import React, { useState } from "react";
import styled from "styled-components";
import { NombreMateriales } from "./Materiales";
import { SketchPicker } from "react-color";
import IconoRAL from "../../../assets/icons/RAL.png";

import Perfil1 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL1.jpg";
import Perfil2 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL2.jpg";
import Perfil3 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL3.jpg";
import Perfil4 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL4.jpg";
const MenuContainer = styled.div`
	width: 100%;
	display: ${({ visible }) => (visible ? "grid" : "none")};
	grid-template-columns: 1fr 1fr;
	row-gap: 5px;
	@media (max-width: 480px) {
		flex-direction: row;
		justify-content: flex-start;
	}
`;
// const MenuContainer = styled.div`
//   width: 100%;
//   display: ${({ visible }) => (visible ? "grid" : "none")};
//   flex-direction: column;
//   justify-content: center;
//   flex-wrap: wrap;
//   row-gap: 5px;
//   @media (max-width: 480px) {
//     flex-direction: row;
//     justify-content: flex-start;
//   }
// `;

const MenuContainer2 = styled.div`
	width: 100%;
	display: ${({ visible }) => (visible ? "flex" : "none")};
	flex-direction: row;
	flex-wrap: wrap;
`;

const MaterialButton = styled.button`
	width: 70px;
	height: 75px;
	padding: 0;
	background: none;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: none;
`;

const MaterialImage = styled.img`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	object-fit: cover;
`;
const MaterialTextContainer = styled.div`
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: break-spaces;
	margin-top: 2px;
`;
const MaterialText = styled.span`
	font-size: 10px;
`;

const ModelButton = styled.button`
	margin: 0 auto;
	padding: 0;
	border: none;
	background: none;
	cursor: pointer;
	width: auto;
`;

const ModelImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Titulo = styled.h2`
	cursor: pointer;
	margin: 5px;
	::before {
		content: ">  ";
	}
`;
const Menu = ({
	handleModelChange,
	handleMaterialChange,
	color,
	setColor,
	colorPickerActive,
	setColorPickerActive,
}) => {
	const [showModelButtons, setShowModelButtons] = useState(true);
	const [showMaterialButtons, setShowMaterialButtons] = useState(false);
	const [showMetales, setShowMetales] = useState(false);
	const [showMaderas, setShowMaderas] = useState(false);
	const [showColorPicker, setShowColorPicker] = useState(false);

	const handleToggleMaterialButtons = () => {
		setShowModelButtons(false);
		setShowMaterialButtons(!showMaterialButtons);
		setShowMetales(true); // Mostrar los botones de metales
		setShowMaderas(false); // Ocultar los botones de maderas
		setShowColorPicker(false); // Ocultar el color picker
		setColorPickerActive(false); // Establecer colorPickerActive en false al seleccionar un material
	};

	const handleHideButtons = () => {
		setShowModelButtons(true);
		setShowMaterialButtons(false);
		setShowMetales(false); // Ocultar los botones de metales
		setShowMaderas(false); // Ocultar los botones de maderas
		setShowColorPicker(false); // Ocultar el color picker
	};

	const handleColorChange = (newColor) => {
		setColor(newColor.hex);
		handleMaterialChange(0); // Restablecer el material cuando se selecciona un color
	};

	return (
		<div>
			{showModelButtons && (
				<MenuContainer visible={showModelButtons}>
					<ModelButton
						onClick={() => {
							handleModelChange("Modelo 1");
							handleToggleMaterialButtons();
						}}
					>
						Cenefa 1
						<ModelImage src={Perfil1} alt="Modelo 1" />
					</ModelButton>
					<ModelButton
						onClick={() => {
							handleModelChange("Modelo 2");
							handleToggleMaterialButtons();
						}}
					>
						Cenefa 2
						<ModelImage src={Perfil2} alt="Modelo 2" />
					</ModelButton>
					<ModelButton
						onClick={() => {
							handleModelChange("Modelo 3");
							handleToggleMaterialButtons();
						}}
					>
						Cenefa 3
						<ModelImage src={Perfil3} alt="Modelo 3" />
					</ModelButton>
					<ModelButton
						onClick={() => {
							handleModelChange("Modelo 4");
							handleToggleMaterialButtons();
						}}
					>
						Cenefa 4
						<ModelImage src={Perfil4} alt="Modelo 4" />
					</ModelButton>
				</MenuContainer>
			)}

			{showMaterialButtons && (
				<>
					<Titulo onClick={handleHideButtons}>Volver a Modelos</Titulo>
					<div className="metales">
						<Titulo
							onClick={() => (
								setShowMetales(!showMetales),
								setShowMaderas(false),
								setShowColorPicker(false),
								setColorPickerActive(false)
							)}
						>
							Metales
						</Titulo>
						<MenuContainer2 visible={showMaterialButtons && showMetales}>
							{NombreMateriales.slice(0, 18).map((material, index) => (
								<MaterialButton
									key={index}
									onClick={() => handleMaterialChange(index)}
								>
									<MaterialImage
										src={material.textura}
										alt={`Material ${material.nombre}`}
									/>
									<MaterialTextContainer>
										<MaterialText>{material.nombre}</MaterialText>
									</MaterialTextContainer>
								</MaterialButton>
							))}
						</MenuContainer2>
						<Titulo
							onClick={() => (
								setShowMaderas(!showMaderas),
								setShowMetales(false),
								setShowColorPicker(false),
								setColorPickerActive(false)
							)}
						>
							Maderas
						</Titulo>
						<MenuContainer2 visible={showMaterialButtons && showMaderas}>
							{NombreMateriales.slice(18, 22).map((material, index) => (
								<MaterialButton
									key={index}
									onClick={() => handleMaterialChange(index + 18)}
								>
									<MaterialImage
										src={material.textura}
										alt={`Material ${material.nombre}`}
									/>
									<MaterialTextContainer>
										<MaterialText>{material.nombre}</MaterialText>
									</MaterialTextContainer>
								</MaterialButton>
							))}
						</MenuContainer2>
						<Titulo
							onClick={() => (
								setShowColorPicker(true),
								setColorPickerActive(true),
								setShowMetales(false),
								setShowMaderas(false)
							)}
						>
							Sólidos
						</Titulo>
						<MenuContainer2 visible={showColorPicker}>
							<SketchPicker color={color} onChange={handleColorChange} />
						</MenuContainer2>
					</div>
				</>
			)}
		</div>
	);
};

export default Menu;
