import { useState } from "react";
import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import { COLORS } from "@global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "@assets/images/GaleriaT5/IMG_5888.jpg";
import ImagenJorge from "@assets/images/DolckerTline/tablas.jpg";
import ImagenConstructiva from "@assets/images/DolckerTline/tablas.jpg";
import caracter2 from "@assets/icons/caracteristicas/caracteristicas_02.svg";
import caracter3 from "@assets/icons/caracteristicas/caracteristicas_03.svg";
import Text from "@components/Text";
import Listado from "@components/Listado";
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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dimension1 from "@assets/icons/caracteristicas/medida1.svg";
import dimension2 from "@assets/icons/caracteristicas/medida2.svg";
import dimension3 from "@assets/icons/caracteristicas/medida3.svg";
import mecanica1 from "@assets/icons/caracteristicas/mecanica1.svg";
import mecanica2 from "@assets/icons/caracteristicas/mecanica2.svg";
import mecanica3 from "@assets/icons/caracteristicas/mecanica3.svg";
import mecanica4 from "@assets/icons/caracteristicas/mecanica4.svg";
import mecanica5 from "@assets/icons/caracteristicas/mecanica5.svg";
import mecanica6 from "@assets/icons/caracteristicas/mecanica6.svg";
import higiene1 from "@assets/icons/caracteristicas/higiene1.svg";
import higiene2 from "@assets/icons/caracteristicas/higiene2.svg";
import higiene3 from "@assets/icons/caracteristicas/higiene3.svg";
const Caracteristicas = ({ id }) => {
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
					caption="Exemple de façade"
					columnSpan="6"
				/>
				<Text>
					<strong>Conception et polyvalence</strong>
				</Text>
				<Listado>
					<li>
						Parce que la variété est essentielle, T5 XL vous permet de choisir
						parmi une grande diversité de designs dans tous les styles.
					</li>
					<li>
						Chaque série propose des graphismes uniques pour des finitions
						personnalisées pleines de nuances.
					</li>
					<li>
						La collection T5 XL offre des solutions esthétiques pour chaque
						espace et projet.
					</li>
					<li>
						Polyvalence chromatique qui s'adapte à tout environnement intérieur
						ou extérieur.
					</li>
					<li>
						Possibilité de combiner différentes séries pour créer des espaces
						uniques.
					</li>
				</Listado>
				<Text>
					<strong>Format et performances</strong>
				</Text>
				<Listado>
					<li>
						Grande taille, grandes performances. Avec T5 XL, tous les avantages
						sont XXL.
					</li>
					<li>
						Le grand format permet des espaces continus avec moins de joints.
					</li>
					<li>
						Installation facile grâce à son rapport taille/poids optimisé.
					</li>
					<li>Idéal pour les grands projets où l'impact visuel est clé.</li>
					<li>
						Idéal pour les grands espaces où l'on souhaite maximiser la
						sensation d'ouverture.
					</li>
				</Listado>
				<Text>
					<strong>Innovation et qualité</strong>
				</Text>
				<Listado>
					<li>
						T5 XL est le résultat d'un engagement constant envers l'innovation
						technologique.
					</li>
					<li>
						Les dernières avancées en R&D intégrées au processus de fabrication
						donnent naissance à un produit aux qualités extraordinaires.
					</li>
					<li>Résistance supérieure aux chocs et à l'usure quotidienne.</li>
					<li>
						Propriétés antibactériennes pour des surfaces hygiéniques et sûres.
					</li>
					<li>
						Matériaux sélectionnés de première qualité pour une durabilité
						extrême.
					</li>
					<li>
						Processus de production durable respectueux de l'environnement.
					</li>
					<li>
						T5 XL représente l'avant-garde du design avec un caractère
						intemporel.
					</li>
				</Listado>
			</StyledCaracteristicas>
			<StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
				<Titulo>Données techniques</Titulo>
				<Text>
					<strong>CARACTÉRISTIQUES PHYSIQUES ET MÉCANIQUES</strong>
					<br />
					<br />
					Les pièces céramiques sont classées comme carreaux céramiques pressés
					à sec avec une faible absorption d'eau selon la norme UNE-EN 14411,
					avec les caractéristiques suivantes déclarées par le fabricant :
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
													CARACTÉRISTIQUES TECHNIQUES/
													<br />
													CARACTERÍSTICAS TÉCNICAS
												</Typography>
											</TableCell>
											<TableCell
												align="center"
												sx={{ padding: "10px 10px", width: "120px" }}
											>
												<Typography sx={{ fontWeight: 600 }}>
													RÉFÉRENCE NORMATIVE/
													<br />
													REFERENCE STANDARD
												</Typography>
											</TableCell>

											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													VALEUR REQUISE/
													<br />
													VALUE REQUIRED
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													VALEUR MOYENNE/
													<br />
													MEAN VALUE/OBTAINED
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
													LONGUEUR ET LARGEUR/
													<br />
													LENGTH AND WIDTH
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-2
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													± 0,6 % / ± 2,0 mm
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,6 %</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													ÉPAISSEUR/
													<br />
													THICKNESS
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-2
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													± 5 % / ± 0,5 mm
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													CUMPLE/
													<br />
													CONFORME
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													RECTITUDE DES BORDS/
													<br />
													STRAIGHTNESS OF EDGES
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-2
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													± 0,5 % / ± 1,5 mm
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,5 %</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													ORTHOGONALITÉ/
													<br />
													ORTHOGONALITY
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-2
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													± 0,6 % / ± 2,0 mm
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">± 0,6 %</Typography>
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
													PLANÉITÉ CENTRALE/
													<br />
													CENTRAL CURVATURE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-2
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													± 0,5 % / ± 2,0 mm
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													CUMPLE/
													<br />
													CONFORME
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													PLANÉITÉ LATÉRALE/
													<br />
													LATERAL CURVATURE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-2
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													± 0,5 % / ± 2,0 mm
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													CUMPLE/
													<br />
													CONFORME
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={dimension3}
													alt="dimension-absorcion"
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
													ABSORPTION D'EAU/
													<br />
													WATER ABSORPTION
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-3
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≤ 0,5 %</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≤ 0,5 %</Typography>
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
								CARACTÉRISTIQUES PHYSIQUES
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
													CARACTERÍSTICAS FÍSICAS
												</Typography>
											</TableCell>
											<TableCell
												align="center"
												sx={{ padding: "10px 10px", width: "120px" }}
											>
												<Typography sx={{ fontWeight: 600 }}>
													RÉFÉRENCE NORMATIVE
												</Typography>
											</TableCell>

											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													VALEUR REQUISE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													VALEUR MOYENNE
												</Typography>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
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
													RÉSISTANCE À LA RUPTURE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-4
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≥ 700 N</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">CONFORME</Typography>
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
													RÉSISTANCE À L'ABRASION
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-7
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													INDIQUER LE MODÈLE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">3 - 5</Typography>
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
													COEFFICIENT DE DILATATION THERMIQUE LINEAIRE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-8
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													INDIQUER LE MODÈLE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">≤ 9 · 10-6 K-1</Typography>
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
													RÉSISTANCE AU CHOQUE TÉRMIQUE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-9
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">PASSE-TEST</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RÉSISTE</Typography>
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
													RÉSISTANCE AU GEL
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-12
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">PASSE-TEST</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RÉSISTE</Typography>
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
													RÉSISTANCE AU FEU
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">-</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">-</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">A1</Typography>
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
								CARACTERISTIQUES QUIMIQUES
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
												sx={{ padding: "10px 10px", width: "60px" }}
											></TableCell>
											<TableCell sx={{ padding: "10px 10px", width: "180px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													CARACTERISTIQUES QUIMIQUES
												</Typography>
											</TableCell>
											<TableCell
												align="center"
												sx={{ padding: "10px 10px", width: "120px" }}
											>
												<Typography sx={{ fontWeight: 600 }}>
													RÉFÉRENCE NORMATIVE
												</Typography>
											</TableCell>

											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													VALEUR REQUISE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography sx={{ fontWeight: 600 }}>
													VALEUR MOYENNE
												</Typography>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={higiene3}
													alt="higiene-quimicos"
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
													RESISTENCIA A PRODUCTOS QUÍMICOS Y ADITIVOS DE PISCINA
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-13
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">GB MIN</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RESISTE (GA)</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={higiene1}
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
													RÉSISTANCE AUX ACIDES ET AUX BASES DE FAIBLE
													CONCENTRATION
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-13
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													RECOMMANDÉ PAR LE FABRICANT
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RÉSISTE (GLA)</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={higiene2}
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
													RÉSISTANCE AUX MANCHES
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-14
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">CLASSE 3 MIN</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">CLASSE 5</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={higiene1}
													alt="higiene-quimicos"
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
													RÉSISTANCE AUX ACIDES
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-13
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													GB MIN/
													<br />
													GB MIN
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RÉSISTE (GA)</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={higiene1}
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
													RÉSISTANCE AUX BASES
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-13
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													RECOMMANDÉ PAR LE FABRICANT
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RÉSISTE (GLA)</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" sx={{ padding: "5px" }}>
												<img
													src={higiene1}
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
													RÉSISTANCE AUX PRODUITS CHIMIQUES
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													EN-ISO
													<br />
													10545-13
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">
													GB MIN/
													<br />
													GB MIN
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RÉSISTE (GA)</Typography>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</AccordionDetails>
					</Accordion>
				</Box>
			</StyledCaracteristicas>
		</>
	);
};

export default Caracteristicas;
