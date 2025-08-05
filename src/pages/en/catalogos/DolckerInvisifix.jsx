import React, { useRef, useState, useEffect } from "react";
import MultipleOptionsProvider from "../../../contexts/MultipleOptionsContext";
import styled from "styled-components";
import {
	AplicacionesInvisifix as Aplicaciones,
	CaracteristicasInvisifix as Caracteristicas,
	DescargasInvisifix as Descargas,
	DisenosInvisifix as Disenos,
	DolckerInvisifix as Dolcker,
	Final,
	IndiceInvisifix as Indice,
	SistemasInvisifix as Sistemas,
	VentajasInvisifix as Ventajas,
} from "../../../modules/EN";

const DolckerInvisifixEn = () => {
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
			<Aplicaciones id={["aplicaciones", "obra-nueva"]} />
			<Disenos id={["diseno", "acabados", "espesores", "series"]} />
			{/* <Caracteristicas id={["caracteristicas-especiales", "datos-tecnicos"]} /> */}
			{/* <Sistemas id={["sistemas", "dolcker-and-clip", "dol-tc11", "dol-tc14", "dol-hc20"]} /> */}
			<Descargas id="descargas" />
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

export default DolckerInvisifixEn;

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
