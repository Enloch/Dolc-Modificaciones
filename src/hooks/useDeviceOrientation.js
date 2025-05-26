import { useState, useEffect } from "react";

// Threshold for considering a device as mobile (adjust as needed)
const MOBILE_MAX_WIDTH = 768;

export const useDeviceOrientation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkDeviceAndOrientation = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      setIsMobile(screenWidth <= MOBILE_MAX_WIDTH);
      // Ensure landscape is true only if width is greater than height
      // and also consider square screens or very close to square as portrait for this purpose if mobile
      if (screenWidth <= MOBILE_MAX_WIDTH) {
        setIsLandscape(screenWidth > screenHeight);
      } else {
        // For non-mobile, landscape is generally true or less critical to enforce strict landscape
        // For simplicity, we can still use width > height, or set it true always for desktop
        setIsLandscape(true); // Or screenWidth > screenHeight for consistency
      }
    };

    // Initial check
    checkDeviceAndOrientation();

    // Listen for resize and orientation change events
    window.addEventListener("resize", checkDeviceAndOrientation);
    // Note: 'orientationchange' is not universally supported and resize often covers it.
    // Consider adding it if resize proves insufficient on target devices.

    // Cleanup listeners
    return () => {
      window.removeEventListener("resize", checkDeviceAndOrientation);
    };
  }, []);

  return { isMobile, isLandscape };
};
