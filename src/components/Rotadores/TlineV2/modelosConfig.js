// Import model thumbnails
// Remove hardcoded imports as we'll use dynamic paths
// import Perfil1 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/CF-L-VERTEX_01.svg";
// import Perfil2 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL2.jpg";
// import Perfil3 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL3.jpg";
// import Perfil4 from "../../../assets/images/DolckerTline/Diseno/Formato/MINIATURAS/PERFIL4.jpg";

// Define model types
export const MODEL_TYPES = {
	SIMPLE: "simple", // Basic model with simple structure
	COMPLEX: "complex", // Model with multiple meshes and materials
};

// Define model categories
export const CATEGORIES = {
	CG: "CG",
	SG: "SG",
};

// Define model LED types
export const LED_TYPES = {
	LED: "LED",
	NOLED: "NOLED",
};

// Define model families
export const FAMILIES = {
	LUX: "LUX",
	CAVITY: "CAVITY",
	PARALEX: "PARALEX",
	PLANEX: "PLANEX",
	UNIK: "UNIK",
	VERTEX: "VERTEX",
	WAVE: "WAVE",
};

// Define model structure templates
const modelStructureTemplates = {
	// Template for LED models
	ledModelStructure: {
		type: MODEL_TYPES.COMPLEX,
		geometryNames: {
			base: (id) => `${id}_1`,
			aluminio: (id) => `${id}_2`,
			emisivo: (id) => `${id}_3`,
			metacrilato: (id) => `${id}_4`,
		},
		hasEmisivo: true,
		hasMetacrilato: true,
	},

	// Template for non-LED models
	noLedModelStructure: {
		type: MODEL_TYPES.COMPLEX,
		geometryNames: {
			base: (id) => `${id}_1`,
			aluminio: (id) => `${id}_2`,
		},
		hasEmisivo: false,
		hasMetacrilato: false,
	},
};

// Helper function to generate model configurations
const generateModelConfigs = (category, ledType, family, count, image) => {
	const models = [];
	const isLed = ledType === LED_TYPES.LED;
	const template = isLed
		? modelStructureTemplates.ledModelStructure
		: modelStructureTemplates.noLedModelStructure;

	for (let i = 1; i <= count; i++) {
		const num = i.toString().padStart(2, "0");
		const id = `CF_${category === CATEGORIES.SG ? "SG" : "L"}_${family}_${num}`;

		// Generate the icon path based on category and LED type
		const iconFolder =
			category === CATEGORIES.SG
				? isLed
					? "ICONO-SG-LED"
					: "ICONO-SG-SINLED"
				: isLed
					? "ICONO-CG-LED"
					: "ICONO-CF-SINLED";

		// Generate the SVG filename based on the model ID
		const svgFileName = `CF-${category === CATEGORIES.SG ? "SG" : "L"}-${family}_${num}.svg`;

		// Full path to the SVG icon
		const iconPath = `/modelos/Tline/${category}/${iconFolder}/${svgFileName}`;

		models.push({
			id,
			name: `${family} ${num}`,
			image: image || iconPath,
			path: `/modelos/Tline/${category}/${ledType}/${id}.glb`,
			...template,
		});
	}

	return models;
};

// Complete model configuration
const modelConfig = {
	[CATEGORIES.CG]: {
		[LED_TYPES.LED]: [
			...generateModelConfigs(CATEGORIES.CG, LED_TYPES.LED, FAMILIES.LUX, 9),
		],
		[LED_TYPES.NOLED]: [
			...generateModelConfigs(
				CATEGORIES.CG,
				LED_TYPES.NOLED,
				FAMILIES.CAVITY,
				3
			),
			...generateModelConfigs(
				CATEGORIES.CG,
				LED_TYPES.NOLED,
				FAMILIES.PARALEX,
				3
			),
			...generateModelConfigs(
				CATEGORIES.CG,
				LED_TYPES.NOLED,
				FAMILIES.PLANEX,
				2
			),
			...generateModelConfigs(CATEGORIES.CG, LED_TYPES.NOLED, FAMILIES.UNIK, 3),
			...generateModelConfigs(
				CATEGORIES.CG,
				LED_TYPES.NOLED,
				FAMILIES.VERTEX,
				3
			),
			...generateModelConfigs(CATEGORIES.CG, LED_TYPES.NOLED, FAMILIES.WAVE, 4),
		],
	},
	[CATEGORIES.SG]: {
		[LED_TYPES.LED]: [
			...generateModelConfigs(CATEGORIES.SG, LED_TYPES.LED, FAMILIES.LUX, 9),
		],
		[LED_TYPES.NOLED]: [
			...generateModelConfigs(
				CATEGORIES.SG,
				LED_TYPES.NOLED,
				FAMILIES.CAVITY,
				3
			),
			...generateModelConfigs(
				CATEGORIES.SG,
				LED_TYPES.NOLED,
				FAMILIES.PARALEX,
				3
			),
			...generateModelConfigs(
				CATEGORIES.SG,
				LED_TYPES.NOLED,
				FAMILIES.PLANEX,
				2
			),
			...generateModelConfigs(CATEGORIES.SG, LED_TYPES.NOLED, FAMILIES.UNIK, 3),
			...generateModelConfigs(
				CATEGORIES.SG,
				LED_TYPES.NOLED,
				FAMILIES.VERTEX,
				3
			),
			...generateModelConfigs(CATEGORIES.SG, LED_TYPES.NOLED, FAMILIES.WAVE, 4),
		],
	},
};

// Helper function to get a model by ID
export const getModelById = (modelId) => {
	for (const category of Object.keys(modelConfig)) {
		for (const ledType of Object.keys(modelConfig[category])) {
			const model = modelConfig[category][ledType].find(
				(m) => m.id === modelId
			);
			if (model) return model;
		}
	}
	return null;
};

// Helper function to get all models by category and LED type
export const getModelsByType = (category, ledType) => {
	return modelConfig[category]?.[ledType] || [];
};

export default modelConfig;
