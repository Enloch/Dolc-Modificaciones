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
        <Titulo>CARACTÉRISTIQUES TECHNIQUES</Titulo>
        <ImageWithCaption
          src={caracter1}
          alt="características técnicas imagen"
          columnSpan="6"
        />
        <Text>
          DOLCKER est un matériau compact et résistant caractérisé par une
          porosité quasi inexistante et par moins de 0,1% d'eau absorption.
          <br />
          <br />
          Sa structure vitrifiée, à faible degré de porosité, garantit une haute
          imperméabilité à la saleté et à la glace.
          <br />
          <br />
          full&body corp
          <br />
          <br />
          Les avantages d'un matériau unique.
        </Text>
        <Listado>
          <li>
            <strong>
              Large gamme de couleurs, formats, épaisseurs et finitions.
            </strong>
          </li>
          <li>
            <strong>C'est antiacide.</strong>Il est insensible à les acides les
            plus répandus (il ne résiste pas à l'attaque d'acide fluorhydrique).
          </li>
          <li>
            <strong>Il est résistant.</strong> Résistant à l'abrasion et porter
            plus que n'importe quel matériau naturel.
          </li>
          <li>
            <strong>Incombustible.</strong> Le matériau ne brûle pas ou ne
            produit pas de gaz ou de fumées nocifs en cas d'incendie ou
            d'exposition aux flammes. en cas d'incendie ou d'exposition aux
            flammes.
          </li>
          <li>
            <strong>
              Il ne retient pas les substances organiques et les bactéries, qui
              sont la cause d'allergies et de troubles.
            </strong>
          </li>
          <li>
            <strong>Facile à travailler.</strong> Le produit se prête se prête à
            être travaillé (coupé, percé, etc.) comme la pierre comme la pierre
            naturelle pour répondre à tout type de personnalisation.
          </li>
          <li>
            <strong>Il est inattaquable.</strong> No problem with with hot pots
            or lit cigarettes, which can otherwise damage wood damage wood,
            plastic or resin-bonded laminates. plastic or resin-bonded
            laminates.
          </li>
          <li>
            <strong>Facile à nettoyer.</strong>Il est possible Il est possible
            d'utiliser des détergents ou des solvants très puissants sans
            risquer d'endommager le matériel. risque d'endommager le matériau.
          </li>
          <li>
            <strong>Résistant au gel.</strong> Le matériau est résistant au
            froid et à la glace.
          </li>
          <li>
            <strong>Stabilité chromatique.</strong> Les couleurs sont
            complètement stables et ne sont pas altérées par l'exposition au
            soleil au soleil, aux agents atmosphériques ou au smog.
          </li>
        </Listado>
        <Text>
          <strong>ECOLOGIQUE</strong>
          <br />
          <br />
          Il ne contient pas d'imperméabilisants chimiques, de vernis ou de
          résines. résines, il n'émet pas d'exhalaisons même à la chaleur d'une
          d'une flamme. Contrairement à certaines pierres naturelles, elle
          n'émet pas de Radon ou d'autres gaz radioactifs et n'est pas polie.
          Radon ou d'autres gaz radioactifs et n'est pas polie au plomb. avec du
          plomb. Elle est produite dans le respect de l'environnement.
          <br />
          <br />
          <strong>LA RÉSISTANCE AUX CHANGEMENTS BRUSQUES DE TEMPÉRATURE</strong>
          <br />
          <br />
          <strong>RÉSISTANCE À LA FLEXION SOUS CHARGES FIXE ET STATIQUE</strong>
          <br />
          <br />
          <strong>
            RÉSISTANCE AUX CHOCS, RÉSISTANCE À L'ABRASION SÉCURITÉ
          </strong>
        </Text>
        <Listado>
          <li>Extension d'humidité négligeable</li>
          <li>Ignifuge</li>
          <li>Ignifuge</li>
          <li>Absence de danger en cas d'incendie</li>
          <li>Sécurité électrique</li>
        </Listado>
        <Text>
          <strong>SANTÉ ET BIEN-ÊTRE</strong>
        </Text>
        <Listado>
          <li>Absence d'odeur propre ou acquise</li>
          <li>Résistance à la libération de sa propre poussière</li>
          <li>Poussière acquise facile à nettoyer</li>
          <li>Nettoyage et entretien faciles</li>
          <li>
            C'est un produit qui, en raison de sa capacité isolante électrique,
            empêche l'accumulation de poussière environnementale électriquement
            actif
          </li>
          <li>Convient là où la consommation d'eau est abondante</li>
          <li>
            C'est l'installation définitive : vous n'avez besoin d'aucune
            entretien après mise en service
          </li>
        </Listado>
      </StyledCaracteristicas>
      <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
        <Titulo>Datos técnicos</Titulo>
        <Text>
          <strong>CARACTÉRISTIQUES PHYSIQUES ET MÉCANIQUES</strong>
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
                "&.Mui-expanded": {
                  margin: 0,
                  marginBottom: 2,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: COLORS.gray03,
                  color: "black",
                  "&.Mui-expanded": {
                    minHeight: 48,
                  },
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  CARACTÉRISTIQUES DIMENSIONNELLES
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
                          CARACTÉRISTIQUES DIMENSIONNELLES
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          UNE EN-14411 (1)
                          <br />
                          ISO 13006 ANNEXE G
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={3}
                          sx={{ padding: "10px 10px" }}
                        >
                          DOLCKER VALEURS PREMIÈRE QUALITÉ
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Longueur
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
                          Épaisseur
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
                          Rectitude des côtés
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
                          Orthogonalité
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Courbure centrale et latérale
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
                          Gauchissement
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Absorption d'eau
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
                "&.Mui-expanded": {
                  margin: 0,
                  marginBottom: 2,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{
                  backgroundColor: COLORS.gray03,
                  color: "black",
                  "&.Mui-expanded": {
                    minHeight: 48,
                  },
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  CARACTÉRISTIQUES MÉCANIQUES
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
                          CARACTÉRISTIQUES MÉCANIQUES
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          UNE EN-14411 (1)
                          <br />
                          ISO 13006 ANNEXE G
                        </TableCell>
                        <TableCell
                          align="center"
                          colSpan={3}
                          sx={{ padding: "10px 10px" }}
                        >
                          DOLCKER VALEURS PREMIÈRE QUALITÉ
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Résistance à la rupture
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
                          Résistance à la flexion
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Résistance aux chocs
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Résistance à l'abrasion profonde
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Dilatation thermique linéaire
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Choc thermique
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          9
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          MD
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RÉSISTE
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RÉSISTE
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Résistance au gel
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          12
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          EXIGIDO
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RÉSISTE
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RÉSISTE
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
                "&.Mui-expanded": {
                  margin: 0,
                  marginBottom: 2,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{
                  backgroundColor: COLORS.gray03,
                  color: "black",
                  "&.Mui-expanded": {
                    minHeight: 48,
                  },
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  CARACTÉRISTIQUES HYGIÉNIQUES
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
                          CARACTÉRISTIQUES HYGIÉNIQUES
                        </TableCell>
                        <TableCell
                          sx={{ width: "220px", padding: "10px 10px" }}
                        >
                          TYPE DE PRODUIT CHIMIQUE
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
                          ANNEXE G
                        </TableCell>
                        <TableCell
                          colSpan={3}
                          align="center"
                          sx={{ width: "400px", padding: "10px 10px" }}
                        >
                          DOLCKER
                          <br />
                          VALEURS 1ère QUALITÉ
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          SATINADO
                          <br />
                          60X120 11,5mm
                          <br />
                          Calibre: 1
                          <br />
                          597,2x1197,3
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          MATE
                          <br />
                          60X120 14mm
                          <br />
                          Calibre: 1
                          <br />
                          597,2x1197,3
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
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
                        <TableCell
                          rowSpan={4}
                          align="center"
                          sx={{ padding: "5px" }}
                        >
                          <img
                            src={higiene1}
                            alt="higiene-resistencia-quimica"
                            style={{
                              width: "40px",
                              height: "40px",
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell rowSpan={4} sx={{ padding: "10px 10px" }}>
                          Résistance chimique
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Acides à basse concentration
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
                          Acides à haute concentration
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
                          Bases à basse concentration
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
                          Bases à haute concentration
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Résistance aux taches
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          Produits domestiques de nettoyage et sels de piscine
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}></TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          13
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          MÍNIMO UB
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
