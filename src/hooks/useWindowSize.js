import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    heigth: window.innerHeight,
    width: window.innerWidth,
  });

  const handleWindowResize = () => {
    setDimensions({
      heigth: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return dimensions;
};
