import styled from "styled-components";
import Seccion from "../../../../components/Seccion";
import Text from "../../../../components/Text";
import { Column5, DISTANCES } from "../../../../global/GlobalStyles";

const StyledVentajas = styled(Seccion)`
  row-gap: ${DISTANCES.medium};

  ${Text} {
    ${Column5}
  }
`;

export default StyledVentajas;
