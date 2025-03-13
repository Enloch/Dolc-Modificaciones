import React, { useRef, useState, useEffect } from "react";
import MultipleOptionsProvider from "../../contexts/MultipleOptionsContext";
import styled from "styled-components";
import {
	AplicacionesTline as Aplicaciones,
	CaracteristicasTline as Caracteristicas,
	DescargasTline as Descargas,
	DisenosTline as Disenos,
	DolckerTline as Dolcker,
	Final,
	IndiceTline as Indice,
	SistemasTline as Sistemas,
	VentajasTline as Ventajas,
} from "../../modules";

const DolckerTline = () => {
	const indiceRef = useRef();
	const [showButton, setShowButton] = useState(false);

	const handleGoToIndice = () => {
		indiceRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleScroll = () => {
		const scrollTop = window.pageYOffset;
		const dolckerOffsetTop = document.getElementById("dolcker").offsetTop;
		setShowButton(scrollTop > dolckerOffsetTop);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<MultipleOptionsProvider>
			<Indice id="indice" indiceRef={indiceRef} />
			<Dolcker id="dolcker" />
			<Ventajas id="ventajas" />
			<Aplicaciones
				id={[
					"aplicaciones",
					"rehabilitacion",
					"obra-nueva",
					"fachadas",
					"terrazas",
				]}
			/>
			<Disenos
				id={[
					"diseno",
					"configurador",
					"despiece",
					"acabados",
					"espesores",
					"piezas",
					"series",
				]}
			/>
			<Caracteristicas id={["caracteristicas-especiales", "datos-tecnicos"]} />
			<Sistemas
				id={[
					"sistemas",
					"t-line",
					"t-line-clip-10",
					"t-line-clip-20",
					"t-line-t10",
					"t-line-t20",
				]}
			/>
			<Descargas id='descargas' />
			<Final />
			{showButton && (
				<StyledButton onClick={handleGoToIndice}>
					<span role="img" aria-label="up arrow">
						&#8593;
					</span>
				</StyledButton>
			)}
		</MultipleOptionsProvider>
	);
};

export default DolckerTline;

const StyledButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	background-color: #bfbfbf1c;
	color: #000000;
	border: none;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	line-height: 25px;
	cursor: pointer;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: lightgray;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		transform: scale(1.1);
	}
`;
