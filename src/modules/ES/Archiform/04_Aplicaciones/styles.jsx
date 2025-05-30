import styled from "styled-components";
import StyledCita from "../../../../components/Cita/styles";
import StyledImageWithCaption from "../../../../components/ImageWithCaption/styles";
import Seccion from "../../../../components/Seccion";
import { Column6, MOBILE_SIZE, TABLET_SIZE } from "../../../../global/GlobalStyles";

export const StyledGaleria = styled(Seccion)`
	.Slider {
		${Column6}
	}
		@media (max-width: ${TABLET_SIZE}) {
			.Slider {
				${Column6}
			}
		}
		@media (max-width: ${MOBILE_SIZE}) {
			.Slider {
				${Column6}
			}
		}
`;
export const StyledSlider = styled.div`
	.image-gallery-slide .image-gallery-image {
		max-width: 100%;
		object-fit: contain;
	}
`;
const StyledAplicaciones = styled(Seccion)`
	row-gap: ${(props) => props.rowGap || "0px"};

	${StyledImageWithCaption}.distinto {
		grid-column: 5 / span 4;
	}
`;

export default StyledAplicaciones;
