import React, { useEffect, useState } from "react";
import Api from "../../../../services/Api"
import "./style.css"


const MateriaDesktop = () => {

    

    const  codigo =1
    const [ materia, setMateria ]  = useState([]);
 
    useEffect(() => {
     const loadInfo = async () => {
         if( codigo ){
            const response = await Api.get(`/materia/2` );
            setMateria(response.data)
         }
      }
       loadInfo()
    }, []);



      return (

    <div className="col-12 pl-0 pr-0 ">
        <div className="card pl-0 pr-0">
        <div style={{height: '50px'}} className="card-header pt-0 pb-0 pl-3 pr-3 ">
                  <h3 className="card-title font-weight-bolder mt-4">Matérias</h3>
               </div>
               <div className="card-body pt-2 mt-n3 pb-2 pl-2 pr-2 bg-secondary d-flex justify-content-between flex-wrap">
			
				
	
				
{materia.map(row => (
                  
					    <div key={row.matid} className="card pl-0 pr-0 mt-3 mb-5 col-sm-12 col-md-6">
                            <div style={{height: '20px'}} className="card-header pt-0 pb-0 pl-3 pr-3 bg-info">
                                <p style={{color: 'white'}} className="font-weight-bolder mb-1 font-size-lg">{row.matdescricao}</p>
                            </div>
						    <div className="pl-1 pt-4 pb-3">
                                <p className="text-dark-75 font-weight-bolder ml-1 mb-1 font-size-md">Professor(a): {row.matprofessor}</p>
							    <p className="text-dark-75 font-weight-bolder ml-1 mb-1 font-size-md">Status: {row.matcstatus}</p>
						    </div>	

						    <div className=" d-flex justify-content-around pt-2 pb-2">
						        <a style={{width: '80px'}} href={`/materias/aulas/${row.matid}`} className="btn btn-info pb-2 ">Aulas</a>
                                <a style={{width: '80px'}}href={`/materias/documentos/${row.matid}`}className="btn btn-info p-0 pt-2"><span style={{fontSize: '10px'}} className="align-middle">Documentos</span></a>
						    </div>
					</div>	
                   			
								
))}
						
        </div>
    </div>
    </div> 
    

      );
   
   
}

export default MateriaDesktop;