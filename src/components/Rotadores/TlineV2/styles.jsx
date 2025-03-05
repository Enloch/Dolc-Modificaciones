import styled from "styled-components";
import Wipe from "../../../assets/icons/wipe.svg";

export const ContRotador = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const CanvasContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	/* width: ${({ visible }) => (visible ? "75%" : "100%")}; */
	height: 100%;
	cursor: all-scroll;
	@media screen and (max-width: 1080px) {
		width: 66%;
	}
	@media screen and (max-width: 480px) {
		width: 100%;
	}
`;
export const BotonExpandir = styled.a`
	display: none;
	position: absolute;
	top: 50%;
	right: 24%;
	width: 25px;
	height: 25px;
	z-index: 20;
	@media (max-width: 1080px) {
		display: none;
	}
`;

export const ImagenExpandir = styled.img`
	width: 100%;
	height: 100%;
`;

export const MenuContainer = styled.div`
	width: 33%;
	padding: 5px;
	background-color: #ffffff;
	height: 100%;
	border-left: 1px solid #e0e0e0;
	/* width: ${({ visible }) => (visible ? "25%" : "0")}; */
	/* display: ${({ visible }) => (visible ? "block" : "none")}; */

	@media (max-width: 480px) {
		width: 100%;
		padding: 5px;
		border-left: none;
		border-top: 1px solid #e0e0e0;
	}
`;

export const IntroContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	background-color: #a7a7a76c;
	backdrop-filter: blur(5px);
`;

export const IntroContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 300px;
	max-height: 180px;
`;

export const IntroImage = styled.img`
	width: 150px;
	height: 150px;
	object-fit: contain;
`;

export const IntroText = styled.p`
	text-align: center;
`;

export const R360Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

export const LedToggleButton = styled.button`
	position: absolute;
	top: 20px;
	left: 20px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${(props) => (props.active ? "#fff8e1" : "#ffffff")};
	border: 1px solid ${(props) => (props.active ? "#ffd54f" : "#e0e0e0")};
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 10;
	transition: all 0.2s ease;

	&:hover {
		transform: scale(1.1);
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
		&::after {
			content: "${(props) => (props.active ? "Apagar LED" : "Encender LED")}";
			position: absolute;
			bottom: -30px;
			left: 50%;
			transform: translateX(-50%);
			background-color: rgba(0, 0, 0, 0.7);
			color: white;
			padding: 4px 8px;
			border-radius: 4px;
			font-size: 12px;
			white-space: nowrap;
		}
	}

	img {
		width: 24px;
		height: 24px;
	}
`;
