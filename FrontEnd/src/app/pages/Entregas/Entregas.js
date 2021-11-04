import React, { useState, useEffect } from "react";
import EntregasDesktop from "./Components/EntregasDesktop";
import EntregasMobile from "./Components/EntregasMobile";

//import {  useParams } from "react-router-dom";



const Nota = () => {


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
   <EntregasMobile/> : <EntregasDesktop/>   
     }
     </>             
    )
 }
   


export default Nota;