import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import FachadaVentilada from "./pages/catalogos/FachadaVentilada";
import DolckerTline from "./pages/catalogos/DolckerTLine";
import DolckerMatrix from "./pages/catalogos/DolckerMatrix";
import DolckerTXT from "./pages/catalogos/DolckerTXT";
import DolckerMatrixDecor from "./pages/catalogos/DolckerMatrixDecor";
import DolckerG10 from "./pages/catalogos/DolckerG10";
import Escamas from "./pages/catalogos/Escamas";
import T5 from "./pages/catalogos/DolckerT5";
import DolckerArchiform from "./pages/catalogos/DolckerArchiform";
import DolckerAlumtech from "./pages/catalogos/DolckerAlumtech";
import DolckerScala from "./pages/catalogos/DolckerScala";
import DolckerStep from "./pages/catalogos/DolckerStep";
import DolckerDetaill from "./pages/catalogos/DolckerDetaill";
import DolckerFusion from "./pages/catalogos/DolckerFusion";
import DolckerAluform from "./pages/catalogos/DolckerAluform";
import DolckerInvisifix from "./pages/catalogos/DolckerInvisifix";
// import FontStyles from './global/FontStyles'
import "./assets/fonts/fonts.css";
import GlobalStyles from "./global/GlobalStyles";
import ResetStyles from "./global/ResetStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Contacto from "./pages/Contacto";
import QuienesSomos from "./pages/QuienesSomos";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
//English
import { MainEn } from "./pages/en/MainEn";
import ContactoEn from "./pages/en/Contacto";
import QuienesSomosEn from "./pages/en/QuienesSomoEn";
import FachadaVentiladaEn from "./pages/en/catalogos/FachadaVentiladaEn";
import DolckerTlineEn from "./pages/en/catalogos/DolckerTLineEn";
import DolckerMatrixEn from "./pages/en/catalogos/DolckerMatrixEn";
import DolckerMatrixDecorEn from "./pages/en/catalogos/DolckerMatrixDecor";
import DolckerTXTEn from "./pages/en/catalogos/DolckerTXT";
import DolckerT5En from "./pages/en/catalogos/DolckerT5";
import DolckerScalaEn from "./pages/en/catalogos/DolckerScala";
import DolckerArchiformEn from "./pages/en/catalogos/DolckerArchiform";
import DolckerFusionEn from "./pages/en/catalogos/DolckerFusion";

