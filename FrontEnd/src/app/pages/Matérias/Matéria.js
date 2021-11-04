import React, { useEffect, useState } from "react";
import MateriaDesktop from "./Components/MatériaDesktop";
import MateriaMobile from "./Components/MatériaMobile";

//import {  useParams } from "react-router-dom";



const Matéria = () => {


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
   <MateriaMobile/> : <MateriaDesktop/>   
     }
     </>             
    )
 }  
   


export default Matéria;