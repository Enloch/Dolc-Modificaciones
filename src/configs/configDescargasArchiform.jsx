const downloadImgImport = import.meta.globEager(
  "../assets/images/Descargas/**"
);

const downloadImgSrc = {};

for (const path in downloadImgImport) {
  const nameFile = path.match(/[\w\-_ ]+(?=\.)/gm)[0]; // coger solo el nombre de todos los archivos !no poner acentos ni simbolos raros

  downloadImgSrc[nameFile] = downloadImgImport[path].default;
}

const configDescargas = [
  {
    path: "/downloads/Catalogo general Dolcker.pdf",
    imgSrc: downloadImgSrc["Catalogo general Dolcker"],
    title: "Catálogo general",
    fileName: "Dolcker",
    fileType: "pdf",
    size: "8,4 MB",
  },
  {
    path: "/downloads/Sistema Dolcker clip.pdf",
    imgSrc: downloadImgSrc["portada dolckerclip"],
    title: "Sistemas",
    fileName: "Dolcker & Clip",
    fileType: "pdf",
    size: "6,2 MB",
  },
];

export default configDescargas;