import PoliticaPrivacidadEn from "./pages/en/PoliticaPrivacidad";
import AvisoLegalEn from "./pages/en/AvisoLegal";
//French
import { MainFr } from "./pages/fr/MainFr";
import FachadaVentiladaFr from "./pages/fr/catalogos/FachadaVentiladaFr";
import DolckerTlineFr from "./pages/fr/catalogos/DolckerTLineFr";
import DolckerMatrixFr from "./pages/fr/catalogos/DolckerMatrixFr";
import DolckerMatrixDecorFr from "./pages/fr/catalogos/DolckerMatrixDecor";
import DolckerTXTFr from "./pages/fr/catalogos/DolckerTXT";
import DolckerT5Fr from "./pages/fr/catalogos/DolckerT5";
import DolckerScalaFr from "./pages/fr/catalogos/DolckerScala";
import DolckerArchiformFr from "./pages/fr/catalogos/DolckerArchiform";
import ContactoFr from "./pages/fr/Contacto";
import PoliticaPrivacidadFr from "./pages/fr/PoliticaPrivacidad";
import AvisoLegalFr from "./pages/fr/AvisoLegal";
import QuienesSomosFr from "./pages/fr/QuienesSomos";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Define a basic MUI theme
const theme = createTheme({
	palette: {
		primary: {
			main: "#000000",
		},
		secondary: {
			main: "#a8a8a8",
		},
		// You can add more custom colors or override other theme defaults here
		// background: {
		//   default: '#f5f5f5',
		//   paper: '#ffffff',
		// },
		// text: {
		//   primary: '#333333',
		//   secondary: '#757575',
		// },
	},
	// You can also customize typography, spacing, breakpoints, etc.
	// typography: {
	//   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	//   h1: {
	//     fontSize: '2.5rem',
	//   },
	// },
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<StrictMode>
			<ResetStyles />
			{/* <FontStyles /> */}
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route path="/dolcker-system" element={<FachadaVentilada />} />
						<Route path="/dolcker-tline" element={<DolckerTline />} />
						<Route path="/dolcker-matrix-facade" element={<DolckerMatrix />} />
						<Route path="/dolcker-txt" element={<DolckerTXT />} />
						<Route path="/dolcker-t5" element={<T5 />} />
						<Route path="/dolcker-archiform" element={<DolckerArchiform />} />
						<Route path="/dolcker-alumtech" element={<DolckerAlumtech />} />
						<Route path="/dolcker-scala" element={<DolckerScala />} />
						<Route path="/dolcker-step" element={<DolckerStep />} />
						<Route path="/dolcker-detaill" element={<DolckerDetaill />} />
						<Route
							path="/dolcker-matrix-decor"
							element={<DolckerMatrixDecor />}
						/>
						<Route path="/dolcker-aluform" element={<DolckerAluform />} />
						<Route path="/dolcker-fusion" element={<DolckerFusion />} />
						<Route path="/dolcker-invisifix" element={<DolckerInvisifix />} />
						<Route path="/dolcker-G10" element={<DolckerG10 />} />
						<Route path="/dolcker-escamas" element={<Escamas />} />
						<Route path="/" element={<Main />} />
						<Route path="/quienes-somos" element={<QuienesSomos />} />
						<Route path="/aviso-legal" element={<AvisoLegal />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route
							path="/politica-privacidad"
							element={<PoliticaPrivacidad />}
						/>
						{/* EN */}
						<Route path="/en/" element={<MainEn />} />
						<Route path="/en/dolcker-system" element={<FachadaVentiladaEn />} />
						<Route path="/en/dolcker-tline" element={<DolckerTlineEn />} />
						<Route
							path="/en/dolcker-matrix-facade"
							element={<DolckerMatrixEn />}
						/>
						<Route
							path="/en/dolcker-matrix-decor"
							element={<DolckerMatrixDecorEn />}
						/>
						<Route path="/en/dolcker-txt" element={<DolckerTXTEn />} />
						<Route path="/en/dolcker-t5" element={<DolckerT5En />} />
						<Route path="/en/dolcker-scala" element={<DolckerScalaEn />} />
						<Route
							path="/en/dolcker-archiform"
							element={<DolckerArchiformEn />}
						/>
						<Route path="/en/dolcker-fusion" element={<DolckerFusionEn />} />
						<Route path="/en/quienes-somos" element={<QuienesSomosEn />} />
						<Route
							path="/en/aviso-legal"
							element={<AvisoLegalEn lang="en" />}
						/>
						<Route path="/en/contacto" element={<ContactoEn lang="en" />} />
						<Route
							path="/en/politica-privacidad"
							element={<PoliticaPrivacidadEn lang="en" />}
						/>
						{/* FR */}
						<Route path="/fr/" element={<MainFr />} />
						<Route path="/fr/dolcker-system" element={<FachadaVentiladaFr />} />
						<Route path="/fr/dolcker-tline" element={<DolckerTlineFr />} />
						<Route
							path="/fr/dolcker-matrix-facade"
							element={<DolckerMatrixFr />}
						/>
						<Route
							path="/fr/dolcker-matrix-decor"
							element={<DolckerMatrixDecorFr />}
						/>
						<Route path="/fr/dolcker-txt" element={<DolckerTXTFr />} />
						<Route path="/fr/dolcker-t5" element={<DolckerT5Fr />} />
						<Route path="/fr/dolcker-scala" element={<DolckerScalaFr />} />
						<Route
							path="/fr/dolcker-archiform"
							element={<DolckerArchiformFr />}
						/>
						<Route path="/fr/quienes-somos" element={<QuienesSomosFr />} />
						<Route
							path="/fr/aviso-legal"
							element={<AvisoLegalFr lang="fr" />}
						/>
						<Route path="/fr/contacto" element={<ContactoFr lang="fr" />} />
						<Route
							path="/fr/politica-privacidad"
							element={<PoliticaPrivacidadFr lang="fr" />}
						/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</StrictMode>
	</>
);
