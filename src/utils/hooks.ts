import { useContext, useEffect, useState } from "react"
import { UserContext } from "./variables"


// get user related data from context 
export const useUser = () => {
    const data = useContext(UserContext)
   // console.log(data._id)
    return data
}

// get browser and additional information from context 
export const useBrowserInfo = () => {
    const [height, setHeight] = useState<number>(window.innerHeight);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [scrollY, setScrollY] = useState<number>(window.scrollY);
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
  
    return {
      height,
      width,
      scrollY
    };
  };

// set title dynamically
export const useTitle = (title : string | null) => {
    document.title = title ? `${title} - Flaunt Fashion` : "Flaunt Fashion"
}
