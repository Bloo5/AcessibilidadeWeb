import React, { useEffect, useState } from "react";
import Api from "../../../../services/Api";
import { dateSet } from "../../../../services/Funcoes";

import { DataGrid } from '@mui/x-data-grid';



const PerfilTrabalhos = () => {

    const [est, setEst] = useState('fechado')
    const [ trabalho, setTrabalho ]  = useState([]);

    const codigo=1


    useEffect(() => {
      const loadInfo = async () => {
          if( codigo ){
             const response = await Api.get(`/trabalho/2` );
             console.log(response)
             addID(response.data)

             setTrabalho(response.data)
          }
       }
        loadInfo()
     }, []);

     function addID(a){
      var i=0
      a.forEach(function(object){
         object.id=i++;
      })
   }
   
   const column = [
      { field: 'trabdescricao', headerName: 'Descricao', minWidth: 100, sortable: false, flex: 2 },
      { field: 'trabentrega', headerName: 'Entrega', minWidth:100, flex: 1,
      valueFormatter: ({ value }) => dateSet(value) },
      { field: 'trabstatus', headerName: 'Status', minWidth:100, flex:1,
      renderCell: (params) => (
         <div>
         {(params.row.trabstatus=== 'entregue')?
                              <div style={{width: '100px'}} className="p-3 mb-3 bg-success text-white">  {params.row.trabstatus} </div>
                              : (params.row.trabstatus=== 'faltando')?
                              <div style={{width: '100px'}} className="p-3 mb-3 bg-warning text-white">  {params.row.trabstatus} </div>
                              : <div style={{width: '100px'}} className="p-3 mb-3 bg-danger text-white">  {params.row.trabstatus} </div>
      }
         </div>
          )
      },
   ]

      return (
         <div className="col-lg-5  pl-0 pl-lg-3 pr-0">
         {(est === 'aberto')? 
         <div style={{height: '350px'}} className="card card-custom card-stretch gutter-b">
         
               <div style={{height: '50px'}} className="card-header pt-0 pb-0 pl-3 pr-3 d-flex justify-content-between">
                  <h3 className="card-title font-weight-bolder">Trabalhos</h3>
                  <div className="d-grid">
                     <button className="btn btn-info mt-3" style={{width: '100%'}} type="button" onClick={(e) => setEst('fechado')}>Esconder Trabalhos</button>
                  </div>
               </div>
                  <div className= "card-body pl-2 pr-2 pt-0 pb-2">
                  <div style={{height: '250px'}}>
                        <DataGrid
                           rows={trabalho}
                           columns={column}
                           pageSize={10}
                           rowsPerPageOptions={[10]}
                           disableColumnFilter
                           disableColumnMenu
                           hideFooter={true}
                           headerHeight={20}
                        />
                        </div>
                        </div>
                        </div>
                     : 
                     <div style={{height: '100px'}} className="card card-custom card-stretch gutter-b">
         
                     <div className="card-header border-0 pt-0 pb-0 pl-3 pr-3 d-flex justify-content-between">
                           <h3 className="card-title font-weight-bolder">Trabalhos</h3>
                           <div className="d-grid">
                                    <button className="btn btn-info mt-3" style={{width: '100%'}} type="button" onClick={(e) => setEst('aberto')}>Mostrar Trabalhos</button>
                                 </div>
                           </div>
                        </div>
                     }
                     
                  </div>
               
      );
   
   
}

export default PerfilTrabalhos;