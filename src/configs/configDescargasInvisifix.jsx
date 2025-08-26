const downloadImgImport = import.meta.globEager("../assets/images/Descargas/**");

const downloadImgSrc = {};

for (const path in downloadImgImport) {
	const nameFile = path.match(/[\w\-_ ]+(?=\.)/gm)[0]; // coger solo el nombre de todos los archivos !no poner acentos ni simbolos raros

	downloadImgSrc[nameFile] = downloadImgImport[path].default;
}

const configDescargas = [
	{
		path: "/downloads/Catalogo INVISIFIX.pdf",
		imgSrc: downloadImgSrc["portada Catalogo INVISIFIX"],
		title: "Catálogo Invisifix",
		fileName: "Invisifix",
		fileType: "pdf",
		size: "9,1 MB",
	},
];

export default configDescargas;
