import React, {  useState } from "react";
//import Api from "../../../../services/Api";
import { DataGrid } from '@mui/x-data-grid';
//import {  useParams } from "react-router-dom";


const Aulas = () => {
    const [estAula, setEstAula] = useState('fechado')
    const [estDescricao, setEstDescricao] = useState('fechado')
    const [midia, setMidia] = useState('aula1')
    const [descricao, setDescricao] = useState('{audescricao1}')



    const aulas = [
        {id: 1, auid:1, audescricao: '{audescricao1}', pronota: '{pronota}', aumidia: 'Aula1'},
        {id: 2, auid:2, audescricao: '{audescricao2}', pronota: '{pronota}', aumidia: 'Aula2'},
        {id: 3, auid:3, audescricao: '{audescricao3}', pronota: '{pronota}', aumidia: 'Aula3'},
        {id: 4, auid:4, audescricao: '{audescricao4}', pronota: '{pronota}', aumidia: 'Aula4'},
        {id: 5, auid:5, audescricao: '{audescricao5}', pronota: '{pronota}', aumidia: 'Aula5'},
        {id: 6, auid:6, audescricao: '{audescricao6}', pronota: '{pronota}', aumidia: 'Aula6'},
        {id: 7, auid:7, audescricao: '{audescricao7}', pronota: '{pronota}', aumidia: 'Aula7'},
        {id: 8, auid:8, audescricao: '{audescricao8}', pronota: '{pronota}', aumidia: 'Aula8'},
     ]

     const column = [
        { field: 'auid', headerName: 'ID', minWidth: 50,  flex: 1 , sortable: false},
        { field: 'audescricao', headerName: 'Nota', minWidth:100, flex: 2, sortable: false},
        { field: 'pronota', headerName: 'Assistir', minWidth:100, flex:2,  sortable: false,
        renderCell: (params) => (
            <>
           <button style={{width: '100%'}} className="btn btn-info" onClick={ () => {setMidia(params.row.aumidia); setDescricao(params.row.audescricao)}}>
           Ver aula
           </button>
           </>
           )
        },
     ]
//
return(
<>
       <div className="row">
            <div className="col-lg-8 pl-0 pr-0">
                <div  className="card card-custom card-stretch gutter-b">
                    <div style={{minHeight: '400px', maxHeight: '500px'}} className="card-body">
                        <img style={{height: '80%', width: '100%'}} src={`/media/aulas/${midia}.png`} alt="Minha Figura"></img>
                    </div>
                        {(estDescricao === 'aberto')? 
                            <div style={{height: '300px'}} className="card-footer">
                                <div style={{height: '50px'}} className="card-header pt-0 pb-2 pl-3 pr-3 d-flex justify-content-between">
                                    <h3 className="card-title font-weight-bolder">Descrição</h3>
                                    <div className="d-grid">
                                        <button className="btn btn-info mt-3 mb-3" style={{width: '100%'}} type="button" onClick={(e) => setEstDescricao('fechado')}>Esconder Descrição</button>
                                    </div>
                                </div>
                                <div className= "card-body pl-2 pr-2 pt-0 pb-2">
                                    <div>
                                        <p>
                                        {descricao}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        : 
                            <div style={{height: '100px'}} className="card-footer">
                                <div className="card-header border-0 pt-0 pb-2 pl-3 pr-3 d-flex justify-content-between">
                                    <h3 className="card-title font-weight-bolder">Descrição</h3>
                                    <div className="d-grid mb-3">
                                        <button className="btn btn-info mt-3 mb-3" style={{width: '100%'}} type="button" onClick={(e) => setEstDescricao('aberto')}>Mostrar Descrição</button>
                                    </div>
                                </div>
                            </div>
            }
                    </div>
                </div>
        

         <div className="col-lg-4">
            {(estAula === 'aberto')? 
                <div style={{height: '500px'}} className="card card-custom card-stretch gutter-b">
                    <div style={{height: '50px'}} className=" pt-2 pb-0 pl-3 pr-3 d-flex justify-content-between">
                        <h3 className="card-title font-weight-bolder mt-2">Aulas</h3>
                        <div className="d-grid">
                        <button className="btn btn-info mt-3" style={{width: '100%'}} type="button" onClick={(e) => setEstAula('fechado')}>Esconder Aulas</button>
                        </div>
                    </div>
                    <div className= "card-body pl-2 pr-2 pt-2 pb-2">
                        <div style={{height: '400px'}}>
                            <DataGrid
                                rows={aulas}
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
                    <div className=" border-0 pt-2   pb-0 pl-3 pr-3 d-flex justify-content-between">
                        <h3 className="card-title font-weight-bolder mt-2">Aulas</h3>
                        <div className="d-grid">
                            <button className="btn btn-info mt-3" style={{width: '100%'}} type="button" onClick={(e) => setEstAula('aberto')}>Mostrar Aulas</button>
                        </div>
                    </div>
                </div>
            }
            </div>
            </div>          
</>
   )
}

export default Aulas;