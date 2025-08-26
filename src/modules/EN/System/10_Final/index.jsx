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
		fontFamily: "inherit",
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
								to="/en/quienes-somos"
								variant="h3"
								color="inherit"
								underline="none"
								sx={{
									fontFamily: "inherit",
									textTransform: "uppercase",
									fontSize: "30px",
									textAlign: "left",
									border: "none",
									background: "none",
									cursor: "pointer",
									transition: "opacity 0.2s ease-in-out",
									width: "100%",
								}}
							>
								About Us
							</Link>
							<Link
								component={RouterLink}
								to="/en/contacto"
								variant="h3"
								color="inherit"
								underline="none"
								sx={{
									fontFamily: "inherit",
									textTransform: "uppercase",
									fontSize: "30px",
									textAlign: "left",
									border: "none",
									background: "none",
									cursor: "pointer",
									transition: "opacity 0.2s ease-in-out",
									width: "100%",
								}}
							>
								Contact
							</Link>
						</Stack>
					</Grid>
					<Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{ textAlign: { xs: "left", md: "right" } }}>
						<Typography variant="body1" component="p" sx={{ fontWeight: "bold", fontFamily: "inherit" }}>
							Contact
						</Typography>
						<Typography variant="body2" component="address" sx={{ fontStyle: "normal", mt: 1, fontFamily: "inherit" }}>
							DOLCKER SISTEMAS, S.L.
							<br />
							Calle Talamanca del Jarama, 19
							<br />
							28051 Madrid (España)
							<br />
							(+34) 902 363 725
						</Typography>
						<Link href="tel:+34902363725" color="inherit" underline="hover" sx={{ display: "block", mt: 2, fontFamily: "inherit" }}>
							(+34) 902 363 725
						</Link>
						<Link
							href="mailto:administracion@dolcker.es"
							color="inherit"
							underline="hover"
							sx={{ display: "block", fontFamily: "inherit" }}
						>
							administracion@dolcker.es
						</Link>
						<Link href="mailto:dolcker@dolcker.es" color="inherit" underline="hover" sx={{ display: "block", fontFamily: "inherit" }}>
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
						justifyContent: "flex-end",
						alignItems: "center",
						flexWrap: "wrap",
						gap: 2,
					}}
				>
					<Stack direction="row" spacing={2}>
						<Button
							component={RouterLink}
							to="/en/aviso-legal"
							variant="text"
							size="small"
							sx={{ color: "grey.600", textTransform: "none", fontWeight: "normal", fontFamily: "inherit" }}
						>
							Legal Notice
						</Button>
						<Button
							component={RouterLink}
							to="/en/politica-privacidad"
							variant="text"
							size="small"
							sx={{ color: "grey.600", textTransform: "none", fontWeight: "normal", fontFamily: "inherit" }}
						>
							Privacy Policy
						</Button>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
}

export default Final;
