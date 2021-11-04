import React, { useState, useEffect } from "react";
import FaleConoscoMobile from "./Components/FaleConoscoMobile";
import FaleConoscoDesktop from "./Components/FaleConoscoDesktop";


//import {  useParams } from "react-router-dom";


const FaleConosco = () => {

   const size = useWindowSize();


   function useWindowSize() {
      const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []); 
      return windowSize;
    }


   return(
<>
{(size.width <= 991)? 
   <FaleConoscoMobile/> : <FaleConoscoDesktop/>   
     }
 </>
   )
}

export default FaleConosco;