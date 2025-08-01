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
				<Titulo>Technical Characteristics</Titulo>
				<ImageWithCaption
					src={caracter1}
					alt="Render por parte de 7475"
					caption=""
					columnSpan="6"
				/>
				<Text>
					Dolcker Line is a compact, resistant material characterized by an
					almost non-existent porosity and water absorption less than 0.1%
					<br />
					<br />
					Its vitrified structure, with a low degree of porosity, guarantees a
					high impermeability to dirt and ice.
					<br />
					<br />
					Porcelain stoneware body.
					<br />
					<br />
					The advantages of a unique material.
				</Text>
				<Listado>
					<li>
						<strong>
							Wide range of colors, formats, thicknesses, and finishes.
						</strong>
					</li>
					<li>
						<strong>It is acid-resistant.</strong> It is insensitive to the most
						common acids (Does not resist attack by hydrofluoric acid).
					</li>
					<li>
						<strong>It is resistant.</strong> Resistant to abrasion and wear
						more than any natural material.
					</li>
					<li>
						<strong>Non-combustible.</strong> The material does not burn or
						produce toxic-noxious gases or fumes in case of fire or exposure to
						flames.
					</li>
					<li>
						<strong>
							Does not retain organic substances and bacteria, cause of
							allergies and disturbances.
						</strong>
					</li>
					<li>
						<strong>Easy to work with.</strong> The product can be worked (cut,
						drilled, etc.) like natural stone to satisfy any type of
						customization.
					</li>
					<li>
						<strong>It is unassailable.</strong> No problem with hot pots or lit
						cigarettes, which on the contrary damage wood, plastic laminates or
						resin-bonded agglomerates.
					</li>
					<li>
						<strong>Easy to clean.</strong> It is possible to use very strong
						detergents or solvents without the risk of damaging the material.
					</li>
					<li>
						<strong>Resistant to frost.</strong> The material is resistant to
						cold and frost.
					</li>
					<li>
						<strong>Chromatic stability.</strong> Colors are totally stable to
						ultraviolet light.
					</li>
				</Listado>
				<Text>
					<strong>ECOLOGICAL</strong>
					<br />
					<br />
					It does not contain chemical waterproofing agents, varnishes or
					resins, nor does it emit exhalations even with the heat of a flame.
					Unlike some natural stones, it does not emanate Radon or other
					radioactive gases and is a completely recyclable material, respecting
					the environment.
					<br />
					<br />
					<strong>RESISTANCE TO ABRUPT TEMPERATURE CHANGES</strong>
					<br />
					<br />
					<strong>RESISTANCE TO FLEXION WITH FIXED AND STATIC LOADS</strong>
					<br />
					<br />
					<strong>IMPACT RESISTANCE, ABRASION SAFETY</strong>
				</Text>
				<Listado>
					<li>Insignificant moisture expansion</li>
					<li>Non-combustible</li>
					<li>Fireproof</li>
					<li>No danger in case of fire</li>
					<li>Electrical safety</li>
				</Listado>
				<Text>
					<strong>HEALTH AND WELLBEING</strong>
				</Text>
				<Listado>
					<li>Lack of inherent or acquired odor</li>
					<li>Resistance to self-dust release</li>
					<li>Easy cleaning of acquired dust</li>
					<li>Easy cleaning and maintenance</li>
					<li>
						It is a product that, due to its electrical insulating capacity,
						prevents the capture of electrically active environmental dust that
						adheres to surfaces.
					</li>
					<li>Suitable for areas where water is abundant</li>
					<li>
						It is the definitive installation: it does not require any
						maintenance after its installation.
					</li>
				</Listado>
			</StyledCaracteristicas>
			<StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
				<Titulo>Technical Data</Titulo>
				<Text>
					<strong>PHYSICAL AND MECHANICAL CHARACTERISTICS</strong>
					<br />
					<br />
					The ceramic pieces are classified as dry-pressed ceramic tiles with
					low water absorption according to UNE-EN 14411 standard, with the
					following characteristics declared by the manufacturer:
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
								DIMENSIONAL CHARACTERISTICS
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
									aria-label="dimensional characteristics table"
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
													DIMENSIONAL CHARACTERISTICS
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
													LENGTH AND WIDTH
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
												<Typography variant="body2">THICKNESS</Typography>
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
													WARPAGE OF EDGES
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
												<Typography variant="body2">WEDGING</Typography>
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
													CENTRAL AND EDGE CURVATURE
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
												<Typography variant="body2">WARPAGE</Typography>
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
													WATER ABSORPTION
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
								MECHANICAL CHARACTERISTICS
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
													MECHANICAL CHARACTERISTICS
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
													BREAKING STRENGTH
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
													MODULUS OF RUPTURA
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
													DEEP ABRASION RESISTANCE
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
													SURFACE ABRASION RESISTANCE
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
													THERMAL EXPANSION COEFFICIENT
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
													THERMAL SHOCK RESISTANCE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">10</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RESISTANT</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RESISTANT</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RESISTANT</Typography>
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
													FROST RESISTANCE
												</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">12</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">EXIGIDO</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RESISTANT</Typography>
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												<Typography variant="body2">RESISTANT</Typography>
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
								HYGIENIC CHARACTERISTICS
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
												HYGIENIC CHARACTERISTICS
											</TableCell>
											<TableCell sx={{ width: "220px", padding: "10px 10px" }}>
												TYPE OF ACID OR BASE
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
												RESISTENCIA QUÍMICA CHEMICAL RESISTANCE
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}>
												LOW CONCENTRATION ACIDS
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												HIGH CONCENTRATION ACIDS
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS HA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS HA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS HA
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												LOW CONCENTRATION ALKALI
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ padding: "10px 10px" }}>
												HIGH CONCENTRATION ALKALI
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MD
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS HA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS HA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS HA
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
												STAINS RESISTANCE
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
												HOUSEHOLD DETERGENTS AND ADDITIVES FOR SWIMMING-POOLS
											</TableCell>
											<TableCell sx={{ padding: "10px 10px" }}></TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												13
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												MINIMUM UB
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
											</TableCell>
											<TableCell align="center" sx={{ padding: "10px 10px" }}>
												CLASS LA
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

export default CaracteristicasTline;
