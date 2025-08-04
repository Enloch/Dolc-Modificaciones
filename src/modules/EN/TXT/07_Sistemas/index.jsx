import Text from "@components/Text";
import { Titulo, Titulo2 } from "@components/Titulos";
import StyledSistemas, { Enlaces, StyledGrid, LegendList } from "./styles";
import { COLORS } from "@global/GlobalStyles";
import sistemas from "@assets/images/DolckerTXT/Sistemas/sistemas.jpg";

import esquinaTC14_0_0 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-0.jpg";
import esquinaTC14_0_30 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-30.jpg";
import esquinaTC14_0_60 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 0-60.jpg";
import esquinaTC14_30_30 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 30-30.jpg";
import esquinaTC14_30_60 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 30-60.jpg";
import esquinaTC14_60_60 from "@assets/images/DolckerTXT/Sistemas/ESQUINA TXT TC14 60-60.jpg";

import recercoTC14_0 from "@assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 0.jpg";
import recercoTC14_30 from "@assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 30.jpg";
import recercoTC14_60 from "@assets/images/DolckerTXT/Sistemas/RECERCO TXT TC14 SALIDA 60.jpg";

import ImageWithCaption from "@components/ImageWithCaption";
import Reemplazo from "@assets/images/DolckerMatrix/temporal.webp";
import { useState } from "react";

import txt11 from "@assets/images/DolckerTXT/Caracteristicas/Detalle TXT11.jpg";
import txt12 from "@assets/images/DolckerTXT/Caracteristicas/Detalle TXT12.jpg";
import txt13 from "@assets/images/DolckerTXT/Caracteristicas/Detalle TXT13.jpg";

import Modal from "@components/Modal";

