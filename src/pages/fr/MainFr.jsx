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
import Scala from "../../assets/images/Scala/Volum97.jpg";
import Archiform from "../../assets/images/Archiform/Archiform27.jpg";
import Fusion from "../../assets/images/Fusion/fusion.jpg";
import T5 from "../../assets/images/T5/IMG_3280.jpg";
import Invisifix from "../../assets/images/Invisifix/invisifix.jpg";
import Navbar from "../../components/Menu/menuFR";
import { Final } from "../../modules/FR";

export const MainFr = () => {
	const imageData = [
		{
			src: System,
			title: "Système Dolcker",
			subtitle:
				"Solution intégrale pour les façades et revêtements pleine masse",
			link: "fr/dolcker-system",
		},
		{
			src: Tline,
			title: "Dolcker T-line",
			subtitle: "Système de façade ventilée avec profilés en aluminium",
			link: "fr/dolcker-tline",
		},
		{
			src: Matrix,
			title: "Façade Dolcker Matrix",
			subtitle:
				"Lames en aluminium clipsées pour façades ventilées et revêtements.",
			link: "fr/dolcker-matrix-facade",
		},
		{
			src: Decor,
			title: "Décor Dolcker Matrix",
			subtitle:
				"Lames en aluminium clipsées pour revêtements et intérieurs avant-gardistes.",
			link: "fr/dolcker-matrix-decor",
		},
		{
			src: TXT,
			title: "Dolcker TXT",
			subtitle: "Solution de design modulaire pour façades ventilées",
			link: "fr/dolcker-txt",
		},
		{
			src: T5,
			title: "Dolcker T5 XL",
			subtitle: "Système de façade ventilée avec profilés en aluminium",
			link: "fr/dolcker-t5",
		},
		{
			src: Scala,
			title: "Dolcker Scala",
			subtitle: "Solución integral full&body para fachadas y revestimientos",
			link: "dolcker-scala",
		},
		{
			src: Archiform,
			title: "Dolcker Archiform",
			subtitle: "Solución integral full&body para fachadas y revestimientos",
			link: "dolcker-archiform",
		},
		// {
		// 	src: Fusion,
		// 	title: "Dolcker Fusion",
		// 	subtitle: "Solución integral full&body para fachadas y revestimientos",
		// 	link: "dolcker-fusion",
		// },
		// {
		// 	src: Invisifix,
		// 	title: "Dolcker Invisifix",
		// 	subtitle: "Solución integral full&body para fachadas y revestimientos",
		// 	link: "dolcker-invisifix",
		// },
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
									DÉVELOPPEMENT DE FAÇADES VENTILÉES INNOVANTES ET HAUTES
									PERFORMANCES
									<br />
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
