import React, { useEffect, useState } from "react";
import Api from "../../../../services/Api";
import { dateSet } from "../../../../services/Funcoes";
   import { DataGrid } from '@mui/x-data-grid';


   const PerfilProva = () => {
      const [est, setEst] = useState('fechado')
      const [ prova, setProva ]  = useState([]);
      const codigo=1

      useEffect(() => {
       const loadInfo = async () => {
           if( codigo ){
              const response = await Api.get(`/prova/2` );
              addID(response.data)
              setProva(response.data)
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
         { field: 'prodescricao', headerName: 'Descricao', minWidth: 100, sortable: false, flex: 2 },
         { field: 'prodata', headerName: 'Data', minWidth:100, flex: 1,
         valueFormatter: ({ value }) => dateSet(value) },
         { field: 'prostatus', headerName: 'Status', minWidth:100, flex:1,
         renderCell: (params) => (
            <div>
            {(params.row.prostatus=== 'entregue')?
                                 <div style={{width: '100px'}} className="p-3 mb-3 bg-success text-white">  {params.row.prostatus} </div>
                                 : (params.row.prostatus=== 'faltando')?
                                 <div style={{width: '100px'}} className="p-3 mb-3 bg-warning text-white">  {params.row.prostatus} </div>
                                 : <div style={{width: '100px'}} className="p-3 mb-3 bg-danger text-white">  {params.row.prostatus} </div>
         }
            </div>
            )
         },
      ]

         return (
   <div className="col-lg-5 pl-0 pl-lg-3 pr-0">
   {(est === 'aberto')? 
   <div style={{height: '280px'}} className="card card-custom card-stretch gutter-b">
   
         <div style={{height: '50px'}} className="card-header pt-0 pb-0 pl-3 pr-3 d-flex justify-content-between">
            <h3 className="card-title font-weight-bolder">Provas</h3>
            <div className="d-grid">
               <button className="btn btn-info mt-3" style={{width: '100%'}} type="button" onClick={(e) => setEst('fechado')}>Esconder Provas</button>
            </div>
         </div>
            <div className= "card-body pl-2 pr-2 pt-0 pb-2">
            <div style={{height: '180px'}}>
                  <DataGrid
                     rows={prova}
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
                     <h3 className="card-title font-weight-bolder">Provas</h3>
                     <div className="d-grid">
                              <button className="btn btn-info mt-3" style={{width: '100%'}} type="button" onClick={(e) => setEst('aberto')}>Mostrar Provas</button>
                           </div>
                     </div>
                  </div>
               }
               
            </div>
         
         );
      
      
   }

   export default PerfilProva;

   /* <table id="table" style={{height: '250px'}} className="table table-vertical-center table-responsive">
                     <thead>
                        <tr className="bg-gray-100 text-left">
                           <th className="min-w-250px"> Descrição</th>
                           <th className="min-w-80px">  Entrega</th>
                           <th className="min-w-50px">  Status</th>
                        </tr>
                     </thead>
                        <tbody>
                        {rows.map(row => (
                           <tr>
                              <td className="text-left">
                                 <span className="text-dark-75 font-weight-bolder text-hover-info mb-1 font-size-lg">{row.prodescricao}</span>
                              </td>
                              <td className="text-left">
                                 <span className="text-dark-75 font-weight-bolder font-size-lg">{row.pronota} </span>
                              </td>
                              <td className="text-left">
                                 {(row.prostatus=== 'entregue')?
                                 <div className="p-3 mb-3 bg-success text-white">  {row.prostatus} </div>
                                 : (row.prostatus=== 'faltando')?
                                 <div className="p-3 mb-3 bg-warning text-white">  {row.prostatus} </div>
                                 : <div className="p-3 mb-3 bg-danger text-white">  {row.prostatus} </div>
                                 }
                                 
                              </td>
                           </tr> 
                        ))}
                        </tbody>
                     </table> */