const SistemasTline = ({ id }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedCaption, setSelectedCaption] = useState("");

	const openModal = (imageSrc, caption) => {
		setSelectedImage(imageSrc);
		setSelectedCaption(caption);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setSelectedCaption("");
	};

	return (
		<>
			<Modal
				isOpen={selectedImage !== null}
				onClose={closeModal}
				caption={selectedCaption}
			>
				<img src={selectedImage} alt="Ampliada" />
			</Modal>

			<StyledSistemas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Construction systems</Titulo>
				<ImageWithCaption
					src={sistemas}
					alt="Sistemas introducción"
					caption=""
					columnSpan="8"
				/>
				<Enlaces>
					<li>
						<a href={"#" + id[1]}>
							System
							<br />
							<strong>TXT-11</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[2]}>
							System
							<br />
							<strong>TXT-13</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[3]}>
							System
							<br />
							<strong>TXT-TC14 Detalles esquina</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[4]}>
							System
							<br />
							<strong>TXT-TC14 Detalles recerco</strong>
						</a>
					</li>
					<li>
						<a href={"#" + id[5]}>
							<br />
							<strong>TXT-TC14 Leyenda</strong>
						</a>
					</li>
				</Enlaces>
			</StyledSistemas>
			<StyledSistemas id={id[1]}>
				<Titulo2>TXT-11</Titulo2>
				<Text>
					Fachadas with different wall finishes, highlighting a vertical lacquer
					joint in the color chosen by the designer.
				</Text>
				<ImageWithCaption
					src={txt11}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos TXT-11"
				/>
			</StyledSistemas>
			<StyledSistemas id={id[2]}>
				<Titulo2>TXT-13</Titulo2>
				<Text>
					Walls with strategic profiles to generate shadows and enhance the
					volume.
				</Text>
				<ImageWithCaption
					src={txt13}
					alt="Dolcker-clip demostración"
					columnSpan="6"
					caption="Detalles tecnicos TXT-13"
				/>
			</StyledSistemas>
			<StyledSistemas id={id[3]}>
				<Titulo2>
					TXT-TC14
					<br />
					Corner details
				</Titulo2>
				<StyledGrid>
					<ImageWithCaption
						src={esquinaTC14_0_0}
						alt="Dolcker-clip tabla"
						caption="TC14 0-0"
						columnSpan="1"
						onClickFunc={() => openModal(esquinaTC14_0_0, "TC14 0-0")}
					/>
					<ImageWithCaption
						src={esquinaTC14_0_30}
						alt="Dolcker-clip tabla"
						caption="TC14 0-30"
						columnSpan="1"
						onClickFunc={() => openModal(esquinaTC14_0_30, "TC14 0-30")}
					/>
					<ImageWithCaption
						src={esquinaTC14_0_60}
						alt="Dolcker-clip tabla"
						caption="TC14 0-60"
						columnSpan="1"
						onClickFunc={() => openModal(esquinaTC14_0_60, "TC14 0-60")}
					/>
					<ImageWithCaption
						src={esquinaTC14_30_30}
						alt="Dolcker-clip tabla"
						caption="TC14 30-30"
						columnSpan="1"
						onClickFunc={() => openModal(esquinaTC14_30_30, "TC14 30-30")}
					/>
					<ImageWithCaption
						src={esquinaTC14_30_60}
						alt="Dolcker-clip tabla"
						caption="TC14 30-60"
						columnSpan="1"
						onClickFunc={() => openModal(esquinaTC14_30_60, "TC14 30-60")}
					/>
					<ImageWithCaption
						src={esquinaTC14_60_60}
						alt="Dolcker-clip tabla"
						caption="TC14 60-60"
						columnSpan="1"
						onClickFunc={() => openModal(esquinaTC14_60_60, "TC14 60-60")}
					/>
				</StyledGrid>
			</StyledSistemas>
			<StyledSistemas id={id[4]}>
				<Titulo2>
					TXT-TC14
					<br />
					Corner details
				</Titulo2>
				<StyledGrid>
					<ImageWithCaption
						src={recercoTC14_0}
						alt="Dolcker-clip tabla"
						caption="TC14 salida 0"
						columnSpan="1"
						onClickFunc={() => openModal(recercoTC14_0, "TC14 salida 0")}
					/>
					<ImageWithCaption
						src={recercoTC14_30}
						alt="Dolcker-clip tabla"
						caption="TC14 salida 30"
						columnSpan="1"
						onClickFunc={() => openModal(recercoTC14_30, "TC14 salida 30")}
					/>
					<ImageWithCaption
						src={recercoTC14_60}
						alt="Dolcker-clip tabla"
						caption="TC14 salida 60"
						columnSpan="1"
						onClickFunc={() => openModal(recercoTC14_60, "TC14 salida 60")}
					/>
				</StyledGrid>
			</StyledSistemas>
			<StyledSistemas id={id[5]}>
				<Titulo2>
					TXT-TC14
					<br />
					Legend
				</Titulo2>

				<LegendList>
					<p data-number="01">Wall of work or concrete</p>
					<p data-number="02">Finish</p>
					<p data-number="03">Insulation</p>
					<p data-number="04">Ventilated air chamber</p>
					<p data-number="05">Vertical T profile</p>
					<p data-number="06">Mensula</p>
					<p data-number="07">Nylon taco</p>
					<p data-number="08">Self-tapping screw</p>
					<p data-number="09">Dolcker ceramic</p>
					<p data-number="10">Square Dolcker profile</p>
					<p data-number="11">Dolcker TXT profile</p>
					<p data-number="12">Self-tapping screw flat head</p>
					<p data-number="13">Chemical fixing</p>
					<p data-number="14">Expansive stainless steel anchorage</p>
					<p data-number="15">Dolcker termination profile</p>
					<p data-number="16">Kerdi sheet</p>
					<p data-number="17">Bolt</p>
					<p data-number="18">Composite panel</p>
					<p data-number="19">Ceramic</p>
					<p data-number="20">Medium washer</p>
					<p data-number="21">Washer</p>
					<p data-number="22">Sikatack panel</p>
					<p data-number="23">Double-sided tape</p>
					<p data-number="24">Angular</p>
					<p data-number="25">Screw plug</p>
					<p data-number="26">Extrusion</p>
					<p data-number="27">Window seal</p>
					<p data-number="28">Aluminum perforated mesh</p>
					<p data-number="29">Waterproofing sheet</p>
					<p data-number="30">Lacquered aluminum sheet</p>
					<p data-number="31">F extrusion</p>
					<p data-number="32">Separator</p>
					<p data-number="33">Expanded polystyrene</p>
					<p data-number="34">Self-tapping screw flat head</p>
					<p data-number="35">Decorative trim</p>
				</LegendList>
			</StyledSistemas>
		</>
	);
};

export default SistemasTline;
