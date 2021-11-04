import React, { useEffect, useState } from "react";
import Api from "../../services/Api"



export function DashboardPage() {

  const [ menu, setMenu ]  = useState([]);
  const codigo=1

  useEffect(() => {
   const loadInfo = async () => {
       if( codigo ){
          const infvar = await Api.get(`/menu/2` );
          const geralvar = await Api.get(`/geral` );
        setMenu(groupapi(infvar.data, geralvar.data))
       }
    }
     loadInfo()
  }, []);

  function groupapi(a,b){
    var i=0

 a = a.concat(b)
 a.forEach(function(object){
  object.id=i++;
})
return a
}




  return(
    <div className="col-12 pl-0 pr-0 ">
              <div className="card pl-0 pr-0">
              <div style={{height: '50px'}} className="card-header pt-0 pb-1 pl-3 pr-3 d-flex justify-content-between">
                        <h3 className="card-title font-weight-bolder mt-4">Informativos</h3>
                     </div>
                     <div className="card-body pt-2 mt-n3 pb-2 pl-2 pr-2 bg-secondary d-flex justify-content-between flex-wrap">

      {menu.map(row => (
                        
                        <div style={{Width: '300px'}} key={row.id} className="card pl-0 pr-0 mt-3 mb-5 col-sm-12">
                                      <div className="card-header pt-2 pb-1 pl-3 pr-3 bg-success d-flex justify-content-between">
                                          <span className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.infdescricao}</span>
                                          <span className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{(row.matdescricao)? row.matdescricao : row.curdescricao}</span>
                               </div>
                          <div  className="pl-1 pt-4 pb-3">
                            <p className="text-dark-75 font-weight-bolder ml-1 mb-1 font-size-md"> {row.inftexto}</p>
                          </div>	
                    </div>	              
          ))
}
                   
                  
              </div>
          </div>
          </div> 
          
  );
  
}
