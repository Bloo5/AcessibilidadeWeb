import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Api from "../../../../services/Api";

const PerfilMateria = () => {

    const [est, setEst] = useState('fechado')
    const [ materia, setMateria ]  = useState([]);
    const codigo=1

    useEffect(() => {
     const loadInfo = async () => {
         if( codigo ){
            const response = await Api.get(`/materia/2` );
            addID(response.data)
            setMateria(response.data)
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
    { field: 'matdescricao', headerName: 'Descricao', minWidth: 100, sortable: false, flex: 2 },
    { field: 'matprofessor', headerName: 'Professor', minWidth:100, flex: 1},
    { field: 'matcstatus', headerName: 'Status', minWidth:100, flex:1,
    renderCell: (params) => (
       <div>
       {(params.row.matcstatus=== 'aprovado')?
                            <div style={{width: '100px'}} className="p-3 mb-3 bg-success text-white">  {params.row.matcstatus} </div>
                            : (params.row.matcstatus=== 'cursando')?
                            <div style={{width: '100px'}} className="p-3 mb-3 bg-warning text-white">  {params.row.matcstatus} </div>
                            : <div style={{width: '100px'}} className="p-3 mb-3 bg-danger text-white">  {params.row.matcstatus} </div>
    }
       </div>
        )
    },
 ]

      return (
         <div className="col-lg-7 pl-0 pr-0">
         {(est === 'aberto')? 
         <div style={{height: '350px'}} className="card card-custom card-stretch gutter-b">
         
               <div style={{height: '50px'}} className="card-header pt-0 pb-0 pl-3 pr-3 d-flex justify-content-between">
                  <h3 className="card-title font-weight-bolder">Matérias</h3>
                  <div className="d-grid">
                     <button className="btn btn-info mt-3" style={{width: '100%'}} type="button" onClick={(e) => setEst('fechado')}>Esconder Provas</button>
                  </div>
               </div>
                  <div className= "card-body pl-2 pr-2 pt-0 pb-2">
                  <div style={{height: '250px'}}>
                        <DataGrid
                           rows={materia}
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
                           <h3 className="card-title font-weight-bolder">Matérias</h3>
                           <div className="d-grid">
                                    <button className="btn btn-info mt-3" style={{width: '100%'}} type="button" onClick={(e) => setEst('aberto')}>Mostrar Matérias</button>
                                 </div>
                           </div>
                        </div>
                     }
                     
                  </div>
      );
   
   
}

export default PerfilMateria;