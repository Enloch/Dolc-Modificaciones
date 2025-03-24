import React, { useState, useEffect } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { COLORS } from '../global/GlobalStyles';
import { keyframes } from '@emotion/react';
import Logo from './Logo';
import styled from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Container for the logo that will act as a mask
const LogoContainer = styled.div`
  position: relative;
  width: 219px;
  height: auto;
  overflow: hidden;
  margin-bottom: 24px;
`;

// Static logo that serves as the container outline
const StaticLogo = styled(Logo)`
  width: 100%;
  filter: grayscale(100%);
  opacity: 0.5;
`;

// Colored logo that will be revealed as progress increases
const ProgressLogo = styled(Logo)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  clip-path: inset(0 ${props => 100 - (props.progress || 0)}% 0 0);
  transition: clip-path 0.3s ease-in-out;
  filter: none;
  mix-blend-mode: normal;
`;

// This component is designed to be used as a fallback for Suspense
const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular progreso con actualizaciones más pequeñas y frecuentes para una animación más suave
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2; // Incrementos más pequeños
        if (newProgress >= 100) {
          // Reset progress to create continuous loading effect while content is loading
          return 0;
        }
        return newProgress;
      });
    }, 60); // Actualizaciones más frecuentes

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={COLORS.gray03}
      sx={{ animation: `${fadeIn} 0.5s ease-in` }}
    >
      {/* Logo with progress effect */}
      <LogoContainer>
        <StaticLogo />
        <ProgressLogo progress={progress} />
      </LogoContainer>
      
      {/* CircularProgress instead of text */}
      <CircularProgress 
        size={40} 
        thickness={4} 
        sx={{ 
          color: COLORS.gray06,
        }} 
      />
    </Box>
  );
};

export default Loader;