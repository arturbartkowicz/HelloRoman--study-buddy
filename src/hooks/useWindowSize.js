import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    heigth: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDimensions({
        heigth: window.innerHeight,
        width: window.innerWidth,
      });
    });
  }, []);

  return dimensions;
};
