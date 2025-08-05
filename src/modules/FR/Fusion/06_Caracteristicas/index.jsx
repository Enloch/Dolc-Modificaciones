import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/Fusion/Caracteristicas/IMG_7453.jpg";
import Text from "../../../../components/Text";
import Listado from "../../../../components/Listado";
import { useState } from "react";
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
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
const Caracteristicas = ({ id }) => {
	// Estado para controlar qué acordeón está expandido
	const [expandedPanel, setExpandedPanel] = useState(false);

	// Función para manejar el cambio de acordeón
	const handleAccordionChange = (panel) => (event, isExpanded) => {
		setExpandedPanel(isExpanded ? panel : false);
	};

	return (
		<>
			<StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
				<Titulo>Caractéristiques techniques</Titulo>
				<ImageWithCaption
					src={caracter1}
					alt="Image des caractéristiques techniques"
					columnSpan="6"
				/>
				<Text>
					DOLCKER est un matériau compact, résistant, caractérisé par une porosité presque inexistante et une absorption d'eau inférieure à 0,1%
					<br />
					<br />
					Sa structure vitrifiée, avec un faible degré de porosité, garantit une imperméabilité élevée à la saleté et à la glace.
					<br />
					<br />
					Construction full&body
					<br />
					<br />
					Les avantages d'un matériau unique.
				</Text>
				<Listado>
					<li>
						<strong>
							Gamme étendue de couleurs, formats, épaisseurs et finitions.
						</strong>
					</li>
					<li>
						<strong>Résistant aux acides.</strong> Insensible aux acides les plus courants (ne résiste pas à l'attaque de l'acide fluorhydrique).
					</li>
					<li>
						<strong>Très durable.</strong> Plus résistant à l'abrasion et à l'usure que tout matériau naturel.
					</li>
					<li>
						<strong>Incombustible.</strong> Le matériau ne brûle pas ou ne produit pas de gaz ou de fumées toxiques en cas d'incendie ou d'exposition aux flammes.
					</li>
					<li>
						<strong>
							Ne retient pas les substances organiques et les bactéries, cause d'allergies et de troubles.
						</strong>
					</li>
					<li>
						<strong>Facile à travailler.</strong> Le produit se prête à être travaillé (coupé, percé, etc.) comme la pierre naturelle pour satisfaire tout type de personnalisation.
					</li>
					<li>
						<strong>Inaltérable.</strong> Aucun problème avec les casseroles chaudes ou les cigarettes allumées, qui, au contraire, endommagent le bois, les stratifiés ou les agglomérés avec des résines.
					</li>
					<li>
						<strong>Facile à nettoyer.</strong> Il est possible d'utiliser des détergents ou des solvants très forts sans risquer d'endommager le matériau.
					</li>
					<li>
						<strong>Résistant à la glace.</strong> Le matériau est résistant au froid et à la glace.
					</li>
					<li>
						<strong>Stable chromatique.</strong> Les couleurs sont totalement stables et ne changent pas en raison de l'exposition au soleil, aux agents atmosphériques ou à la pollution.
					</li>
				</Listado>
				<Text>
					<strong>ÉCOLOGIQUE</strong>
					<br />
					<br />
					Ne contient pas de scellements chimiques, de vernis ou de résines, n'émet pas d'exhalations même avec la chaleur d'une flamme. Contrairement à certaines pierres naturelles, il n'émet pas de radon ou de gaz radioactifs et n'est pas poli avec du plomb. Il est produit en respectant l'environnement.
					<br />
					<br />
					<strong>RÉSISTANCE AUX CHANGEMENTS BRUSQUES DE TEMPÉRATURE</strong>
					<br />
					<br />
					<strong>RÉSISTANCE À LA FLEXION AVEC CHARGES FIXES ET STATIQUES</strong>
					<br />
					<br />
					<strong>RÉSISTANCE À L'IMPACT, SÉCURITÉ À L'ABRASION</strong>
				</Text>
				<Listado>
					<li>Expansion insignifiante due à l'humidité</li>
					<li>Incombustible</li>
					<li>Résistant au feu</li>
					<li>Absence de danger en cas d'incendie</li>
					<li>Sécurité électrique</li>
				</Listado>
				<Text>
					<strong>SANTÉ ET BIEN-ÊTRE</strong>
				</Text>
				<Listado>
					<li>Manque d'odeur propre ou acquise</li>
					<li>Résistance à la libération de sa propre poussière</li>
					<li>Facilité de nettoyage de la poussière acquise</li>
					<li>
						C'est un produit qui, en raison de sa capacité d'isolation électrique, empêche la capture de poussière électriquement active de l'environnement
					</li>
					<li>Convenable lorsque l'utilisation de l'eau est abondante</li>
					<li>
						C'est l'installation définitive : il n'a pas besoin d'entretien après son installation
					</li>
				</Listado>
			</StyledCaracteristicas>
			<StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
				<Titulo>Données techniques</Titulo>
				<Text>
					<strong>CARACTÉRISTIQUES PHYSIQUES ET MÉCANIQUES</strong>
					<br />
					<br />
					Les pièces en céramique sont classées comme des carreaux de céramique pressés à sec avec une faible absorption d'eau selon la norme UNE-EN 14411, avec les caractéristiques déclarées par le fabricant :
					<br />
					<br />
				</Text>
				<>
					<Box sx={{ width: "100%", overflow: "auto", mt: 1 }}>
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
								<Typography sx={{ fontWeight: "bold" }}>
									Dimensions et tolérances
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
										aria-label="tableau des caractéristiques dimensionnelles"
										sx={{
											tableLayout: "fixed",
											minWidth: 900,
										}}
									>
										<TableHead>
											<TableRow>
												<TableCell
													sx={{ padding: "10px 10px", width: "60px" }}
												></TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													CARACTÉRISTIQUES DIMENSIONNELLES
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													UNE EN-14411 (1)
													<br />
													ISO 13006 ANEXE G
												</TableCell>
												<TableCell
													align="center"
													colSpan={3}
													sx={{ padding: "10px 10px" }}
												>
													VALEURS DOLCKER 1ÈRE QUALITÉ
													<TableRow>
														<TableCell
															align="center"
															sx={{ padding: "10px 10px" }}
														>
															SATINÉ 60X120 11,5 MM
															<br />
															CALIBRE 1 597,2 X 1197,3
														</TableCell>
														<TableCell
															align="center"
															sx={{ padding: "10px 10px" }}
														>
															MATE 60X120 14 MM
															<br />
															CALIBRE 1 597,2 X 1197,3
														</TableCell>
														<TableCell
															align="center"
															sx={{ padding: "10px 10px" }}
														>
															RÚSTICO 60X120 14MM
															<br />
															CALIBRE 5 600,4 X 1200,4
														</TableCell>
													</TableRow>
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
														alt="dimension-longueur"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													LONGUEUR ET LARGEUR
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													2
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													0,6%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,2%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,2%
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell sx={{ padding: "10px 10px" }}>
													ÉPAISSEUR
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													2
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													5%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 5,0%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 5,0%
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell sx={{ padding: "10px 10px" }}>
													DEFORMATIONS DES BORDS
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													2
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													0,5%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,2%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,2%
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell sx={{ padding: "10px 10px" }}>
													ENTAILLES
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													3
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													0,5%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,25%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,25%
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
														alt="dimension-courbure"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													COURBURE CENTRALE ET DES BORDS
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													2
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													0,5%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,2%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,2%
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell sx={{ padding: "10px 10px" }}>
													DEFORMATIONS
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													2
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													0,5%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,2%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													± 0,2%
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align="center" sx={{ padding: "5px" }}>
													<img
														src={dimension3}
														alt="dimension-absorption"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													ABSORPTION D'EAU
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													3
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													≤ 0,5% MAX 0,6 %
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													≤ 0,1%
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													≤ 0,1%
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</AccordionDetails>
						</Accordion>
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
								<Typography sx={{ fontWeight: "bold" }}>
									Caractéristiques mécaniques
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
										aria-label="tableau des caractéristiques mécaniques"
										sx={{
											tableLayout: "fixed",
											minWidth: 900,
										}}
									>
										<TableHead>
											<TableRow>
												<TableCell
													sx={{ padding: "10px 10px", width: "60px" }}
												></TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													CARACTÉRISTIQUES MÉCANIQUES
													<br />
													MÉCANIQUE CHARACTERISTICS
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													UNE EN-14411 (1)
													<br />
													ISO 13006 ANEXE G
												</TableCell>
												<TableCell
													align="center"
													colSpan={3}
													sx={{ padding: "10px 10px" }}
												>
													VALEURS DOLCKER 1ÈRE QUALITÉ / DOLCKER VALUES 1ST
													QUALITY
													<TableRow>
														<TableCell
															align="center"
															sx={{ padding: "10px 10px" }}
														>
															SATINÉ 60X120 11,5 MM
															<br />
															CALIBRE 1 597,2 X 1197,3
														</TableCell>
														<TableCell
															align="center"
															sx={{ padding: "10px 10px" }}
														>
															MATE 60X120 14 MM
															<br />
															CALIBRE 1 597,2 X 1197,3
														</TableCell>
														<TableCell
															align="center"
															sx={{ padding: "10px 10px" }}
														>
															RÚSTICO 60X120 14MM
															<br />
															CALIBRE 5 600,4 X 1200,4
														</TableCell>
													</TableRow>
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
														alt="mecanica-force"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													FORCE DE RUPTURE
													<br />
													BREAKING STRENGTH
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													4
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													1.300 N
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													≥ 2.000 N
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													≥ 12.000 N
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell sx={{ padding: "10px 10px" }}>
													RÉSISTANCE À LA FLEXION
													<br />
													BENDING STRENGTH
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													4
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													≥ 35 N/MM2
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													≥ 42 N/MMu00b2
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													≥ 50 N/MMu00b2
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													rowSpan={1}
													align="center"
													sx={{ padding: "5px" }}
												>
													<img
														src={mecanica2}
														alt="mecanica-impact"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													RÉSISTANCE À L'IMPACT
													<br />
													IMPACT RESISTANCE
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													5
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													MD
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													0,85
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													0,81
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													rowSpan={1}
													align="center"
													sx={{ padding: "5px" }}
												>
													<img
														src={mecanica3}
														alt="mecanica-abrasion"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													RÉSISTANCE À L'ABRASION PROFONDE
													<br />
													DEEP ABRASION RESISTANCE
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													6
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													&lt; 175 MM3
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													&lt; 145 MMu00b3
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													&lt; 145 MMu00b3
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													rowSpan={1}
													align="center"
													sx={{ padding: "5px" }}
												>
													<img
														src={mecanica4}
														alt="mecanica-dilatation"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													DILATATION THERMIQUE LINÉAIRE
													<br />
													LINEAR THERMAL-EXPANSION
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													6
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													MD
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													&lt; 7,5X10-6 u00baC-1
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													&lt; 7,5X10-6 u00baC-1
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													rowSpan={1}
													align="center"
													sx={{ padding: "5px" }}
												>
													<img
														src={mecanica5}
														alt="mecanica-dilatation"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													CHOQUE THERMIQUE
													<br />
													THERMAL SHOCK
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													9
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													MD
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													RESISTE
													<br />
													RESISTS
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													RESISTE
													<br />
													RESISTS
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell
													rowSpan={1}
													align="center"
													sx={{ padding: "5px" }}
												>
													<img
														src={mecanica6}
														alt="mecanica-dilatation"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													RÉSISTANCE À LA GLACE
													<br />
													FROST RESISTANCE
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													12
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													EXIGÉ
													<br />
													REQUIRED
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													RESISTE
													<br />
													RESISTS
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													RESISTE
													<br />
													RESISTS
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</AccordionDetails>
						</Accordion>
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
								<Typography sx={{ fontWeight: "bold" }}>
									Caractéristiques d'hygiène
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
										aria-label="tableau des caractéristiques d'hygiène"
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
												<TableCell
													sx={{ width: "180px", padding: "10px 10px" }}
												>
													CARACTÉRISTIQUES D'HYGIÈNE
												</TableCell>
												<TableCell
													sx={{ width: "220px", padding: "10px 10px" }}
												>
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
												<TableCell
													colSpan={3}
													align="center"
													sx={{ width: "400px", padding: "10px 10px" }}
												>
													DOLCKER
													<br />
													Values 1st Quality
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													SATINÉ
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
														alt="higiene-résistance-chimique"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell rowSpan={4} sx={{ padding: "10px 10px" }}>
													RÉSISTANCE CHIMIQUE
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													ACIDES À FAIBLE CONCENTRATION
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													13
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													MD
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell sx={{ padding: "10px 10px" }}>
													ACIDES À HAUTE CONCENTRATION
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													13
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													MD
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE HA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE HA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE HA
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell sx={{ padding: "10px 10px" }}>
													BASES À FAIBLE CONCENTRATION
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													13
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													MD
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell sx={{ padding: "10px 10px" }}>
													BASES À HAUTE CONCENTRATION
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													13
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													MD
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE HA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE HA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE HA
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell align="center" sx={{ padding: "5px" }}>
													<img
														src={higiene2}
														alt="higiene-taches"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													RÉSISTANCE AUX TACHES
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
														alt="higiene-nettoyage"
														style={{
															width: "40px",
															height: "40px",
															filter:
																"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
														}}
													/>
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}>
													PRODUITS DE NETTOYAGE MÉNAGERS ET ADDITIFS POUR PISCINES
												</TableCell>
												<TableCell sx={{ padding: "10px 10px" }}></TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													13
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													MÍNIMO UB
													<br />
													MINIMUM UB
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
												<TableCell align="center" sx={{ padding: "10px 10px" }}>
													CLASSE LA
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</AccordionDetails>
						</Accordion>
					</Box>
				</>
			</StyledCaracteristicas>
		</>
	);
};

export default Caracteristicas;
