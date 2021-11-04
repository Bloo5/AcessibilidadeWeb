import React from "react";
//import {  useParams } from "react-router-dom";


const FaleConoscoDesktop = () => {
   return(
<>
         <div style={{height: '350x'}} className="card card-custom card-stretch gutter-b">
            <div className="card-header">
               <h3 className="card-title font-weight-bolder">Fale Conosco</h3>
            </div>
             <div style={{height: '300x'}} className="card-body">
                 <div className="pt-10">
                     <button style={{width: '100%', height: '60px'}} className="btn btn-outline-info">Conversar por Voz</button>
                 </div>
              
                 <div className="pt-20">
                     <button style={{width: '100%', height: '60px'}} className="btn btn-outline-info">Conversar por Chat</button>
                 </div>

                 <div className="pt-20 ">
                     <button style={{width: '100%', height: '60px'}} className="btn btn-outline-info">Conversar por Video</button>
                 </div>
            
             </div>
         </div>
       
 </>
   )
}

export default FaleConoscoDesktop;