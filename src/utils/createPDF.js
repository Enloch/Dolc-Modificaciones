// Importación de los módulos 'font' y 'jspdf'
import font from "./font";
import jsPDF from "jspdf";

// Definición de la función createPDF que recibe una referencia al visualizador
const createPDF = (visualizadorRef) => {
	// Creación de un nuevo documento jsPDF con orientación horizontal ('l'),
	// unidades en píxeles ('px') y tamaño de página 1920x1080
	const doc = new jsPDF("l", "px", [1920, 1080]);
	doc.setFillColor(242, 242, 242); // Establece el color de relleno del documento en RGB (242, 242, 242)
	doc.rect(0, 0, 1920, 1080, "F"); // Dibuja un rectángulo de relleno en toda la página

	// Creación de un nuevo objeto de imagen y asignación de la ruta de la imagen del logo
	const logo = new Image();
	logo.src = "/logo.png";

	doc.addImage(logo, "png", 52, 50, 128, 40.63); // Agrega la imagen del logo al documento en la posición especificada

	doc.setFontSize(24); // Establece el tamaño de fuente en 24
	doc.addFileToVFS("Poppins-Regular.ttf", font); // Agrega el archivo de fuente personalizada al sistema de archivos virtual
	doc.addFont("Poppins-Regular.ttf", "Poppins-Regular", "normal"); // Agrega la fuente personalizada al documento
	doc.setFont("Poppins-Regular"); // Establece la fuente actual del documento como Poppins-Regular

	doc.text(
		`DOLCKER SISTEMAS, S.L.
Calle Los Herrán, 28 1º Ofic.3
C.P 01004 Vitoria - Gasteiz (Álava)
(+34) 902 363 725

administracion@dolcker.es
comercial@dolcker.es
dolcker@dolcker.es
sistemas@dolcker.es`,
		52,
		770
	); // Agrega el texto especificado al documento en la posición especificada

	const children = visualizadorRef.current.children; // Obtiene los hijos del elemento referenciado por visualizadorRef

	// Recorre los hijos y busca elementos de imagen con una ruta de origen válida
	for (let i = 0; i < children.length; i++) {
		if (children[i].tagName === "IMG" && children[i].currentSrc !== "") {
			const imgAux = new Image();
			imgAux.src = children[i].src;

			doc.addImage(imgAux, "png", 664, 163, 1200, 830, "", "FAST"); // Agrega la imagen al documento en la posición especificada
		}
	}

	doc.save("Dolcker.pdf"); // Guarda el documento PDF con el nombre especificado
};

export default createPDF; // Exporta la función createPDF como el valor predeterminado del módulo
