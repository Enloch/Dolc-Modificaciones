import styled from "styled-components";
import {
  DISTANCES,
  TextMedium,
  TextSmall,
  TextSmaller,
  TextExtraSmall,
} from "../../../../../global/GlobalStyles";

const Enlace = styled.a`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  color: black;
  text-decoration: none;

  img {
    height: 17.5rem;
    object-fit: cover;
  }

  span {
    ${TextSmall}
  }
  .formatos {
    ${TextExtraSmall}
  }
`;

export default Enlace;
