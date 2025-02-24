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
import Navbar from "../../components/Menu";
import T5 from "../../assets/images/T5/IMG_3280.jpg";
export const Landing = () => {
	const imageData = [
		{
			src: System,
			title: "Dolcker System",
			subtitle: "Solución integral full&body para fachadas y revestimientos",
			link: "dolcker-system",
		},
		{
			src: Tline,
			title: "Dolcker T-line",
			subtitle: "Sistema de fachada ventilada con perfilería de aluminio",
			link: "dolcker-tline",
		},
		{
			src: Matrix,
			title: "Dolcker Matrix Facade",
			subtitle:
				"Lamas de aluminio clipeadas para fachadas ventiladas y revestimientos.",
			link: "dolcker-matrix-facade",
		},
		{
			src: Decor,
			title: "Dolcker Matrix Decor",
			subtitle:
				"Lamas de aluminio clipeadas para revestimientos e interiores de vanguardia.",
			link: "dolcker-matrix-decor",
		},
		{
			src: TXT,
			title: "Dolcker TXT",
			subtitle: "Solución modular de diseño para fachadas ventiladas",
			link: "dolcker-txt",
		},
		{
			src: T5,
			title: "Dolcker T5 XL",
			subtitle: "Sistema de fachada ventilada con perfilería de aluminio",
			link: "",
		},
	];

	return (
		<>
			<MainContainer>
				<Navbar />
				<Seccion className="Collection">
					<SeccionContenido>
						<WrapperContenido>
							<GridSeccion>
								<Titulo id="scroller">
									DESARROLLO DE FACHADAS
									<br /> VENTILADAS INNOVADORAS Y DE ALTO RENDIMIENTO
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
													<Titulo>Soluciones</Titulo>
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
		</>
	);
};
