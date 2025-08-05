const Caracteristicas = ({ id }) => {
  return (
    <>
      <StyledCaracteristicas id={id[0]} backgroundColor={COLORS.gray02}>
        <Titulo>Technical Specifications</Titulo>
        <ImageWithCaption
          src={caracter1}
          alt="technical specifications image"
          columnSpan="6"
        />
        <Text>
          DOLCKER is a compact, resistant material characterized by almost non-existent porosity and water absorption of less than 0.1%.
          <br /><br />
          Its vitrified structure, with a low degree of porosity, guarantees high impermeability to dirt and ice.
          <br /><br />
          Full&body composition
          <br /><br />
          The advantages of a unique material.
        </Text>
        <Listado>
          <li><strong>Wide range of colors, formats, thicknesses and finishes.</strong></li>
          <li><strong>Acid-resistant.</strong> Insensitive to most common acids (Does not resist hydrofluoric acid attack).</li>
          <li><strong>Highly durable.</strong> More resistant to abrasion and wear than any natural material.</li>
          <li><strong>Non-combustible.</strong> The material does not burn or produce toxic-harmful gases or smoke in case of fire or exposure to flames.</li>
          <li><strong>Does not retain organic substances and bacteria, causes of allergies and disorders.</strong></li>
          <li><strong>Easy to work with.</strong> The product can be worked (cut, drilled, etc.) like natural stone to satisfy any customization need.</li>
          <li><strong>Resistant.</strong> No issues with hot pans or lit cigarettes, which can damage wood, plastic laminates, or resin agglomerates.</li>
          <li><strong>Easy to clean.</strong> It is possible to use very strong detergents or solvents without the risk of damaging the material.</li>
          <li><strong>Resistant to ice.</strong> The material is resistant to cold and ice.</li>
          <li><strong>Stable color.</strong> The colors are totally stable and do not change due to exposure to the sun, atmospheric agents, or smog.</li>
        </Listado>
        <Text>
          <strong>ECOLOGICAL</strong>
          <br /><br />
          Does not contain chemical sealers, varnishes, or resins, does not emit fumes even with the heat of a flame. Unlike some natural stones, it does not emit Radon or other radioactive gases and is not polished with lead. It is produced respecting the environment.
          <br /><br />
          <strong>RESISTANCE TO SUDDEN TEMPERATURE CHANGES</strong>
          <br /><br />
          <strong>RESISTANCE TO FLEXION WITH FIXED AND STATIC LOADS</strong>
          <br /><br />
          <strong>IMPACT RESISTANCE, ABRASION, AND SAFETY</strong>
        </Text>
        <Listado>
          <li>Insignificant expansion due to humidity</li>
          <li>Non-combustible</li>
          <li>Fireproof</li>
          <li>No danger in case of fire</li>
          <li>Electrical safety</li>
        </Listado>
        <Text>
          <strong>HEALTH AND WELL-BEING</strong>
        </Text>
        <Listado>
          <li>Lack of inherent or acquired odor</li>
          <li>Resistance to the release of its own dust</li>
          <li>Ease of cleaning of acquired dust</li>
          <li>It is a product that, due to its electrical insulation capacity, prevents the capture of electrically active ambient dust</li>
          <li>Suitable where water use is abundant</li>
          <li>It is the definitive installation: it does not require any maintenance after its installation</li>
        </Listado>
      </StyledCaracteristicas>
      <StyledCaracteristicas id={id[1]} backgroundColor={COLORS.gray02}>
        <Titulo>Technical Data</Titulo>
        <Text>
          <strong>PHYSICAL AND MECHANICAL CHARACTERISTICS</strong>
          <br /><br />
          Ceramic pieces are classified as dry-pressed ceramic tiles with low water absorption according to standard UNE-EN 14411, with the following characteristics declared by the manufacturer:
          <br /><br />
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
                  DIMENSIONAL CHARACTERISTICS / DIMENSIONAL CHARACTERISTICS
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
                    aria-label="table of dimensional characteristics"
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
                          DIMENSIONAL CHARACTERISTICS
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
                          DOLCKER VALUES 1ST QUALITY / DOLCKER VALUES 1ST QUALITY
                          <TableRow>
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
                          LENGTH
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
                          THICKNESS
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
                          RECTILINEARITY OF EDGES
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
                          ORTHOGONALITY
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          CENTRAL AND LATERAL CURVATURE
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
                          WARPAGE
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          WATER ABSORPTION
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
                  MECHANICAL CHARACTERISTICS / MECHANICAL CHARACTERISTICS
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
                    aria-label="table of mechanical characteristics"
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
                          MECHANICAL CHARACTERISTICS
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
                          DOLCKER VALUES 1ST QUALITY / DOLCKER VALUES 1ST QUALITY
                          <TableRow>
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
                          BREAKING STRENGTH
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
                          BENDING STRENGTH
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          IMPACT RESISTANCE
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          DEEP ABRASION RESISTANCE
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          LINEAR THERMAL EXPANSION
                          <br />
                          LINEAR THERMAL EXPANSION
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
                          THERMAL SHOCK
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
                          RESISTS
                          <br />
                          RESISTS
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RESISTS
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          FROST RESISTANCE
                          <br />
                          FROST RESISTANCE
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          12
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          REQUIRED
                          <br />
                          REQUIRED
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RESISTS
                          <br />
                          RESISTS
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          RESISTS
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
                  HYGIENIC CHARACTERISTICS / HYGIENIC CHARACTERISTICS
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
                    aria-label="table of hygienic characteristics"
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
                          HYGIENIC CHARACTERISTICS
                          <br />
                          HYGIENIC CHARACTERISTICS
                        </TableCell>
                        <TableCell
                          sx={{ width: "220px", padding: "10px 10px" }}
                        >
                          TYPE OF ACID OR BASE
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
                          VALUES 1ST QUALITY / VALUES 1ST QUALITY
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
                          CHEMICAL RESISTANCE
                          <br />
                          CHEMICAL RESISTANCE
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          LOW CONCENTRATION ACIDS
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
                          CLASS LA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS LA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS LA
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          HIGH CONCENTRATION ACIDS
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
                          CLASS HA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS HA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS HA
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          LOW CONCENTRATION ALKALI
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
                          CLASS LA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS LA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS LA
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          HIGH CONCENTRATION ALKALI
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
                          CLASS HA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS HA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS HA
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
                          STAINS RESISTANCE
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
                              filter:
                                "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}>
                          HOUSEHOLD DETERGENTS AND ADDITIVES FOR SWIMMING-POOLS
                          <br />
                          HOUSEHOLD DETERGENTS AND ADDITIVES FOR SWIMMING-POOLS
                        </TableCell>
                        <TableCell sx={{ padding: "10px 10px" }}></TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          13
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          MINIMUM UB
                          <br />
                          MINIMUM UB
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS LA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS LA
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "10px 10px" }}>
                          CLASS LA
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
