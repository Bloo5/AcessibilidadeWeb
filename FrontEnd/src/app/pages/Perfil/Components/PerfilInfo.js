import React, { useEffect, useState } from "react";
import Api from "../../../../services/Api"

//import { useParams } from "react-router-dom";//import ncsApi from "../../../../services/ncsApi";


const PerfilInfo = () => {

   const codigo = 1;
   const [ info, setInfo ]  = useState({});

   useEffect(() => {
    const loadInfo = async () => {
        if( codigo ){
           const response = await Api.get(`/aluno/2` );
           setInfo(response.data)
        }
     }
      loadInfo()
   }, []);

      return (

         <div className="col-lg-7 pl-0 pr-0">
         <div style={{height: '280px'}} className="card card-custom card-stretch gutter-b">
             <div className="card-body">
               
                 <div className="d-flex mb-9">
                 
                     <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                         <div className="symbol symbol-50 symbol-lg-120">
                            
                               {/*{image()} */}
                               <img src="/media/users/blank.png" alt="foto de usuario" />
                         
                         </div>
                         <div className="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                             <span className="font-size-h3 symbol-label font-weight-boldest"></span>
                         </div>
                     </div>
                     <div className="flex-grow-1">
                      
                         <div className="d-flex justify-content-between flex-wrap mt-1">
                             <div className="d-flex mr-3">
                                 <span className="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">{info.usunome} - R.A: {info.aluid}</span>
                             </div>
                         </div>
                      
                         <div className="d-flex flex-wrap justify-content-between mt-1">
                             <div className="d-flex flex-column flex-grow-1 pr-8">

                             <span  className="text-dark-75 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                 <i className="flaticon2-placeholder mr-2 font-size-lg"></i> {info.usucidade} - {info.usufederacao}</span>
                                 
                                 <span  className="text-dark-75 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                 <i className="flaticon-whatsapp mr-2 font-size-lg"></i> {info.usucelular}</span>
         
                                 <span href="#" className="text-dark-75 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                 <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                 </svg> {info.usutelefone}</span>

                                 <span href="#" className="text-dark-75 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                 <i className="flaticon-multimedia-2 mr-2 font-size-lg"></i>{info.usuemail}</span>

                                 <span href="#" className="text-dark-75 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                                 <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                 <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                                 </svg> CPF: {info.alucpf} - RG: {info.alurg}</span>

                    
                                 
                             </div>
                         </div>
                      
                     </div>
                
                 </div>
              
            
            
                
               
             </div>
         </div>
         </div>
      
      );
   
   
}

export default PerfilInfo;