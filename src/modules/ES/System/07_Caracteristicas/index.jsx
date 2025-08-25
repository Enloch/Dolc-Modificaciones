import ImageWithCaption from "../../../../components/ImageWithCaption";
import { Titulo } from "../../../../components/Titulos";
import { COLORS } from "../../../../global/GlobalStyles";
import StyledCaracteristicas from "./styles";
import caracter1 from "../../../../assets/images/Caracteristicas/caracteristicas_01.webp";
import Text from "../../../../components/Text";
import Listado from "../../../../components/Listado";
import { useState } from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
const Caracteristicas = ({ id }) => {
  // Estado para controlar qué acordeón está expandido
  const [expandedPanel, setExpandedPanel] = useState(false);

  // Función para manejar el cambio de acordeón
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <>
      <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Características técnicas</Titulo>
        <ImageWithCaption
          src={caracter1}
          alt="características técnicas imagen"
          columnSpan="6"
        />
        <Text>
          DOLCKER es un material compacto, resistente y caracterizado por una
          porosidad casi inexistente y, por absorción del agua menor al 0,1 %
          <br />
          <br />
          Su estructura vitrificada, con un grado bajo de porosidad, garantiza
          una elevada impermeabilidad a suciedad y al hielo.
          <br />
          <br />
          Cuerpo full&body
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
          <br />
          <br />
        </Text>
        <>
          <Box sx={{ width: "100%", overflow: "auto", mt: 1 }}>
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
                    mt: 4,
                    overflowX: "auto",
                    maxWidth: "100%",
                    minWidth: "100%",
                  }}
                >
                  <Table
                    aria-label="tabla de características dimensionales"
                    sx={{
                      tableLayout: "fixed",
                      minWidth: 900,
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{ padding: "10px 10px", width: "60px" }}
                        ></TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          CARACTERÍSTICAS DIMENSIONALES
                          <br />
                          DIMENSIONAL CHARACTERISTICS
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          UNE EN-14411 (1)
                          <br />
                          ISO 13006 ANEXO G
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={3}
                          sx={{ padding: "10px 10px" }}
                        >
                          DOLCKER VALORES PRIMERA CALIDAD / DOLCKER VALUES 1ST
                          QUALITY
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "10px 10px" }}
                        >
                          SATINADO 60X120 11,5 MM
                          <br />
                          CALIBRE 1 597,2 X 1197,3
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "10px 10px" }}
                        >
                          MATE 60X120 14 MM
                          <br />
                          CALIBRE 1 597,2 X 1197,3
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "10px 10px" }}
                        >
                          RÚSTICO 60X120 14MM
                          <br />
                          CALIBRE 5 600,4 X 1200,4
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
                          LONGITUD
                          <br />
                          LENGTH AND WIDTH
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          2
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          0,6%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,2%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,2%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          ESPESOR
                          <br />
                          THICKNESS
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          2
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          5%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 5,0%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 5,0%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          RECTITUD DE LOS LADOS
                          <br />
                          WARPAGE OF EDGES
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          2
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          0,5%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,2%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,2%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          ORTOGONALIDAD
                          <br />
                          WEDGING
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          3
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          0,5%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,25%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,25%
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
                          CURVATURA CENTRAL Y LATERAL
                          <br />
                          CENTRAL AND EDGE CURVATURE
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          2
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          0,5%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,2%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,2%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          ALABEO
                          <br />
                          WARPAGE
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          2
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          0,5%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,2%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ± 0,2%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="center" sx={{ padding: "5px" }}>
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
                          ABSORCIÓN DE AGUA
                          <br />
                          WATER ABSORPTION
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          3
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ≤ 0,5% MAX 0,6 %
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ≤ 0,1%
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ≤ 0,1%
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
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
                    mt: 4,
                    overflowX: "auto",
                    maxWidth: "100%",
                    minWidth: "100%",
                  }}
                >
                  <Table
                    aria-label="tabla de características mecánicas"
                    sx={{
                      tableLayout: "fixed",
                      minWidth: 900,
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{ padding: "10px 10px", width: "60px" }}
                        ></TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          CARACTERÍSTICAS MECÁNICAS
                          <br />
                          MECHANICAL CHARACTERISTICS
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          UNE EN-14411 (1)
                          <br />
                          ISO 13006 ANEXO G
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={3}
                          sx={{ padding: "10px 10px" }}
                        >
                          DOLCKER VALORES PRIMERA CALIDAD / DOLCKER VALUES 1ST
                          QUALITY
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "10px 10px" }}
                        >
                          SATINADO 60X120 11,5 MM
                          <br />
                          CALIBRE 1 597,2 X 1197,3
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "10px 10px" }}
                        >
                          MATE 60X120 14 MM
                          <br />
                          CALIBRE 1 597,2 X 1197,3
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ padding: "10px 10px" }}
                        >
                          RÚSTICO 60X120 14MM
                          <br />
                          CALIBRE 5 600,4 X 1200,4
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
                            alt="mecanica-fuerza"
                            style={{ 
                              width: "40px", 
                              height: "40px",
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          FUERZA DE ROTURA
                          <br />
                          BREAKING STRENGTH
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          4
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          1.300 N
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ≥ 2.000 N
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ≥ 12.000 N
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          RESISTENCIA A LA FLEXIÓN
                          <br />
                          BENDING STRENGTH
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          4
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ≥ 35 N/MM2
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ≥ 42 N/MMu00b2
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          ≥ 50 N/MMu00b2
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          rowSpan={1}
                          align="center"
                          sx={{ padding: "5px" }}
                        >
                          <img
                            src={mecanica2}
                            alt="mecanica-impacto"
                            style={{ 
                              width: "40px", 
                              height: "40px",
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          RESISTENCIA AL IMPACTO
                          <br />
                          IMPACT RESISTANCE
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          5
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          MD
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          0,85
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          0,81
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          rowSpan={1}
                          align="center"
                          sx={{ padding: "5px" }}
                        >
                          <img
                            src={mecanica3}
                            alt="mecanica-abrasion"
                            style={{ 
                              width: "40px", 
                              height: "40px",
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          RESISTENCIA A LA ABRASIÓN PROFUNDA
                          <br />
                          DEEP ABRASION RESISTANCE
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          6
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          &lt; 175 MM3
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          &lt; 145 MMu00b3
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          &lt; 145 MMu00b3
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          rowSpan={1}
                          align="center"
                          sx={{ padding: "5px" }}
                        >
                          <img
                            src={mecanica4}
                            alt="mecanica-dilatacion"
                            style={{ 
                              width: "40px", 
                              height: "40px",
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          DILATACIÓN TÉRMICA LINEAL
                          <br />
                          LINEAR THERMAL-EXPANSION
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          6
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          MD
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          &lt; 7,5X10-6 u00baC-1
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          &lt; 7,5X10-6 u00baC-1
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          rowSpan={1}
                          align="center"
                          sx={{ padding: "5px" }}
                        >
                          <img
                            src={mecanica5}
                            alt="mecanica-dilatacion"
                            style={{ 
                              width: "40px", 
                              height: "40px",
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          CHOQUE TÉRMICO
                          <br />
                          THERMAL SHOCK
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          9
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          MD
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RESISTE
                          <br />
                          RESISTS
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RESISTE
                          <br />
                          RESISTS
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          rowSpan={1}
                          align="center"
                          sx={{ padding: "5px" }}
                        >
                          <img
                            src={mecanica6}
                            alt="mecanica-dilatacion"
                            style={{ 
                              width: "40px", 
                              height: "40px",
                              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))"
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          RESISTENCIA AL HIELO
                          <br />
                          FROST RESISTANCE
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          12
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          EXIGIDO
                          <br />
                          REQUIRED
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RESISTE
                          <br />
                          RESISTS
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RESISTE
                          <br />
                          RESISTS
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
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
                          colSpan={3}
                          align="center"
                          sx={{ width: "400px", padding: "10px 10px" }}
                        >
                          DOLCKER
                          <br />
                          Valores 1ª Calidad / Values 1st Quality
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
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
        </>
      </StyledCaracteristicas>
    </>
  );
};

export default Caracteristicas;
