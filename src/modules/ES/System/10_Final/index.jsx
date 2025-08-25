import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Stack, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logoDolcker from "/logo.png";
function Final() {
	const socialButtonStyles = {
		borderRadius: "20px",
		textTransform: "none",
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		color: "common.black",
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.08)",
		},
	};

	return (
		<Box component="footer" sx={{ backgroundColor: "#f8f8f8", color: "common.black", py: { xs: 6, md: 10 } }}>
			<Container maxWidth="xxl" sx={{ px: { xs: "3vw" } }}>
				<Grid container spacing={{ xs: 4, md: 1 }}>
					<Grid size={{ xs: 12, md: 4 }}>
						<img src={logoDolcker} alt="Logo Dolcker" width={100} />

						<Stack direction="row" spacing={1} sx={{ mb: 4, mt: 2 }}>
							<Button
								href="https://www.linkedin.com/company/105421562"
								target="_blank"
								startIcon={<LinkedInIcon />}
								sx={socialButtonStyles}
							>
								LinkedIn
							</Button>
							<Button
								href="https://www.instagram.com/mk_hub_experience/"
								target="_blank"
								startIcon={<InstagramIcon />}
								sx={socialButtonStyles}
							>
								Instagram
							</Button>
						</Stack>
						<Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
							Horario de atención
						</Typography>
						<Typography variant="body2">Lunes a Viernes: 8:00 - 18:00</Typography>
					</Grid>
					<Grid size={{ xs: 12, md: 10 }}>
						<Stack spacing={1.5}>
							<Link
								component="h3"
								variant="h3"
								href="#sectores"
								color="inherit"
								underline="none"
								sx={{
									textAlign: "left",
									border: "none",
									background: "none",
									cursor: "pointer",
									transition: "opacity 0.2s ease-in-out",
									width: { xs: "none", md: "26ch" },
								}}
							>
								Sectores
							</Link>
							<Link
								component="h3"
								variant="h3"
								href="#demos"
								color="inherit"
								underline="none"
								sx={{
									textAlign: "left",
									border: "none",
									background: "none",
									cursor: "pointer",
									transition: "opacity 0.2s ease-in-out",
									width: { xs: "none", md: "26ch" },
								}}
							>
								Catálogos
							</Link>
							<Link
								component="h3"
								variant="h3"
								href="#proyectos"
								color="inherit"
								underline="none"
								sx={{
									textAlign: "left",
									border: "none",
									background: "none",
									cursor: "pointer",
									transition: "opacity 0.2s ease-in-out",
									width: { xs: "none", md: "26ch" },
								}}
							>
								Proyectos
							</Link>
							<Link
								component="h3"
								variant="h3"
								href="#faq"
								color="inherit"
								underline="none"
								sx={{
									textAlign: "left",
									border: "none",
									background: "none",
									cursor: "pointer",
									transition: "opacity 0.2s ease-in-out",
									width: { xs: "none", md: "26ch" },
								}}
							>
								FAQ
							</Link>
						</Stack>
					</Grid>
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
							Contacto
						</Typography>
						<Typography variant="body2" component="address" sx={{ fontStyle: "normal", mt: 1 }}>
							Calle Principal 123
							<br />
							28001 Madrid
							<br />
							España
						</Typography>
						<Link href="tel:+34912345678" color="inherit" underline="hover" sx={{ display: "block", mt: 2 }}>
							+34 912 345 678
						</Link>
						<Link href="mailto:info@mk.com" color="inherit" underline="hover" sx={{ display: "block" }}>
							info@mk.com
						</Link>
					</Grid>
				</Grid>
				<Box
					sx={{
						borderTop: 1,
						borderColor: "grey.300",
						mt: { xs: 6, md: 10 },
						pt: 4,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: 2,
					}}
				>
					<Typography variant="body2" sx={{ color: "grey.600" }}>
						El contenido de este catálogo está protegido por la ley de Propiedad Intelectual, Real Decreto Legistlativo 1/1996. Cualquier
						reproducción del mismo, en parte o en su totalidad, sin autorización expresa de DOLCKER puede ser sancionada conforme el código
						penal.
					</Typography>
					<Stack direction="row" spacing={2}>
						<Button variant="text" size="small" sx={{ color: "grey.600", textTransform: "none", fontWeight: "normal" }}>
							Aviso Legal
						</Button>
						<Button variant="text" size="small" sx={{ color: "grey.600", textTransform: "none", fontWeight: "normal" }}>
							Política de Privacidad
						</Button>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
}

export default Final;
