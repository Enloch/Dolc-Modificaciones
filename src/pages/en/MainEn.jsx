import React from "react";
import {
	MainContainer,
	Seccion,
	SeccionContenido,
	WrapperContenido,
	GridSeccion,
	GridTextoCabecera,
	ContenedorSeparador,
	SeparadorHeader,
	ContenedorSubtitulos,
	LimiteSubtitulos,
	Caja25Flex,
	Caja75Flex,
	SeccionTituloPunto,
	AjusteTituloPunto,
	Punto,
	ContenedorTituloPunto,
	TituloPunto,
	StyledImagenTexto,
	StyledImagen,
	StyledTexto,
	StyledSubTexto,
} from "./styles";
import { Titulo } from "../../components/Titulos";
import System from "../../assets/images/Inicio/inicio.jpg";
import Tline from "../../assets/images/DolckerTline/tline.jpg";
import Matrix from "../../assets/images/DolckerMatrix/facade.jpg";
import Decor from "../..//assets/images/DolckerMatrixDecor/decor.jpg";
import TXT from "../../assets/images/DolckerTXT/txt.jpg";
import Navbar from "../../components/Menu/menuEN";
import T5 from "../../assets/images/T5/IMG_3280.jpg";
import { Final } from "../../modules/EN";

export const MainEn = () => {
	const imageData = [
		{
			src: System,
			title: "Dolcker System",
			subtitle: "Integral solution for full-body facades and cladding",
			link: "en/dolcker-system",
		},
		{
			src: Tline,
			title: "Dolcker T-line",
			subtitle: "Ventilated facade system with aluminum profiling",
			link: "en/dolcker-tline",
		},
		{
			src: Matrix,
			title: "Dolcker Matrix Facade",
			subtitle:
				"Clipped aluminum slats for ventilated facades and cladding.",
			link: "en/dolcker-matrix-facade",
		},
		{
			src: Decor,
			title: "Dolcker Matrix Decor",
			subtitle:
				"Clipped aluminum slats for cladding and avant-garde interiors.",
			link: "en/dolcker-matrix-decor",
		},
		{
			src: TXT,
			title: "Dolcker TXT",
			subtitle: "Modular design solution for ventilated facades",
			link: "en/dolcker-txt",
		},
		{
			src: T5,
			title: "Dolcker T5 XL",
			subtitle: "Ventilated facade system with aluminum profiling",
			link: "en/dolcker-t5",
		},
	];

	return (
		<>
			<Navbar />
			<MainContainer>
				<Seccion className="Collection">
					<SeccionContenido>
						<WrapperContenido>
							<GridSeccion>
								<Titulo id="scroller">
									DEVELOPMENT OF INNOVATIVE AND HIGH-PERFORMANCE
									<br /> VENTILATED FACADES
								</Titulo>
							</GridSeccion>
							<ContenedorSeparador>
								<SeparadorHeader />
							</ContenedorSeparador>
							<ContenedorSubtitulos>
								<LimiteSubtitulos>
									<Caja25Flex>
										<SeccionTituloPunto>
											<AjusteTituloPunto>
												<Punto>
													<TituloPunto></TituloPunto>
												</Punto>
												<ContenedorTituloPunto id="collection">
													<Titulo>Solutions</Titulo>
												</ContenedorTituloPunto>
											</AjusteTituloPunto>
										</SeccionTituloPunto>
									</Caja25Flex>
									<Caja75Flex>
										{imageData.map((image, index) => (
											<StyledImagenTexto key={index}>
												<a
													href={image.link ? image.link : "#"}
													style={{
														textDecoration: "none",
														cursor: "pointer",
														overflow: "hidden",
													}}
												>
													<StyledImagen src={image.src} alt={image.title} />
												</a>
												{/* <StyledSubTexto>{image.subtitle}</StyledSubTexto> */}
												<StyledTexto>{image.title}</StyledTexto>
											</StyledImagenTexto>
										))}
									</Caja75Flex>
								</LimiteSubtitulos>
							</ContenedorSubtitulos>
						</WrapperContenido>
					</SeccionContenido>
				</Seccion>
			</MainContainer>
			<Final />
		</>
	);
};
