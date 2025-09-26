import type { FC } from 'react';
import { useTheme } from '@mui/material/styles';
// 1. Import the new logo image


export const Logo: FC = () => {
  // Use the theme hook (can still be useful for context, but not strictly needed for a static image src)
  const theme = useTheme(); 

  // The fillColor logic is no longer needed as the image handles its own appearance

  return (
    // 2. Replace the SVG with an <img> tag
    <img
      src={'assets/logo.png'} // Use the imported logo variable
      alt="Relight Company Logo" // Always include a descriptive alt text
      // 3. Keep styling for responsiveness and centering
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'contain' // Ensures the image scales properly without cropping
      }} 
    />
  );
};