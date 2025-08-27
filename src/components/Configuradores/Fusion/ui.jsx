import React, { useState } from "react";
import { useConfigStore } from "./store";
import IconoSelect from "../../../assets/icons/open-indicator.svg";
import IconoMenu from "../../../assets/icons/abrir-menu.svg";
//-------- Iconos de material perfil
import { CatalogoPerfiles } from "./Materiales";
//--------
import { TIPOS_MATERIAL, TEXTURAS_POR_MATERIAL, SISTEMAS_FUSION } from "./texturas";
import { Popover, Button, RadioGroup, FormControlLabel, Radio, FormControl, Typography, Box, Slider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";

// Define Styled Components

// Constants for MenuIcon positioning
const MENU_MAX_WIDTH = 350; // px, from MenuContainer's max-width
const ICON_WIDTH = 30; // px, from MenuIcon's width
const ICON_MARGIN_RIGHT_OPEN = 10; // px, desired margin from the right edge of the open menu
const ICON_POSITION_LEFT_OPEN = MENU_MAX_WIDTH - ICON_WIDTH - ICON_MARGIN_RIGHT_OPEN; // 310px
const ICON_POSITION_LEFT_CLOSED = 20; // px

const Footer = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 20px;
	max-width: ${MENU_MAX_WIDTH}px;
	background: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(10px);
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	z-index: 1;
	/* cursor: pointer; */
	opacity: 0;
	transform: translateY(20px);
	transition:
		opacity 1.5s ease-in-out,
		transform 1.5s ease-in-out;

	&.visible {
		opacity: 1;
		transform: translateY(0);
	}
`;

const FooterTitle = styled(Typography)`
	font-size: 0.9rem;
	font-weight: 600;
	margin-bottom: 8px;
	color: #333;
	/* text-align: center; */
	width: 100%;
`;

const FooterContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	gap: 8px;
`;

const FooterItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* flex: 1; */
	min-width: 0; /* Allows text truncation */
	/* padding: 0 8px; */
	box-sizing: border-box;
`;

const FooterLabel = styled(Typography)`
	font-size: 0.8rem;
	color: #555;
	margin-bottom: 4px;
`;

const FooterValue = styled.div`
	font-weight: 500;
	text-align: center;
	font-size: 0.8rem;
	margin-top: 4px;
	/* white-space: break-spaces; */
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
`;

const Thumbnail = styled.img`
	display: block;
	margin: 0 auto;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	border: 2px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PlaceholderCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #e0e0e0;
	border: 2px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	color: #9e9e9e;
`;

const MenuIcon = styled.img`
	position: absolute;
	top: 3%;
	left: ${({ isOpen }) => (isOpen ? `${ICON_POSITION_LEFT_OPEN}px` : `${ICON_POSITION_LEFT_CLOSED}px`)};
	width: ${ICON_WIDTH}px;
	z-index: 11;
	cursor: pointer;
	transition:
		transform 1.5s ease-in-out,
		filter 1.5s ease-in-out,
		left 1.5s ease-in-out; // Added 'left' to transition
	filter: ${({ isOpen }) => (isOpen ? "invert(0)" : "invert(1)")};
	transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;

const MenuContainer = styled.div`
	width: auto;
	max-width: ${MENU_MAX_WIDTH}px;
	height: 100%;
	background: rgba(255, 255, 255, 0.575);
	backdrop-filter: blur(7.5px);
	position: absolute;
	top: 0;
	z-index: 10;
	display: flex;
	flex-direction: column;

	/* CHANGED: Allow vertical scrolling if content overflows */
	overflow: hidden; /* Changed from overflow-y: auto */

	/* ADDED: CSS to hide the scrollbar itself */
	/* For WebKit browsers (Chrome, Safari, new Edge) */
	&::-webkit-scrollbar {
		display: none;
	}

	/* For Firefox */
	scrollbar-width: none;

	/* For IE and old Edge */
	-ms-overflow-style: none;

	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	left: ${({ isOpen }) => (isOpen ? "0" : `-${MENU_MAX_WIDTH}px`)};
	visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

	transition:
		left 1.5s ease-in-out,
		opacity 1.5s ease-in-out,
		visibility 0s ease-in-out ${({ isOpen }) => (isOpen ? "0s" : "1.5s")};
`;

const MenuContent = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	flex: 1;
	overflow-y: auto;
	padding-bottom: 100px; /* Space for the fixed footer */
`;

const MaterialOption = ({ src, alt, label, isSelected, onClick }) => (
	<Box
		onClick={onClick}
		sx={{
			display: "flex",
			flexDirection: "column",
			gap: 1,
			alignItems: "center",
			width: "calc(33.333% - 16px)", // 3 items per row with gap
			minWidth: "70px",
			padding: "8px",
			border: isSelected ? "2px solid #414141" : "2px solid transparent",
			borderRadius: "8px",
			cursor: "pointer",
			transition: "border-color 0.3s ease, background-color 0.3s ease",
			boxSizing: "border-box",
			"&:hover": {
				borderColor: isSelected ? "#c9c9c9" : "#e0e0e0",
				backgroundColor: isSelected ? "transparent" : "#f5f5f5",
			},
		}}
	>
		<Thumbnail src={src} alt={alt} />
		<FooterLabel sx={{ textAlign: "center" }}>{label}</FooterLabel>
	</Box>
);

export const TXTUI = () => {
	const {
		menuSeleccionActivo,
		setMenuSeleccionActivo,
		materialPorcelanico1,
		materialPorcelanico2,
		materialPorcelanico3,
		porcentajeMaterial1,
		porcentajeMaterial2,
		porcentajeMaterial3,
		setMaterialPorcelanico1,
		setMaterialPorcelanico2,
		setMaterialPorcelanico3,
		setPorcentajeMaterial1,
		setPorcentajeMaterial2,
		setPorcentajeMaterial3,
		setPorcentajesBalanceados,
		materialPerfilSeleccionado,
		setMaterialPerfilSeleccionado,
		setSection1,
		setSection2,
		setSection3,
		setSection4,
		setSection5,
		setSection6,
		sistemaActivo, // Destructure from store
		setSistemaActivo, // Destructure from store
	} = useConfigStore();
	const [isMenuOpen, setIsMenuOpen] = useState(true); // Changed: Default state is now closed
	// Popover for selecting materials per slot
	const [slotPopoverAnchor, setSlotPopoverAnchor] = useState(null);
	const [activeSlot, setActiveSlot] = useState(null); // 1 | 2 | 3

	// Track if user explicitly picked a material per slot (UI placeholder logic)
	const [slot1Picked, setSlot1Picked] = useState(false);
	const [slot2Picked, setSlot2Picked] = useState(false);
	const [slot3Picked, setSlot3Picked] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Sistema buttons click
	const handleSistemaClick = (sistema) => {
		setSistemaActivo(sistema);
		// Auto-assign materials for the selected system to avoid invalid states
		const ids = SISTEMAS_FUSION[sistema] || [];
		const id1 = ids[0] ?? null;
		const id2 = ids[1] ?? ids[0] ?? null;
		const id3 = ids[2] ?? ids[0] ?? null;
		if (id1) setMaterialPorcelanico1(id1);
		if (id2) setMaterialPorcelanico2(id2);
		if (id3) setMaterialPorcelanico3(id3);
		// Reset UI picked flags so mini slots start empty when switching system
		setSlot1Picked(false);
		setSlot2Picked(false);
		setSlot3Picked(false);
	};

	const handleReiniciarPosicionamiento = (event) => {
		event.stopPropagation(); // Detener la propagación del evento
		setSection1(0);
		setSection2(0);
		setSection3(0);
		setSection4(0);
		setSection5(0);
		setSection6(0);
	};

	// Randomize percentages (multiples of 5) that sum to 100
	const handleRandomizePercentages = () => {
		// Work in units of 5% -> total units = 20
		const unitsTotal = 20;
		const aUnits = Math.floor(Math.random() * (unitsTotal + 1)); // 0..20
		const bUnits = Math.floor(Math.random() * (unitsTotal - aUnits + 1)); // 0..(20-a)
		const cUnits = unitsTotal - aUnits - bUnits;
		const a = aUnits * 5;
		const b = bUnits * 5;
		const c = cUnits * 5;
		setPorcentajeMaterial1(a);
		setPorcentajeMaterial2(b);
		setPorcentajeMaterial3(c);
	};

	// Get the selected materials for the footer
	const selectedPorcelain1 = Object.values(TEXTURAS_POR_MATERIAL).find((material) => material.id === materialPorcelanico1);
	const selectedPorcelain2 = Object.values(TEXTURAS_POR_MATERIAL).find((material) => material.id === materialPorcelanico2);
	const selectedPorcelain3 = Object.values(TEXTURAS_POR_MATERIAL).find((material) => material.id === materialPorcelanico3);
	const selectedProfile = Object.values(CatalogoPerfiles).find((material) => material.id === materialPerfilSeleccionado);

	// Filter materials by current Fusion system
	const materialIdsSistema = SISTEMAS_FUSION[sistemaActivo] || [];
	const filteredMaterials = materialIdsSistema.map((id) => TEXTURAS_POR_MATERIAL[id]).filter(Boolean);

	// Popover handlers for slot material selection
	const openSlotPopover = (event, slot) => {
		setSlotPopoverAnchor(event.currentTarget);
		setActiveSlot(slot);
	};

	const closeSlotPopover = () => {
		setSlotPopoverAnchor(null);
		setActiveSlot(null);
	};

	const handleSelectMaterialForActiveSlot = (materialId) => {
		if (activeSlot === 1) {
			setMaterialPorcelanico1(materialId);
			setSlot1Picked(true);
		}
		if (activeSlot === 2) {
			setMaterialPorcelanico2(materialId);
			setSlot2Picked(true);
		}
		if (activeSlot === 3) {
			setMaterialPorcelanico3(materialId);
			setSlot3Picked(true);
		}
		closeSlotPopover();
	};

	return (
		<>
			<MenuIcon src={IconoMenu} isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
			<MenuContainer isOpen={isMenuOpen}>
				<MenuContent>
					<Typography variant="h4" sx={{ marginBottom: "10px" }}>
						Configuración
					</Typography>

					{/* Sistema Fusion buttons */}
					<Box sx={{ display: "flex", gap: 1, mb: 2, justifyContent: "center", flexWrap: "wrap" }}>
						{["Terracota", "Color", "Petra", "Texture"].map((sys) => (
							<Button
								key={sys}
								variant={sistemaActivo === sys ? "contained" : "outlined"}
								size="small"
								sx={{ minWidth: 90 }}
								onClick={() => handleSistemaClick(sys)}
							>
								{sys}
							</Button>
						))}
					</Box>

					{/* Mini menú de 3 slots por sistema */}
					<Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mb: 2 }}>
						<Box onClick={(e) => openSlotPopover(e, 1)} sx={{ cursor: "pointer", textAlign: "center", width: 100 }}>
							<FooterLabel>{`${sistemaActivo} 1 (${porcentajeMaterial1}%)`}</FooterLabel>
							{slot1Picked && selectedPorcelain1?.imagenes?.[0] ? (
								<Thumbnail src={selectedPorcelain1.imagenes[0]} alt={selectedPorcelain1?.nombre || ""} />
							) : (
								<PlaceholderCircle>
									<AddIcon fontSize="small" />
								</PlaceholderCircle>
							)}
							<FooterValue>{slot1Picked ? selectedPorcelain1?.nombre || "Seleccionar" : "Selecciona material 1"}</FooterValue>
						</Box>
						<Box onClick={(e) => openSlotPopover(e, 2)} sx={{ cursor: "pointer", textAlign: "center", width: 100 }}>
							<FooterLabel>{`${sistemaActivo} 2 (${porcentajeMaterial2}%)`}</FooterLabel>
							{slot2Picked && selectedPorcelain2?.imagenes?.[0] ? (
								<Thumbnail src={selectedPorcelain2.imagenes[0]} alt={selectedPorcelain2?.nombre || ""} />
							) : (
								<PlaceholderCircle>
									<AddIcon fontSize="small" />
								</PlaceholderCircle>
							)}
							<FooterValue>{slot2Picked ? selectedPorcelain2?.nombre || "Seleccionar" : "Selecciona material 2"}</FooterValue>
						</Box>
						<Box onClick={(e) => openSlotPopover(e, 3)} sx={{ cursor: "pointer", textAlign: "center", width: 100 }}>
							<FooterLabel>{`${sistemaActivo} 3 (${porcentajeMaterial3}%)`}</FooterLabel>
							{slot3Picked && selectedPorcelain3?.imagenes?.[0] ? (
								<Thumbnail src={selectedPorcelain3.imagenes[0]} alt={selectedPorcelain3?.nombre || ""} />
							) : (
								<PlaceholderCircle>
									<AddIcon fontSize="small" />
								</PlaceholderCircle>
							)}
							<FooterValue>{slot3Picked ? selectedPorcelain3?.nombre || "Seleccionar" : "Selecciona material 3"}</FooterValue>
						</Box>
					</Box>

					{/* Desplegable de materiales por slot (Popover) */}
					<Popover
						open={Boolean(slotPopoverAnchor)}
						anchorEl={slotPopoverAnchor}
						onClose={closeSlotPopover}
						anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
						transformOrigin={{ vertical: "top", horizontal: "left" }}
					>
						<Box sx={{ p: 2, width: 325 }}>
							<Typography variant="subtitle1" sx={{ mb: 1 }}>
								{`Seleccionar acabado para ${sistemaActivo} ${activeSlot ?? ""}`}
							</Typography>
							<Box sx={{ mb: 2 }}>
								<Box
									sx={{
										display: "flex",
										flexWrap: "wrap",
										gap: "8px",
										justifyContent: "space-between",
										width: "100%",
										maxHeight: "260px",
										overflow: "auto",
									}}
								>
									{filteredMaterials.map((material) => (
										<MaterialOption
											key={`mat-${material.id}`}
											src={material.imagenes[0]}
											alt={material.nombre}
											label={material.nombre}
											isSelected={
												activeSlot === 1
													? materialPorcelanico1 === material.id
													: activeSlot === 2
														? materialPorcelanico2 === material.id
														: materialPorcelanico3 === material.id
											}
											onClick={() => handleSelectMaterialForActiveSlot(material.id)}
										/>
									))}
								</Box>
							</Box>
						</Box>
					</Popover>

					{/* Distribución de porcentajes */}
					<Box sx={{ mt: 2 }}>
						<Typography variant="subtitle1" gutterBottom>
							Distribución de porcentajes
						</Typography>
						<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
							<Typography sx={{ width: 110 }}>Material 1</Typography>
							<Slider
								value={porcentajeMaterial1}
								min={0}
								max={100}
								step={5}
								sx={{ flex: 1 }}
								onChange={(_, v) => setPorcentajesBalanceados(1, Number(v))}
							/>
							<Typography sx={{ width: 40, textAlign: "right" }}>{porcentajeMaterial1}%</Typography>
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
							<Typography sx={{ width: 110 }}>Material 2</Typography>
							<Slider
								value={porcentajeMaterial2}
								min={0}
								max={100}
								step={5}
								sx={{ flex: 1 }}
								onChange={(_, v) => setPorcentajesBalanceados(2, Number(v))}
							/>
							<Typography sx={{ width: 40, textAlign: "right" }}>{porcentajeMaterial2}%</Typography>
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
							<Typography sx={{ width: 110 }}>Material 3</Typography>
							<Slider
								value={porcentajeMaterial3}
								min={0}
								max={100}
								step={5}
								sx={{ flex: 1 }}
								onChange={(_, v) => setPorcentajesBalanceados(3, Number(v))}
							/>
							<Typography sx={{ width: 40, textAlign: "right" }}>{porcentajeMaterial3}%</Typography>
						</Box>
						<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
							Total: {porcentajeMaterial1 + porcentajeMaterial2 + porcentajeMaterial3}%
						</Typography>
						<Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
							<Button size="small" variant="outlined" onClick={handleRandomizePercentages}>
								Aleatorio
							</Button>
						</Box>
					</Box>
				</MenuContent>

				{/* Fixed Footer */}
			</MenuContainer>
			<Footer className={!isMenuOpen && !menuSeleccionActivo ? "visible" : ""}>
				<FooterTitle>Selección actual</FooterTitle>
				<FooterContent>
					<FooterItem>
						<FooterLabel>
							{sistemaActivo} ({porcentajeMaterial1}%)
						</FooterLabel>
						{selectedPorcelain1 && selectedPorcelain1.imagenes && selectedPorcelain1.imagenes[0] ? (
							<Thumbnail src={selectedPorcelain1.imagenes[0]} alt={selectedPorcelain1.nombre} />
						) : (
							<Thumbnail src="" alt="No seleccionado" style={{ backgroundColor: "#f0f0f0" }} />
						)}
						<FooterValue>{selectedPorcelain1?.nombre || "No seleccionado"}</FooterValue>
					</FooterItem>

					<FooterItem>
						<FooterLabel>
							{sistemaActivo} ({porcentajeMaterial2}%)
						</FooterLabel>
						{selectedPorcelain2 && selectedPorcelain2.imagenes && selectedPorcelain2.imagenes[0] ? (
							<Thumbnail src={selectedPorcelain2.imagenes[0]} alt={selectedPorcelain2.nombre} />
						) : (
							<Thumbnail src="" alt="No seleccionado" style={{ backgroundColor: "#f0f0f0" }} />
						)}
						<FooterValue>{selectedPorcelain2?.nombre || "No seleccionado"}</FooterValue>
					</FooterItem>

					<FooterItem>
						<FooterLabel>
							{sistemaActivo} ({porcentajeMaterial3}%)
						</FooterLabel>
						{selectedPorcelain3 && selectedPorcelain3.imagenes && selectedPorcelain3.imagenes[0] ? (
							<Thumbnail src={selectedPorcelain3.imagenes[0]} alt={selectedPorcelain3.nombre} />
						) : (
							<Thumbnail src="" alt="No seleccionado" style={{ backgroundColor: "#f0f0f0" }} />
						)}
						<FooterValue>{selectedPorcelain3?.nombre || "No seleccionado"}</FooterValue>
					</FooterItem>
				</FooterContent>
			</Footer>
		</>
	);
};

export const Iconos = ({ onConfigAccept }) => {
	const { setSelectedSection, setSection1, setSection2, setSection3, setSection4, setSection5, setSection6, menuSeleccionActivo } =
		useConfigStore();

	const iconSize = "30px";
	const iconSections = [
		{ name: "Seccion1", left: "36%", alt: "selector1" },
		{ name: "Seccion2", left: "42%", alt: "selector2" },
		{ name: "Seccion3", left: "50%", alt: "selector3" },
		{ name: "Seccion4", left: "60%", alt: "selector4" },
		{ name: "Seccion5", left: "72%", alt: "selector5" },
		{ name: "Seccion6", left: "88%", alt: "selector6" },
	];

	const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
	const [popoverOpenForSection, setPopoverOpenForSection] = useState(null);
	const [currentPopoverValue, setCurrentPopoverValue] = useState(0);

	const handleIconClick = (event, sectionName) => {
		setPopoverAnchorEl(event.currentTarget);
		setPopoverOpenForSection(sectionName);
		setCurrentPopoverValue(0); // Reset to default numeric value
		setSelectedSection(sectionName);
	};

	const handlePopoverClose = () => {
		setPopoverAnchorEl(null);
		setPopoverOpenForSection(null);
	};

	const handlePopoverValueChange = (event) => {
		const numericValue = parseFloat(event.target.value);
		setCurrentPopoverValue(numericValue);

		if (popoverOpenForSection) {
			switch (popoverOpenForSection) {
				case "Seccion1":
					setSection1(numericValue);
					break;
				case "Seccion2":
					setSection2(numericValue);
					break;
				case "Seccion3":
					setSection3(numericValue);
					break;
				case "Seccion4":
					setSection4(numericValue);
					break;
				case "Seccion5":
					setSection5(numericValue);
					break;
				case "Seccion6":
					setSection6(numericValue);
					break;
				default:
					console.warn("Unknown section in handlePopoverValueChange:", popoverOpenForSection);
			}
		}
	};

	const handleAccept = () => {
		handlePopoverClose();
	};

	const open = Boolean(popoverAnchorEl);
	const id = open ? `popover-${popoverOpenForSection}` : undefined;

	return (
		<>
			<div
				style={{
					width: "100%",
					height: "100%",
					backgroundColor: "transparent",
					position: "absolute",
					left: 0,
					top: 0,
					zIndex: 9,
					display: menuSeleccionActivo ? "block" : "none",
				}}
			>
				{iconSections.map((icon) => (
					<div
						key={icon.name}
						onClick={(e) => handleIconClick(e, icon.name)}
						style={{
							position: "absolute",
							left: icon.left,
							top: "50%",
							width: iconSize,
							height: iconSize,
							cursor: "pointer",
						}}
					>
						<img src={IconoSelect} alt={icon.alt} style={{ width: "100%", height: "100%" }} />
					</div>
				))}
			</div>

			{popoverOpenForSection && (
				<Popover
					id={id}
					open={open}
					anchorEl={popoverAnchorEl}
					onClose={handlePopoverClose}
					anchorOrigin={{
						vertical: "center",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "center",
						horizontal: "right",
					}}
				>
					<Box sx={{ p: 2, minWidth: "150px" }}>
						<Typography variant="subtitle1" gutterBottom>
							{`Configurar ${popoverOpenForSection}`}
						</Typography>
						<FormControl component="fieldset">
							<RadioGroup
								aria-label="altura-seleccion"
								name="altura-seleccion-radio-buttons-group"
								value={currentPopoverValue}
								onChange={handlePopoverValueChange}
							>
								<FormControlLabel value={0} control={<Radio size="small" />} label="0cm" />
								<FormControlLabel value={0.06} control={<Radio size="small" />} label="3cm" />
								<FormControlLabel value={0.12} control={<Radio size="small" />} label="6cm" />
							</RadioGroup>
							<Button onClick={handleAccept} variant="contained" size="small" sx={{ mt: 1 }}>
								Aceptar
							</Button>
						</FormControl>
					</Box>
				</Popover>
			)}
		</>
	);
};
