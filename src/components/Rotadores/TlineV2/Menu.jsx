import React, { useState } from "react";
import { NombreMateriales } from "./Materiales";
import { SketchPicker } from "react-color";
import IconoRAL from "../../../assets/icons/RAL.png";
import modelConfig, {
	CATEGORIES,
	LED_TYPES,
	getModelsByType,
	getModelById,
} from "./modelosConfig";

// Import MUI components
import {
	Box,
	Typography,
	Tabs,
	Tab,
	Grid2,
	Button,
	Card,
	CardContent,
	CardMedia,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Drawer,
	IconButton,
	Divider,
	Paper,
	styled as muiStyled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Styled components using MUI's styled API
const MaterialButton = muiStyled(Button)(({ theme }) => ({
	width: 70,
	height: 75,
	padding: 0,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	margin: theme.spacing(0.5),
}));

const MaterialImage = muiStyled("img")({
	borderRadius: "50%",
	width: 50,
	height: 50,
	objectFit: "cover",
});

const MaterialText = muiStyled(Typography)({
	fontSize: 8,
	textAlign: "center",
	marginTop: 2,
	maxWidth: 65,
	minHeight: 65,
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "wrap",
	color: "#000",
});

const ModelCard = muiStyled(Card)(({ theme }) => ({
	margin: theme.spacing(1),
	cursor: "pointer",
	transition: "transform 0.2s ease-in-out",
	"&:hover": {
		transform: "scale(1.03)",
	},
	width: 100,
}));

const ModelCardMedia = muiStyled(CardMedia)({
	height: 60,
	width: "100",
	backgroundSize: "contain",
});

const StyledTab = muiStyled(Tab)({
	minWidth: "auto",
	fontSize: "0.8rem",
});

const Menu = ({
	handleModelChange,
	handleMaterialChange,
	color,
	setColor,
	colorPickerActive,
	setColorPickerActive,
}) => {
	// State for navigation
	const [currentView, setCurrentView] = useState("models"); // 'models', 'materials'
	const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.CG);
	const [selectedType, setSelectedType] = useState(LED_TYPES.LED);
	const [materialType, setMaterialType] = useState("metales");
	const [showColorPicker, setShowColorPicker] = useState(false);

	// Handle tab changes
	const handleCategoryChange = (event, newValue) => {
		setSelectedCategory(newValue);
	};

	const handleTypeChange = (event, newValue) => {
		setSelectedType(newValue);
	};

	// Handle model selection
	const handleModelSelect = (modelId) => {
		// Get the model configuration to check if it's a LED model
		const modelConfig = getModelById(modelId);

		// Change the model first
		handleModelChange(modelId, modelConfig?.hasEmisivo || false);
		// Then set the material to ensure it's applied to the new model
		handleMaterialChange(0);
		setCurrentView("materials");
	};

	// Handle back to models
	const handleBackToModels = () => {
		setCurrentView("models");
	};

	// Handle material type selection
	const handleMaterialTypeChange = (type) => {
		setMaterialType(type);
		setShowColorPicker(false);
		setColorPickerActive(false);
	};

	// Handle color change
	const handleColorChange = (newColor) => {
		setColor(newColor.hex);
		handleMaterialChange(0); // Reset material when color is selected
	};

	// Get models for the selected category and type
	const currentModels = getModelsByType(selectedCategory, selectedType);

	// Render models view
	const renderModelsView = () => (
		<Box>
			<Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
				<Tabs
					value={selectedCategory}
					onChange={handleCategoryChange}
					variant="fullWidth"
					aria-label="model categories"
				>
					<StyledTab label="CG" value={CATEGORIES.CG} />
					<StyledTab label="SG" value={CATEGORIES.SG} />
				</Tabs>
			</Box>

			<Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
				<Tabs
					value={selectedType}
					onChange={handleTypeChange}
					variant="fullWidth"
					aria-label="model types"
				>
					<StyledTab label="LED" value={LED_TYPES.LED} />
					<StyledTab label="NO LED" value={LED_TYPES.NOLED} />
				</Tabs>
			</Box>

			<Box sx={{ maxHeight: "70vh", overflow: "auto", p: 1 }}>
				<Grid2 container spacing={1}>
					{currentModels.map((model) => (
						<Grid2 item xs={6} sm={4} key={model.id}>
							<ModelCard onClick={() => handleModelSelect(model.id)}>
								<ModelCardMedia image={model.image} title={model.name} />
								<CardContent sx={{ p: 1 }}>
									<Typography variant="caption" component="div" align="center">
										{model.name}
									</Typography>
								</CardContent>
							</ModelCard>
						</Grid2>
					))}
				</Grid2>
			</Box>
		</Box>
	);

	// Render materials view
	const renderMaterialsView = () => (
		<Box>
			<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
				<IconButton onClick={handleBackToModels}>
					<ArrowBackIcon />
				</IconButton>
				<Typography variant="subtitle1">Seleccionar Material</Typography>
			</Box>

			<Accordion
				expanded={materialType === "metales"}
				onChange={() => handleMaterialTypeChange("metales")}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Metales</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "flex-start",
						}}
					>
						{NombreMateriales.filter((m) => m.tipo === "metal").map(
							(material, index) => (
								<MaterialButton
									key={index}
									onClick={() => handleMaterialChange(index)}
								>
									<MaterialImage
										src={material.textura}
										alt={`Material ${material.nombre}`}
									/>
									<MaterialText>{material.nombre}</MaterialText>
								</MaterialButton>
							)
						)}
					</Box>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={materialType === "maderas"}
				onChange={() => handleMaterialTypeChange("maderas")}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Maderas</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "flex-start",
						}}
					>
						{NombreMateriales.filter((m) => m.tipo === "madera").map(
							(material, index) => {
								// Find the actual index in the full array
								const metalCount = NombreMateriales.filter(
									(m) => m.tipo === "metal"
								).length;
								const actualIndex = metalCount + index;

								return (
									<MaterialButton
										key={actualIndex}
										onClick={() => handleMaterialChange(actualIndex)}
									>
										<MaterialImage
											src={material.textura}
											alt={`Material ${material.nombre}`}
										/>
										<MaterialText>{material.nombre}</MaterialText>
									</MaterialButton>
								);
							}
						)}
					</Box>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={materialType === "colores"}
				onChange={() => {
					handleMaterialTypeChange("colores");
					setShowColorPicker(true);
					setColorPickerActive(true);
				}}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Colores RAL</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{showColorPicker && (
						<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
							<SketchPicker
								color={color}
								onChange={handleColorChange}
								disableAlpha
							/>
						</Box>
					)}
				</AccordionDetails>
			</Accordion>
		</Box>
	);

	return (
		<Box sx={{ height: "100%", overflow: "hidden" }}>
			{currentView === "models" ? renderModelsView() : renderMaterialsView()}
		</Box>
	);
};

export default Menu;
