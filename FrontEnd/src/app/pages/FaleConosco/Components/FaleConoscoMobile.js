import React from "react";
//import {  useParams } from "react-router-dom";


const FaleConoscoMobile = () => {
   return(
<>
         <div style={{height: '350x'}} className="card card-custom card-stretch gutter-b">
            <div className="card-header">
               <h3 className="card-title font-weight-bolder">Fale Conosco</h3>
            </div>
             <div style={{height: '300x'}} className="card-body">
                 <div className="pt-10">
                    <div className="card md-6" >
                        <button style={{width: '100%', height: '120px'}} className="btn btn-outline-info">
                            <span >Conversar por Voz</span>
                        </button>
                    </div>
                </div>
                 
              
                 <div className="pt-20">
                    <button style={{width: '100%', height: '120px'}} className="btn btn-outline-info">
                         <span >Conversar por Chat</span>
                    </button>
                 </div>

                 <div className="pt-20 ">
                     <button style={{width: '100%', height: '120px'}} className="btn btn-outline-info">
                         <span >Conversar por Video</span>
                     </button>
                 </div>
            
             </div>
         </div>
       
 </>
   )
}

export default FaleConoscoMobile;