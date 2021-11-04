import React, { useEffect, useState } from "react";
import Api from "../../../../services/Api"
//import { useParams } from "react-router-dom";
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

    <div className="col-12">
        <div className="card pl-0 pr-0">
        <div style={{height: '50px'}} className="card-header pt-0 pb-0 pl-3 pr-3 ">
                  <h3 className="card-title font-weight-bolder mt-4">Matérias</h3>
               </div>
               <div className="card-body pt-2 mt-n3 pr-2 pl-2 pb-2">
			<div className="tab-content mt-5">
				
				<div className="tab-pane fade show active" role="tabpanel">
				
					<div className="table-responsive">
						<table id="tabela"  className="table table-striped table-hover  table-vertical-center">
							<tbody>
				
{materia.map(row => (

								 <tr key={row.matid} className="d-flex justify-content-between">
									<td className="pl-1">
										<p className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">Matéria: {row.matdescricao}</p>
                                        <p className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">Professor(a): {row.matprofessor}</p>
										<p className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">Status: {row.matcstatus}</p>
									</td>	

									<td style={{width: '410px'}} className="pl-1 pr-10 d-flex justify-content-between">
										<a style={{width: '150px', height: '45px'}} href={`/materias/aulas/${row.matid}`} className="btn btn-info mt-4 "><span className="align-middle">Aulas</span></a>
                                        <a style={{width: '150px', height: '45px'}}href={`/materias/documentos/${row.matid}`} className="btn btn-info mt-4 "><span className="align-middle">Documentos</span></a>
									</td>
									
								</tr> 
))}
							</tbody>
						</table>
						
					</div>
				
				</div>
			
			</div>
		</div>
        </div>
    </div>
      );
}

export default MateriaDesktop;