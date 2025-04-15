import styled from "styled-components";
import StyledImageWithCaption from "../../../../components/ImageWithCaption/styles";
import Seccion from "../../../../components/Seccion";
import {
  Column8,
  DISTANCES,
  GridLayout,
  TABLET_SIZE,
  MOBILE_SIZE,
} from "../../../../global/GlobalStyles";
import StyledAnotacion from "../../../../components/Anotacion/styles";
import StyledVisualizadorNota from "../../../../components/VisualizadorNota/styles";

const StyledDolcker = styled(Seccion)`
  row-gap: ${DISTANCES.long};

  .dolcker-info {
    ${Column8}

    ${GridLayout}
    grid-template-columns: repeat(8, 1fr);
    row-gap: ${DISTANCES.medium};

    ${StyledImageWithCaption} {
      grid-column: 1 / span 6;
    }
    > .text-content,
    > p {
      grid-column: 1 / span 6;
      font-size: 1rem;
      line-height: 1.5;
      color: #333;
      margin-bottom: 1rem;

      ul {
        margin: 1rem 0;
        padding-left: 2rem;
        list-style-type: disc;
      }
    }

    ${StyledImageWithCaption} {
      grid-column: 1 / span 6;
    }
  }

  ${StyledAnotacion} {
    grid-row-start: 2;
  }

  ${StyledVisualizadorNota} {
    grid-row-start: 2;
  }
  @media (max-width: ${TABLET_SIZE}) {
    .dolcker-info {
      grid-row-start: 2;
      grid-template-columns: repeat(4, 1fr);

      ${StyledImageWithCaption} {
        grid-column: 1 / -1;
      }

      > .text-content,
      > p {
        ul {
          padding-left: 1.5rem;
        }
      }
    }

    ${StyledAnotacion} {
      grid-row-start: 3 !important;
    }

    ${StyledVisualizadorNota} {
      grid-row-start: 4 !important;
    }
  }

  @media (max-width: ${MOBILE_SIZE}) {
    .dolcker-info {
      grid-template-columns: repeat(4, 1fr);

      ${StyledImageWithCaption} {
        grid-column: 1 / -1;
      }
      > .text-content,
      > p {
        grid-column: 1 / -1;
      }

      > .text-content,
      > p {
        ul {
          padding-left: 1rem;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default StyledDolcker;
