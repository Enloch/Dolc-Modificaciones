import React from "react";
import {
  MainContainer,
  Seccion,
  SeccionContenido,
  WrapperContenido,
  GridSeccion,
  GridTextoCabecera,
  ContenedorSeparador,
  SeparadorHeader,
  ContenedorSubtitulos,
  LimiteSubtitulos,
  Caja25Flex,
  Caja75Flex,
  SeccionTituloPunto,
  AjusteTituloPunto,
  Punto,
  ContenedorTituloPunto,
  TituloPunto,
  StyledImagenTexto,
  StyledImagen,
  StyledTexto,
} from "./styles";
import { Titulo } from "../../components/Titulos";
// import System from "../../assets/images/Aplicaciones/catalogo3-1-12.webp";
import System from "../../assets/images/Aplicaciones/catalogo3-1-12.webp";
import Tline from "../../assets/images/DolckerTline/Aplicaciones/catalogo3-1-11.webp";
import Matrix from "../../assets/images/DolckerMatrix/Aplicaciones/catalogo3-1-10.jpg";
import Navbar from "../../components/Menu";

export const Landing = () => {
  return (
    <>
      <MainContainer>
        <Navbar />
        <Seccion className='Collection'>
          <SeccionContenido>
            <WrapperContenido>
              <GridSeccion>
                <Titulo id='scroller'>
                  DESARROLLO DE FACHADAS
                  <br /> VENTILADAS INNOVADORAS Y DE ALTO RENDIMIENTO
                </Titulo>
              </GridSeccion>
              <ContenedorSeparador>
                <SeparadorHeader />
              </ContenedorSeparador>
              <ContenedorSubtitulos>
                <LimiteSubtitulos>
                  <Caja25Flex>
                    <SeccionTituloPunto>
                      <AjusteTituloPunto>
                        <Punto>
                          <TituloPunto></TituloPunto>
                        </Punto>
                        <ContenedorTituloPunto id='collection'>
                          <Titulo>Soluciones</Titulo>
                        </ContenedorTituloPunto>
                      </AjusteTituloPunto>
                    </SeccionTituloPunto>
                  </Caja25Flex>
                  <StyledImagenTexto>
                    <a
                      href='dolcker-system'
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                    >
                      <StyledImagen src={System} alt='System' />
                    </a>
                    <StyledTexto>Dolcker System</StyledTexto>
                  </StyledImagenTexto>
                  <StyledImagenTexto>
                    <a
                      href='dolcker-tline'
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                    >
                      <StyledImagen src={Tline} alt='Tline' />
                    </a>
                    <StyledTexto>Dolcker T-line</StyledTexto>
                  </StyledImagenTexto>
                  <StyledImagenTexto>
                    <a
                      href='dolcker-matrix'
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                    >
                      <StyledImagen src={Matrix} alt='Matrix' />
                    </a>
                    <StyledTexto>Dolcker Matrix</StyledTexto>
                  </StyledImagenTexto>
                </LimiteSubtitulos>
              </ContenedorSubtitulos>
            </WrapperContenido>
          </SeccionContenido>
        </Seccion>
      </MainContainer>
    </>
  );
};
