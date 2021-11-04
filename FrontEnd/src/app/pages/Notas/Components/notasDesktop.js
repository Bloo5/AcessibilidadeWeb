import React, { useEffect, useState } from "react";
import Api from "../../../../services/Api"

const NotaDesktop = () => {

    const  codigo =1
    const [ nota, setNota ]  = useState([]);
 
    useEffect(() => {
     const loadInfo = async () => {
         if( codigo ){
            const response = await Api.get(`/nota/2` );
            setNota(response.data)
         }
      }
       loadInfo()
    }, []);

 

    function calcMediaFinal (a,b,c,d,e) {
        var media1 = 0
        if ((a) && (b) && (d) && (e)){
           if(c){
            if (a>c){
                media1 = a+b
            } else {
                media1 = b+c
            } 
        } else media1= a+b
        return ((media1+d+e)/2) 
        }
        else return null
    }

    function calcMedia (a,b,c){
        if(c){
            if (a>c){
                return a+b
            } else {
                return b+c
            }   
        }else return a+b
    }



      return (

    <div className="col-12">
        <div style={{height: '450px'}}className="card">
        <div style={{height: '50px'}} className="card-header pt-0 pb-0 pl-3 pr-3 ">
                  <h3 className="card-title font-weight-bolder mt-4">Notas</h3>
               </div>
               <div className="card-body pt-2 pr-1 pl-1 pb-0 mt-n3">
			<div className="tab-content mt-5" id="myTabTables111">
				
				<div className="tab-pane fade show active" id="kt_tab_pane_11_3" role="tabpanel" aria-labelledby="kt_tab_pane_11_3">
				
					<div style={{height: '100%'}} className="table-responsive">
						<table id="tabela"  className="table table-striped table-hover table-bordered table-vertical-center">
							<thead>
								<tr className="bg-gray-100 text-left">
									<th className="min-w-150px">Disciplina</th>
									<th className="min-w-80px">Prova 1</th>
									<th className="min-w-100px">Trabalho 1</th>
									<th className="min-w-60px">Sub</th>
                                    <th className="min-w-100px">Media 1</th>
                                    <th className="min-w-80px">Prova 2</th>
									<th className="min-w-100px">Trabalho 2</th>
                                    <th className="min-w-80px">Media 2</th>
                                    <th className="min-w-100px">Media Total</th>
                                    <th className="min-w-100px">Situação</th>
								</tr>
							</thead>
							<tbody>
			
{nota.map(row => (

								 <tr>
									<td className="pl-1">
										<span className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.matdescricao}</span>
									</td>	{/* substr(row.vendedor, 0, 25) */}
									<td className="pl-1">
										<span className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.notprova1}</span>
									</td>	{/* {row.ped_data} */}
									<td className="pl-1">
										<span className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.nottrab1}</span>
									</td>
									<td className="pl-1">
										<span className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.notsub}</span>
									</td>
                                    <td className="pl-1">
										<span className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{calcMedia(row.notprova1, row.nottrab1, row.notsub)}</span>
									</td>
                                    <td className="pl-1">
										<span className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.notprova2}</span>
									</td>
                                    <td className="pl-1">
										<span className="text-dark-75 font-weight-bolder mb-1 font-size-lg">{row.nottrab2}</span>
									</td>
                                    <td className="pl-1">
										<span className="text-dark-75 font-weight-bolder mb-1 font-size-lg">{calcMedia(row.notprova2, row.nottrab2)}</span>
									</td>
                                    <td className="pl-1">
										<span className="text-dark-75 font-weight-bolder mb-1 font-size-lg">{calcMediaFinal(row.notprova1, row.nottrab1, row.notsub, row.notprova2, row.nottrab2 )}</span>
									</td>
                                    <td className="pl-1">
										<span className="text-dark-75 font-weight-bolder mb-1 font-size-lg">{row.matcstatus}</span>
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

export default NotaDesktop;