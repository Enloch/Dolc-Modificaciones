import { useState } from "react";
import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/DolckerTline/Caracteristicas/IMG_5562.jpg";
import ImagenJorge from "../../../../assets/images/DolckerTline/tablas.jpg";
import ImagenConstructiva from "../../../../assets/images/DolckerTline/tablas.jpg";
// Importar iconos para las tablas
import dimension1 from "../../../../assets/icons/caracteristicas/medida1.svg";
import dimension2 from "../../../../assets/icons/caracteristicas/medida2.svg";
import dimension3 from "../../../../assets/icons/caracteristicas/medida3.svg";
import mecanica1 from "../../../../assets/icons/caracteristicas/mecanica1.svg";
import mecanica2 from "../../../../assets/icons/caracteristicas/mecanica2.svg";
import mecanica3 from "../../../../assets/icons/caracteristicas/mecanica3.svg";
import mecanica4 from "../../../../assets/icons/caracteristicas/mecanica4.svg";
import mecanica5 from "../../../../assets/icons/caracteristicas/mecanica5.svg";
import mecanica6 from "../../../../assets/icons/caracteristicas/mecanica6.svg";
import higiene1 from "../../../../assets/icons/caracteristicas/higiene1.svg";
import higiene2 from "../../../../assets/icons/caracteristicas/higiene2.svg";
import higiene3 from "../../../../assets/icons/caracteristicas/higiene3.svg";
// Importar componentes de MUI
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Box,
	Typography,
} from "@mui/material";
import Text from "../../../../components/Text";
import Listado from "../../../../components/Listado";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CaracteristicasTline = ({ id }) => {
	const [showDatosTecnicos, setShowDatosTecnicos] = useState(false);
	const [expandedPanel, setExpandedPanel] = useState(false);

	const handleAccordionChange = (panel) => (event, isExpanded) => {
		setExpandedPanel(isExpanded ? panel : false);
	};

	return (
		<>
			<StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Caractéristiques techniques</Titulo>
				<ImageWithCaption
					src={caracter1}
					alt="Render por parte de 7475"
					caption=""
					columnSpan="6"
				/>
				<Text>
					Dolcker Line est un matériau compact, résistant et caractérisé par une
					porosité presque inexistante et une absorption d'eau inférieure à 0,1
					%
					<br />
					<br />
					Sa structure vitrifiée, avec un faible degré de porosité, garantit une
					imperméabilité élevée à la saleté et à la glace.
					<br />
					<br />
					Corps en pâte porcelaine.
					<br />
					<br />
					Les avantages d'un matériau unique.
				</Text>
				<Listado>
					<li>
						<strong>
							Large gamme de couleurs, formats, épaisseurs et finitions.
						</strong>
					</li>
					<li>
						<strong>Il est antiacide.</strong> Insensible aux acides les plus
						répandus (ne résiste pas à l'attaque de l'acide fluorhydrique).
					</li>
					<li>
						<strong>Il est résistant.</strong> Résistant à l'abrasion et à
						l'usure plus que tout matériau naturel.
					</li>
					<li>
						<strong>Non combustible.</strong> Le matériau ne brûle pas et ne
						produit pas de gaz ou fumées toxiques-nocives en cas d'incendie ou
						d'exposition aux flammes.
					</li>
					<li>
						<strong>
							Ne retient pas les substances organiques et les bactéries, causes
							d'allergies et de troubles.
						</strong>
					</li>
					<li>
						<strong>Facile à travailler.</strong> Le produit se prête à être
						travaillé (coupé, perforé, etc.) comme la pierre naturelle pour
						satisfaire tout type de personnalisation.
					</li>
					<li>
						<strong>Il est inattaquable.</strong> Aucun problème avec des
						casseroles chaudes ou des cigarettes allumées, qui au contraire
						endommagent le bois, les stratifiés plastiques ou les agglomérés
						avec résines.
					</li>
					<li>
						<strong>Facile à nettoyer.</strong> Il est possible d'utiliser des
						détergents très puissants ou des solvants sans risque d'endommager
						le matériau.
					</li>
					<li>
						<strong>Résistant à la glace.</strong> Le matériau est résistant au
						froid et à la glace.
					</li>
					<li>
						<strong>Stabilité chromatique.</strong> Les couleurs sont totalement
						stables et ne s'altèrent ni par l'exposition au soleil, ni par les
						agents atmosphériques, ni par le smog.
					</li>
				</Listado>
				<Text>
					<strong>ÉCOLOGIQUE</strong>
					<br />
					<br />
					Ne contient pas d'imperméabilisants chimiques, de vernis ou de
					résines, n'émet pas d'exhalations même avec la chaleur d'une flamme.
					Contrairement à certaines pierres naturelles, il n'émet pas de radon
					ou d'autres gaz radioactifs et n'est pas poli au plomb. Il est produit
					en respectant l'environnement.
					<br />
					<br />
					<strong>RÉSISTANCE AUX CHANGEMENTS BRUSQUES DE TEMPERATURE</strong>
					<br />
					<br />
					<strong>
						RÉSISTANCE À LA FLEXION AVEC DES CHARGES FIXES ET STATIQUES
					</strong>
					<br />
					<br />
					<strong>RÉSISTANCE À L'IMPACT, À L'ABRASION SÉCURITÉ</strong>
				</Text>
				<Listado>
					<li>Expansion par humidité insignifiante</li>
					<li>Incombustible</li>
					<li>Ignifuge</li>
					<li>Absence de danger en cas d'incendie</li>
					<li>Sécurité électrique</li>
				</Listado>
				<Text>
					<strong>SANTÉ ET BIEN-ÊTRE</strong>
				</Text>
				<Listado>
					<li>Carence d'odeur propre ou acquise</li>
					<li>Résistance à la libération de poussière propre</li>
					<li>Facilité de nettoyage de la poussière acquise</li>
					<li>Nettoyage et entretien faciles</li>
					<li>
						C'est un produit qui, grâce à sa capacité d'isolant électrique,
						évite la capture de poussière ambiante électriquement active
					</li>
					<li>Convenable lorsque l'utilisation de l'eau est abondante</li>
					<li>
						C'est l'installation définitive : il n'a pas besoin d'entretien
						après sa mise en œuvre
					</li>
				</Listado>
			</StyledCaracteristicas>
			<StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
				<Titulo>Données techniques</Titulo>
				<Text>
					<strong>Caractéristiques physiques et mécaniques</strong>
					<br />
					<br />
					Les pièces de céramique sont classées comme carreaux de céramique
					prenassés en sèche avec une absorption d'eau faible selon la norme
					UNE-EN 14411, avec les caractéristiques suivantes déclarées par le
					fabricant :
				</Text>

				<Box sx={{ width: "100%", overflow: "auto", mt: 3 }}>
					{/* Acordeón para características dimensionales */}
					<Accordion
						expanded={expandedPanel === "panel1"}
						onChange={handleAccordionChange("panel1")}
						sx={{
							mb: 2,
							boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
							borderRadius: "4px",
							"&.Mui-expanded": {
								margin: 0,
								marginBottom: 2,
							},
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							sx={{
								backgroundColor: COLORS.gray03,
								color: "black",
								"&.Mui-expanded": {
									minHeight: 48,
								},
							}}
						>
							<Typography sx={{ fontWeight: 600 }}>
								CARACTÉRISTIQUES DIMENSIONNELLES
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<TableContainer
								component={Paper}
								sx={{
									boxShadow: "none",
									borderRadius: "0",
									mt: 2,
									mb: 2,
								}}
							>
								<Table
									aria-label="tabla de características dimensionales"
									sx={{
										tableLayout: "fixed",
										minWidth: 900,
										"& .MuiTableCell-root": {
											boxSizing: "border-box",
										},
									}}
								>
									<TableHead>
										<TableRow>
											<TableCell
												sx={{ padding: "10px 10px", width: "60px" }}
											></TableCell>
											<TableCell sx={{ padding: "10px 10px", width: "180px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													CARACTÉRISTIQUES DIMENSIONNELLES
												</Typography>
											</TableCell>
											<TableCell
												align="center"
												sx={{ padding: "10px 10px", width: "120px" }}
											>
												<Typography sx={{ fontWeight: 600 }}>
													UNE EN-14411 (1)
													<br />
													ISO 13006 ANEXO G
												</Typography>
											</TableCell>

											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													SATINADO 60X120 11,5 MM
													<br />
													CALIBRE 1 597,2 X 1197,3
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													MATE 60X120 14 MM
													<br />
													CALIBRE 1 597,2 X 1197,3
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													RÚSTICO 60X120 14MM
													<br />
													CALIBRE 5 600,4 X 1200,4
												</Typography>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell
												rowSpan={4}
												align="center"
												sx={{ padding: "5px" }}
											>
												<img
													src={dimension1}
													alt="dimension-longitud"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Épaisseur utile (e)
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">2</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0,6%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,2%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,2%</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Largeur utile (a)
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">2</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">5%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 5,0%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 5,0%</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Longueur utile (l)
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">2</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0,5%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,2%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,2%</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Rectitude des côtés
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">3</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0,5%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,25%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,25%</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell
												rowSpan={2}
												align="center"
												sx={{ padding: "5px" }}
											>
												<img
													src={dimension2}
													alt="dimension-curvatura"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Curvature centrale et latérale
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">2</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0,5%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,2%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,2%</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">Planéité</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">2</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0,5%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,2%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,2%</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={dimension3}
													alt="dimension-curvatura"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Absorption d'eau
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">3</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													≤ 0,5% MAX 0,6 %
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≤ 0,1%</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≤ 0,1%</Typography>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</AccordionDetails>
					</Accordion>
					{/* Acordeón para características mecánicas */}
					<Accordion
						expanded={expandedPanel === "panel2"}
						onChange={handleAccordionChange("panel2")}
						sx={{
							mb: 2,
							boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
							borderRadius: "4px",
							"&.Mui-expanded": {
								margin: 0,
								marginBottom: 2,
							},
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							sx={{
								backgroundColor: COLORS.gray03,
								color: "black",
								"&.Mui-expanded": {
									minHeight: 48,
								},
							}}
						>
							<Typography sx={{ fontWeight: 600 }}>
								CARACTÉRISTIQUES MÉCANIQUES
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<TableContainer
								component={Paper}
								sx={{
									boxShadow: "none",
									borderRadius: "0",
								}}
							>
								<Table
									aria-label="tabla de características mecánicas"
									sx={{
										tableLayout: "fixed",
										minWidth: 900,
										"& .MuiTableCell-root": {
											boxSizing: "border-box",
										},
									}}
								>
									<TableHead>
										<TableRow>
											<TableCell
												sx={{ padding: "10px 10px", width: "60px" }}
											></TableCell>
											<TableCell sx={{ padding: "10px 10px", width: "180px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													CARACTÉRISTIQUES MÉCANIQUES
												</Typography>
											</TableCell>
											<TableCell
												align="center"
												sx={{ padding: "10px 10px", width: "120px" }}
											>
												<Typography sx={{ fontWeight: 600 }}>
													UNE EN-14411 (1)
													<br />
													ISO 13006 ANEXO G
												</Typography>
											</TableCell>

											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													SATINADO 60X120 11,5 MM
													<br />
													CALIBRE 1 597,2 X 1197,3
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													MATE 60X120 14 MM
													<br />
													CALIBRE 1 597,2 X 1197,3
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													RÚSTICO 60X120 14MM
													<br />
													CALIBRE 5 600,4 X 1200,4
												</Typography>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell
												rowSpan={2}
												align="center"
												sx={{ padding: "5px" }}
											>
												<img
													src={mecanica1}
													alt="caracteristicas-mecanicas"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Charge de rupture
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">6</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">1300 N</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≥ 2000 N</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≥ 12000 N</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Modulus de rupture
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">6</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">35 N/mm²</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≥ 42 N/mm²</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≥ 50 N/mm²</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={mecanica2}
													alt="caracteristicas-mecanicas"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Résistance au dégagement profond
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">8</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">175 mm³</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">&lt; 145 mm³</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">&lt; 145 mm³</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={mecanica3}
													alt="caracteristicas-mecanicas"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Résistance à l'abrasion de surface
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">7</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">PEI 3-4</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">PEI 3-4</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">PEI 3-4</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={mecanica4}
													alt="caracteristicas-mecanicas"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Coefficient de dilatation thermique
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">9</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">7,4·10^(-6) /k</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">7,4·10^(-6) /k</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">7,4·10^(-6) /k</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={mecanica5}
													alt="caracteristicas-mecanicas"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Résistance au choc thermique
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">10</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">Résistant</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">Résistant</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">Résistant</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={mecanica6}
													alt="caracteristicas-mecanicas"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Résistance à la flamme
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">12</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">A1</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">A1</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">A1</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Résistance aux rayures
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">6</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">1300 N</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≥ 2000 N</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≥ 12000 N</Typography>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</AccordionDetails>
					</Accordion>
					{/* Acordeón para características higiénicas */}
					<Accordion
						expanded={expandedPanel === "panel3"}
						onChange={handleAccordionChange("panel3")}
						sx={{
							mb: 2,
							boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
							borderRadius: "4px",
							"&.Mui-expanded": {
								margin: 0,
								marginBottom: 2,
							},
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel3a-content"
							id="panel3a-header"
							sx={{
								backgroundColor: COLORS.gray03,
								color: "black",
								"&.Mui-expanded": {
									minHeight: 48,
								},
							}}
						>
							<Typography sx={{ fontWeight: 600 }}>
								Caractéristiques hygiéniques
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<TableContainer
								component={Paper}
								sx={{
									mt: 4,
									overflowX: "auto",
									maxWidth: "100%",
									minWidth: "100%",
								}}
							>
								<Table
									aria-label="tabla de características higiénicas"
									sx={{
										tableLayout: "fixed",
										minWidth: 900,
										"& .MuiTableCell-root": {
											boxSizing: "border-box",
										},
									}}
								>
									<TableHead>
										<TableRow>
											<TableCell
												sx={{ width: "60px", padding: "10px 10px" }}
											></TableCell>
											<TableCell sx={{ width: "180px", padding: "10px 10px" }}>
												CARACTÉRISTIQUES HYGIÉNIQUES
											</TableCell>
											<TableCell sx={{ width: "220px", padding: "10px 10px" }}>
												TYPE D'ACIDE OU DE BASE
											</TableCell>
											<TableCell
												align="center"
												sx={{ width: "100px", padding: "10px 10px" }}
											>
												UNE-EN-ISO
												<br />
												10545
												<br />
												Test Nº
											</TableCell>
											<TableCell
												align="center"
												sx={{ width: "100px", padding: "10px 10px" }}
											>
												UNE-EN-14411(1)
												<br />
												ISO 13006
												<br />
												Anexo G
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												SATINADO
												<br />
												60X120 11,5mm
												<br />
												Calibre: 1
												<br />
												597,2x1197,3
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MATE
												<br />
												60X120 14mm
												<br />
												Calibre: 1
												<br />
												597,2x1197,3
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												RÚSTICO
												<br />
												60X120 20MM
												<br />
												Calibre: 5
												<br />
												600,4x1200,4
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell
												rowSpan={4}
												align="center"
												sx={{ padding: "5px" }}
											>
												<img
													src={higiene1}
													alt="higiene-resistencia-quimica"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell rowSpan={4} sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													RÉSISTANCE AUX PRODUITS CHIMIQUES
												</Typography>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												ACIDES FAIBLE CONCENTRATION
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												ACIDES FORTE CONCENTRATION
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE HA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE HA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE HA
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												BASES FAIBLE CONCENTRATION
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												BASES ALTA CONCENTRACIÓN
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE HA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE HA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE HA
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={higiene2}
													alt="higiene-manchas"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													RESISTENCIA A LAS MANCHAS
												</Typography>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}></TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												14
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												4
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												4
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												4
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={higiene3}
													alt="higiene-limpieza"
													style={{
														width: "40px",
														height: "40px",
														filter:
															"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
													}}
												/>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													PRODUCTOS DOMÉSTICOS DE LIMPIEZA Y SALES DE PISCINA
												</Typography>
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}></TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MINIMUM UB
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASE LA
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Résistance bactérienne
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													Résistance aux champignons
													<br />
													FUNGUS RESISTANCE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">0</Typography>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
							<Text>
								La surface de Dolcker Line est extrêmement lisse et homogène,
								avec une porosité presque inexistante, ce qui empêche la
								prolifération de micro-organismes et de bactéries. Dolcker Line
								est un produit antibactérien, certifié selon la norme ISO 22196.
							</Text>
						</AccordionDetails>
					</Accordion>
				</Box>
			</StyledCaracteristicas>
		</>
	);
};

export default CaracteristicasTline;
