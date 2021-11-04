import React from "react";
import PerfilInfo from "./Components/PerfilInfo";
import PerfilMateria from "./Components/PerfilMatérias";
import PerfilTrabalhos from "./Components/PerfilTrabalhos";
import PerfilProva from "./Components/PerfilProva"


const Perfil = () => {

   return(
       
   <div className="pl-0 pr-0 container-fluid">
            <div className="row">      
            <PerfilInfo/>
            <PerfilProva/>
            </div>
            <div className="row">
            <PerfilMateria/>
            <PerfilTrabalhos/>
      </div>
    
</div>      
   )
}

export default Perfil;