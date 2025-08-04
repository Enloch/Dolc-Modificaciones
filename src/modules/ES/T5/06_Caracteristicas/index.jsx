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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
        <Titulo>Características técnicas</Titulo>
        <ImageWithCaption
          src={caracter1}
          alt='Render por parte de 7475'
          caption='Ejemplo de fachada'
          columnSpan='6'
        />
        <Text>
          <strong>Diseño y Versatilidad</strong>
        </Text>
        <Listado>
          <li>Porque la variedad es fundamental, T5 XL te permite elegir entre una rica diversidad de diseños de todos los estilos.</li>
          <li>Cada serie presenta gráficas diferenciadas para obtener acabados personalizados y abundantes en matices.</li>
          <li>La colección T5 XL ofrece soluciones estéticas para cada espacio y proyecto.</li>
          <li>Versatilidad cromática que se adapta a cualquier ambiente interior o exterior.</li>
          <li>Posibilidad de combinación entre diferentes series para crear espacios únicos.</li>
        </Listado>
        <Text>
          <strong>Formato y Rendimiento</strong>
        </Text>
        <Listado>
          <li>Grande en tamaño, grande en prestaciones. Con T5 XL todas las ventajas son XXL.</li>
          <li>El formato de gran dimensión permite crear espacios continuos con menor número de juntas.</li>
          <li>Facilidad de instalación gracias a su relación tamaño-peso optimizada.</li>
          <li>Perfecto para proyectos de gran envergadura donde el impacto visual es primordial.</li>
          <li>Ideal para espacios amplios donde se busca maximizar la sensación de amplitud.</li>
        </Listado>
        <Text>
          <strong>Innovación y Calidad</strong>
        </Text>
        <Listado>
          <li>T5 XL es el resultado de una constante apuesta por la innovación tecnológica.</li>
          <li>Los últimos avances en I+D incorporados al proceso de fabricación permiten disfrutar de un producto con cualidades extraordinarias.</li>
          <li>Resistencia superior a impactos y desgaste diario.</li>
          <li>Propiedades antibacterianas que garantizan superficies higiénicas y seguras.</li>
          <li>Materiales seleccionados de primera calidad para asegurar durabilidad extrema.</li>
          <li>Proceso de producción sostenible comprometido con el medio ambiente.</li>
          <li>T5 XL representa la vanguardia en diseño con carácter atemporal.</li>
        </Listado>
      </StyledCaracteristicas>
      <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
        <Titulo>Datos técnicos</Titulo>
        <Text>
          <strong>CARACTERÍSTICAS FÍSICAS Y MECÁNICAS</strong>
          <br />
          <br />
          Las piezas de cerámica se clasifican como baldosas cerámicas prensadas
          en seco con baja absorción de agua según norma UNE-EN 14411, con las
          siguientes características declaradas por el fabricante:
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
              '&.Mui-expanded': {
                margin: 0,
                marginBottom: 2
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ 
                backgroundColor: COLORS.gray03, 
                color: "black",
                '&.Mui-expanded': {
                  minHeight: 48
                }
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                CARACTERÍSTICAS DIMENSIONALES / DIMENSIONAL CHARACTERISTICS
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer 
                component={Paper}
                sx={{
                  boxShadow: "none",
                  borderRadius: "0",
                  mt: 2,
                  mb: 2
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
                      <TableCell sx={{ padding: "10px 10px", width: "60px" }}>
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px", width: "180px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          CARACTERÍSTICAS TÉCNICAS/
                          <br />
                          CARACTERÍSTICAS TÉCNICAS
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px", width: "120px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          REFERENCIA STANDARD/
                          <br />
                          REFERENCE STANDARD
                        </Typography>
                      </TableCell>

                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          VALOR REQUERIDO/
                          <br />
                          VALUE REQUIRED
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          VALOR MEDIO/
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
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          LONGITUD Y ANCHURA/
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
                        <Typography variant="body2">± 0,6 % / ± 2,0 mm</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">± 0,6 %</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          ESPESOR/
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
                        <Typography variant="body2">± 5 % / ± 0,5 mm</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          CUMPLE/
                          <br />
                          COMPLIES
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RECTITUD DE LOS LADOS/
                          <br />
                          WARPAGE OF EDGES
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
                        <Typography variant="body2">± 0,5 % / ± 1,5 mm</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">± 0,5 %</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          ORTOGONALIDAD/
                          <br />
                          WEDGING
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
                        <Typography variant="body2">± 0,6 % / ± 2,0 mm</Typography>
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
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          PLANITUD CENTRAL/
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
                        <Typography variant="body2">± 0,5 % / ± 2,0 mm</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          CUMPLE/
                          <br />
                          COMPLIES
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          PLANITUD LATERAL/
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
                        <Typography variant="body2">± 0,5 % / ± 2,0 mm</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          CUMPLE/
                          <br />
                          COMPLIES
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                          align="center"
                          sx={{ padding: "5px" }}
                        >
                          <img
                            src={dimension3}
                            alt="dimension-absorcion"
                            style={{
                              width: "40px",
                              height: "40px",
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          ABSORCIÓN DE AGUA/
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
              '&.Mui-expanded': {
                margin: 0,
                marginBottom: 2
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{ 
                backgroundColor: COLORS.gray03, 
                color: "black",
                '&.Mui-expanded': {
                  minHeight: 48
                }
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                CARACTERÍSTICAS FÍSICAS/
                <br />
                PHYSICAL CHARACTERISTICS
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
                      <TableCell sx={{ padding: "10px 10px", width: "60px" }}>
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px", width: "180px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          CARACTERÍSTICAS FÍSICAS/
                          <br />
                          PHYSICAL CHARACTERISTICS
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px", width: "120px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          REFERENCIA STANDARD/
                          <br />
                          REFERENCE STANDARD
                        </Typography>
                      </TableCell>

                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          VALOR REQUERIDO/
                          <br />
                          VALUE REQUIRED
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          VALOR MEDIO/
                          <br />
                          MEAN VALUE/OBTAINED
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={mecanica1}
                          alt="caracteristicas-mecanicas"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A LA FLEXIÓN/
                          <br />
                          BREAKING STRENGTH
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
                        <Typography variant="body2">
                          CUMPLE/
                          <br />
                          COMPLIES
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={mecanica2}
                          alt="caracteristicas-mecanicas"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A LA ABRASIÓN/
                          <br />
                          RESISTANCE TO ABRASION
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
                          INDICAR EL MODELO/
                          <br />
                          INDICATE MODEL
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">3 - 5</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={mecanica3}
                          alt="caracteristicas-mecanicas"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          COEFICIENTE DE DILATACIÓN TÉRMICA LINEAL/
                          <br />
                          LINEAR THERMAL EXPANSION
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
                          INDICAR EL MODELO/
                          <br />
                          INDICATE MODEL
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">≤ 9 · 10-6 K-1</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={mecanica4}
                          alt="caracteristicas-mecanicas"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA AL CHOQUE TÉRMICO/
                          <br />
                          THERMAL SHOCK RESISTANCE
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
                        <Typography variant="body2">
                          PASA-TEST/
                          <br />
                          PASS-TEST
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTE/
                          <br />
                          RESISTS
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={mecanica6}
                          alt="caracteristicas-mecanicas"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A LA HELADA/
                          <br />
                          FROST RESISTANCE
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
                        <Typography variant="body2">
                          PASA-TEST/
                          <br />
                          PASS-TEST
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTE/
                          <br />
                          RESISTS
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={mecanica5}
                          alt="caracteristicas-mecanicas"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA AL FUEGO/
                          <br />
                          FIRE RESISTANCE
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
              '&.Mui-expanded': {
                margin: 0,
                marginBottom: 2
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              sx={{ 
                backgroundColor: COLORS.gray03, 
                color: "black",
                '&.Mui-expanded': {
                  minHeight: 48
                }
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                CARACTERÍSTICAS QUÍMICAS/
                <br />
                CHEMICAL CHARACTERISTICS
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
                      <TableCell sx={{ padding: "10px 10px", width: "60px" }}>
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px", width: "180px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          CARACTERÍSTICAS QUÍMICAS/
                          <br />
                          CHEMICAL CHARACTERISTICS
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px", width: "120px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          REFERENCIA STANDARD/
                          <br />
                          REFERENCE STANDARD
                        </Typography>
                      </TableCell>

                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          VALOR REQUERIDO/
                          <br />
                          VALUE REQUIRED
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          VALOR MEDIO/
                          <br />
                          MEAN VALUE/OBTAINED
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={higiene3}
                          alt="higiene-quimicos"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A PRODUCTOS QUÍMICOS Y ADITIVOS DE PISCINA/
                          <br />
                          CHEMICAL PRODUCTS AND SWIMMING POOL ADDITIVES
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
                        <Typography variant="body2">
                          RESISTE (GA)/
                          <br />
                          RESISTS (GA)
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={higiene1}
                          alt="higiene-manchas"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A ÁCIDOS Y BASES DE BAJA CONCENTRACIÓN/
                          <br />
                          RESISTANCE TO ACIDS AND BASES IN LOW CONCENTRATION
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
                          INDICADO POR FABRICANTE/
                          <br />
                          AS INDICATED BY MANUFACTURER
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTE (GLA)/
                          <br />
                          RESISTS (GLA)
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={higiene2}
                          alt="higiene-limpieza"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A LAS MANCHAS/
                          <br />
                          RESISTANCE TO STAINING
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
                        <Typography variant="body2">
                          CLASE 3 MÍNIMO/
                          <br />
                          CLASS 3 MIN
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          CLASE 5/
                          <br />
                          CLASS 5
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={higiene1}
                          alt="higiene-quimicos"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A LOS ÁCIDOS/
                          <br />
                          RESISTANCE TO ACIDS
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
                        <Typography variant="body2">
                          RESISTE (GA)/
                          <br />
                          RESISTS (GA)
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={higiene1}
                          alt="higiene-manchas"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A LAS BASES/
                          <br />
                          RESISTANCE TO BASES
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
                          INDICADO POR FABRICANTE/
                          <br />
                          AS INDICATED BY MANUFACTURER
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTE (GLA)/
                          <br />
                          RESISTS (GLA)
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell 
                        align="center"
                        sx={{ padding: "5px" }}
                      >
                        <img
                          src={higiene1}
                          alt="higiene-limpieza"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          RESISTENCIA A LOS PRODUCTOS QUÍMICOS/
                          <br />
                          RESISTANCE TO CHEMICAL PRODUCTS
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
                        <Typography variant="body2">
                          RESISTE (GA)/
                          <br />
                          RESISTS (GA)
                        </Typography>
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
