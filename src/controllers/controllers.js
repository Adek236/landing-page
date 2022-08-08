import { useEffect, useState, useCallback } from "react";

export const useWindowWidth = (myRef) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const handleResize = useCallback(() => {
    setWindowWidth(myRef.current.offsetWidth);
    setWindowHeight(myRef.current.offsetHeight);
  }, [myRef]);

  useEffect(() => {
    if (myRef.current) {
      setWindowWidth(myRef.current.offsetWidth);
      setWindowHeight(myRef.current.offsetHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [myRef, handleResize]);

  return { windowWidth, windowHeight };
};