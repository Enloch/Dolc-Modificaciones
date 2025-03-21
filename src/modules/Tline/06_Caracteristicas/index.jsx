import { useState } from "react";
import ImageWithCaption from "../../../components/ImageWithCaption";
import { Titulo } from "../../../components/Titulos";
import { COLORS } from "../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../assets/images/DolckerTline/Caracteristicas/caracteristicas.webp";
import ImagenJorge from "../../../assets/images/DolckerTline/tablas.jpg";
import ImagenConstructiva from "../../../assets/images/DolckerTline/tablas.jpg";
// Importar iconos para las tablas
import dimension1 from "../../../assets/icons/caracteristicas/medida1.svg";
import dimension2 from "../../../assets/icons/caracteristicas/medida2.svg";
import dimension3 from "../../../assets/icons/caracteristicas/medida3.svg";
import mecanica1 from "../../../assets/icons/caracteristicas/mecanica1.svg";
import mecanica2 from "../../../assets/icons/caracteristicas/mecanica2.svg";
import mecanica3 from "../../../assets/icons/caracteristicas/mecanica3.svg";
import mecanica4 from "../../../assets/icons/caracteristicas/mecanica4.svg";
import mecanica5 from "../../../assets/icons/caracteristicas/mecanica5.svg";
import mecanica6 from "../../../assets/icons/caracteristicas/mecanica6.svg";
import higiene1 from "../../../assets/icons/caracteristicas/higiene1.svg";
import higiene2 from "../../../assets/icons/caracteristicas/higiene2.svg";
import higiene3 from "../../../assets/icons/caracteristicas/higiene3.svg";
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
import Text from "../../../components/Text";
import Listado from "../../../components/Listado";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CaracteristicasTline = ({ id }) => {
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
          alt="Render por parte de 7475"
          caption=""
          columnSpan="6"
        />
        <Text>
          Dolcker Line es un material compacto, resistente y caracterizado por
          una porosidad casi inexistente y, por absorción del agua menor al 0,1
          %
          <br />
          <br />
          Su estructura vitrificada, con un grado bajo de porosidad, garantiza
          una elevada impermeabilidad a suciedad y al hielo.
          <br />
          <br />
          Cuerpo pasta porcelánica.
          <br />
          <br />
          Las ventajas de un material único.
        </Text>
        <Listado>
          <li>
            <strong>
              Amplia gama de colores, formatos, espesores y acabados.
            </strong>
          </li>
          <li>
            <strong>Es antiácido.</strong> Es insensible a los ácidos más
            difundidos (No resiste al ataque del ácido fluorhídrico).
          </li>
          <li>
            <strong>Es resistente.</strong> Resistente a la abrasión y al
            desgaste más que cualquier material natural.
          </li>
          <li>
            <strong>No combustible.</strong> El material no se quema ni produce
            gases o humos tóxico-nocivos en caso de incendio o exposición a las
            llamas.
          </li>
          <li>
            <strong>
              No retiene sustancias orgánicas y bacterias, causa de alergias y
              disturbios.
            </strong>
          </li>
          <li>
            <strong>Fácil de trabajar.</strong> El producto se presta a ser
            trabajado (cortado, perforado, etc.) como la piedra natural para
            satisfacer cualquier tipo de personalización.
          </li>
          <li>
            <strong>Es Inatacable.</strong> Ningún problema con ollas calientes
            o cigarrillos encendidos, que al contrario dañan la madera,
            laminados plásticos o aglomerados con resinas.
          </li>
          <li>
            <strong>Fácil de limpiar.</strong> Es posible utilizar detergentes
            muy fuertes o disolventes sin el peligro de dañar el material.
          </li>
          <li>
            <strong>Resistente al hielo.</strong> El material es resistente al
            frío y al hielo.
          </li>
          <li>
            <strong>Establo cromático.</strong> Los colores son totalmente
            estables y no se alteran ni por la exposición al sol, ni a los
            agentes atmosféricos, ni al smog.
          </li>
        </Listado>
        <Text>
          <strong>ECOLÓGICO</strong>
          <br />
          <br />
          No contiene impermeabilizantes químicos, barnices o resinas, no emite
          exhalaciones tampoco con el calor de una llama. Al contrario de
          algunas piedras naturales no emana Radon u otros gases radioactivos y
          no viene pulido con plomo. Se produce respetando el medio ambiente.
          <br />
          <br />
          <strong>RESISTENCIA A LOS CAMBIOS BRUSCOS DE TEMPERATURA</strong>
          <br />
          <br />
          <strong>RESISTENCIA A LA FLEXIÓN CON CARGAS FIJAS Y ESTÁTICAS</strong>
          <br />
          <br />
          <strong>RESISTENCIA AL IMPACTO, A LA ABRASIÓN SEGURIDAD</strong>
        </Text>
        <Listado>
          <li>Expansión por humedad insignificante</li>
          <li>Incombustible</li>
          <li>Ignífugo</li>
          <li>Ausencia de peligro en caso de incendio</li>
          <li>Seguridad eléctrica</li>
        </Listado>
        <Text>
          <strong>SALUD Y BIENESTAR</strong>
        </Text>
        <Listado>
          <li>Carencia de olor propio o adquirido</li>
          <li>Resistencia a la liberación de polvo propio</li>
          <li>Facilidad de limpieza de polvo adquirido</li>
          <li>Fácil limpieza y mantenimiento</li>
          <li>
            Es un producto que, por su capacidad de aislante eléctrico, evita la
            captación de polvo ambiental eléctricamente activo
          </li>
          <li>Adecuado donde el uso de agua es abundante</li>
          <li>
            Es la instalación definitiva: no necesita ningún mantenimiento
            después de su puesta en obra
          </li>
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
                          CARACTERÍSTICAS DIMENSIONALES
                          <br />
                          DIMENSIONAL CHARACTERISTICS
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px", width: "120px" }}>
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
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          LONGITUD
                          <br />
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
                        <Typography variant="body2">
                          ESPESOR
                          <br />
                          THICKNESS
                        </Typography>
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
                          RECTITUD DE LOS LADOS
                          <br />
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
                        <Typography variant="body2">
                          ORTOGONALIDAD
                          <br />
                          WEDGING
                        </Typography>
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
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          CURVATURA CENTRAL Y LATERAL
                          <br />
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
                        <Typography variant="body2">
                          ALABEO
                          <br />
                          WARPAGE
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
                    <TableCell
                          align="center"
                          sx={{ padding: "5px" }}
                        >
                          <img
                            src={dimension3}
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
                          ABSORCIÓN DE AGUA
                          <br />
                          WATER ABSORPTION
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">3</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">≤ 0,5% MAX 0,6 %</Typography>
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
                CARACTERÍSTICAS MECÁNICAS / MECHANICAL CHARACTERISTICS
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
                          CARACTERÍSTICAS MECÁNICAS
                          <br />
                          MECHANICAL CHARACTERISTICS
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px", width: "120px" }}>
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
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">
                          CARGA DE ROTURA
                          <br />
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
                          RESISTENCIA A FLEXIÓN
                          <br />
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
                          RESISTENCIA AL DESGASTE PROF.
                          <br />
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
                          RESISTENCIA A LA ABRASIÓN SUP.
                          <br />
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
                          COEFICIENTE DILATACIÓN TÉRMICA
                          <br />
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
                          RESISTENCIA AL CHOQUE TÉRMICO
                          <br />
                          THERMAL SHOCK RESISTANCE
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">10</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">RESISTENTE / RESISTANT</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">RESISTENTE / RESISTANT</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">RESISTENTE / RESISTANT</Typography>
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
                          RESISTENCIA AL HIELO
                          <br />
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
                        <Typography variant="body2">RESISTENTE / RESISTANT</Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        <Typography variant="body2">RESISTENTE / RESISTANT</Typography>
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
                CARACTERÍSTICAS HIGIÉNICAS / HYGIENIC CHARACTERISTICS
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
                      <TableCell
                        sx={{ width: "180px", padding: "10px 10px" }}
                      >
                        CARACTERÍSTICAS HIGIÉNICAS
                        <br />
                        HYGIENIC CHARACTERISTICS
                      </TableCell>
                      <TableCell sx={{ width: "220px", padding: "10px 10px" }}>
                        TIPO DE ÁCIDO O BASE
                        <br />
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
                      <TableCell
                        align="center"
                        sx={{ padding: "10px 10px" }}
                      >
                        SATINADO
                        <br />
                        60X120 11,5mm
                        <br />
                        Calibre: 1
                        <br />
                        597,2x1197,3
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ padding: "10px 10px" }}
                      >
                        MATE
                        <br />
                        60X120 14mm
                        <br />
                        Calibre: 1
                        <br />
                        597,2x1197,3
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ padding: "10px 10px" }}
                      >
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
                      <TableCell rowSpan={4} align="center" sx={{ padding: "5px" }}>
                        <img
                          src={higiene1}
                          alt="higiene-resistencia-quimica"
                          style={{ 
                            width: "40px", 
                            height: "40px",
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell rowSpan={4} sx={{ padding: "10px 10px" }}>
                        RESISTENCIA QUÍMICA
                        <br />
                        CHEMICAL RESISTANCE
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        ÁCIDOS BAJA CONCENTRACIÓN
                        <br />
                        LOW CONCENTRATION ACIDS
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        13
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        MD
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        ÁCIDOS ALTA CONCENTRACIÓN
                        <br />
                        HIGH CONCENTRATION ACIDS
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        13
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        MD
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE HA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE HA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE HA
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        BASES BAJA CONCENTRACIÓN
                        <br />
                        LOW CONCENTRATION ALKALI
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        13
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        MD
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        BASES ALTA CONCENTRACIÓN
                        <br />
                        HIGH CONCENTRATION ALKALI
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        13
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        MD
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE HA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE HA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE HA
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
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        RESISTENCIA A LAS MANCHAS
                        <br />
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
                            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}>
                        PRODUCTOS DOMÉSTICOS DE LIMPIEZA Y SALES DE PISCINA
                        <br />
                        HOUSEHOLD DETERGENTS AND ADDITIVES FOR SWIMMING-POOLS
                      </TableCell>
                      <TableCell sx={{ padding: "10px 10px" }}></TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        13
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        MÍNIMO UB
                        <br />
                        MINIMUM UB
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "10px 10px" }}>
                        CLASE LA
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
