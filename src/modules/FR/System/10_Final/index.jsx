import React from "react";
import { Box, Container, Typography, Link, Grid, IconButton, Stack, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logoDolcker from "/logo.png";
import { Link as RouterLink } from "react-router-dom";

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
		<Box component="footer" sx={{ backgroundColor: "#f8f8f8", color: "common.black", py: { xs: 6, md: 12 } }}>
			<Container maxWidth={"xxl"} sx={{ px: { xs: "3vw" } }}>
				<Grid container spacing={{ xs: 0 }} justifyContent="space-between">
					<Grid size={{ xs: 12, sm: 6, md: 4 }}>
						<Link component={RouterLink} to="/">
							<img src={logoDolcker} alt="Logo Dolcker" style={{ maxWidth: "200px" }} />
						</Link>
						<Stack direction="row" spacing={1} sx={{ mb: 4, mt: 2 }}>
							<Button
								href="https://www.linkedin.com/company/www.dolcestone.com"
								target="_blank"
								startIcon={<LinkedInIcon />}
								sx={socialButtonStyles}
							>
								LinkedIn
							</Button>
							<Button href="https://www.instagram.com/dolcestone_/" target="_blank" startIcon={<InstagramIcon />} sx={socialButtonStyles}>
								Instagram
							</Button>
						</Stack>
					</Grid>
					<Grid size={{ xs: 12, sm: 6, md: 4 }}>
						<Stack spacing={1.5}>
							<Link
								component={RouterLink}
								to="/fr/quienes-somos"
								variant="h3"
								color="inherit"
								underline="none"
								sx={{
									textAlign: "left",
									border: "none",
									background: "none",
									cursor: "pointer",
									transition: "opacity 0.2s ease-in-out",
									width: "100%",
								}}
							>
								À propos de nous
							</Link>
							<Link
								component={RouterLink}
								to="/fr/contacto"
								variant="h3"
								color="inherit"
								underline="none"
								sx={{
									textAlign: "left",
									border: "none",
									background: "none",
									cursor: "pointer",
									transition: "opacity 0.2s ease-in-out",
									width: "100%",
								}}
							>
								Contactez-nous
							</Link>
						</Stack>
					</Grid>
					<Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ textAlign: { xs: "left", md: "right" } }}>
						<Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
							Contactez-nous
						</Typography>
						<Typography variant="body2" component="address" sx={{ fontStyle: "normal", mt: 1 }}>
							DOLCKER SISTEMAS, S.L.
							<br />
							Calle Talamanca del Jarama, 19
							<br />
							28051 Madrid (España)
							<br />
							(+34) 902 363 725
						</Typography>
						<Link href="tel:+34902363725" color="inherit" underline="hover" sx={{ display: "block", mt: 2 }}>
							(+34) 902 363 725
						</Link>
						<Link href="mailto:administracion@dolcker.es" color="inherit" underline="hover" sx={{ display: "block" }}>
							administracion@dolcker.es
						</Link>
						<Link href="mailto:dolcker@dolcker.es" color="inherit" underline="hover" sx={{ display: "block" }}>
							dolcker@dolcker.es
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
						<Button
							component={RouterLink}
							to="/fr/aviso-legal"
							variant="text"
							size="small"
							sx={{ color: "grey.600", textTransform: "none", fontWeight: "normal" }}
						>
							Avis Legal
						</Button>
						<Button
							component={RouterLink}
							to="fr/politica-privacidad"
							variant="text"
							size="small"
							sx={{ color: "grey.600", textTransform: "none", fontWeight: "normal" }}
						>
							Politique de confidentialite
						</Button>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
}

export default Final;
