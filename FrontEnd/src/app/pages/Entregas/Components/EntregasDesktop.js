import React, { useEffect, useState } from "react";
import Api from "../../../../services/Api";
import { DataGrid } from '@mui/x-data-grid';
import { dateSet } from "../../../../services/Funcoes";

import { Button, Modal} from "react-bootstrap";

//import ncsApi from "../../../../services/ncsApi";

const EntregasDesktop = () => {

    const [est, setEst] = useState({estado: 'provas'})
    const [addShow, showAdd] = useState(false)
    const [trabalho, setTrabalho] = useState([])
    const [prova, setProva] = useState([])
    const [arquivo, setArquivo] = useState()
    const [tipo, setTipo] = useState('Prova')
    const [materia, setMateria] = useState()
    const codigo = 1

    useEffect(() => {
      const loadProva = async () => {
          if( codigo ){
             const response = await Api.get(`/prova/2` );
             addID(response.data)
             setProva(response.data)
          }
       }

       const loadTrabalho = async () => {
        if( codigo ){
           const response = await Api.get(`/trabalho/2` );
           addID(response.data)
           setTrabalho(response.data)
        }
     }
        loadTrabalho()
        loadProva()
     }, []);
 
     function addID(a){
       var i=0
       a.forEach(function(object){
          object.id=i++;
       })
    }
   
    const columntrabalho =[   
        { field: 'trabdescricao', headerName: 'Nome', minWidth: 100, sortable: false, flex: 1 },
          { field: 'matdescricao', headerName: 'Matéria', minWidth:100, flex: 1},
          { field: 'trabentrega', headerName: 'Data de Entrega', minWidth:100, flex: 1,
          valueFormatter: ({ value }) => dateSet(value) },
        { field: 'trabstatus', headerName: 'Status', minWidth:100, flex: 1},
        { field: '', headerName: '', minWidth:100, flex:1, sortable: false,
        renderCell: (params) => (
          <>
          <button className="btn btn-info mt-2 mb-1" onClick={() => {showAdd(true); setTipo('Trabalho'); setArquivo(params.row.trabdescricao); setMateria(params.row.matdescricao)}} style={{width: '100%'}} type="button">Upload</button>
           </> 
            )
        },
      ]


    const columnprova =[
      { field: 'prodescricao', headerName: 'Nome', minWidth: 100, sortable: false, flex: 1 },
        { field: 'matdescricao', headerName: 'Matéria', minWidth:100, flex: 1},
        { field: 'prodata', headerName: 'Data de Entrega', minWidth:100, flex: 1,
        valueFormatter: ({ value }) => dateSet(value) },
      { field: 'prostatus', headerName: 'Status', minWidth:100, flex: 1},
      { field: '', headerName: '', minWidth:100, flex:1, sortable: false,
      renderCell: (params) => (
        <>
        <button className="btn btn-info mt-2 mb-1" onClick={() => {showAdd(true); setTipo('Prova'); setArquivo(params.row.prodescricao); setMateria(params.row.matdescricao)}} style={{width: '100%'}} type="button">Upload</button>
         </>
          )
      },
    ]



      return (
<>
    <div className="col-12 p-0">
        <div className="card pl-0 pr-0">
        <div style={{height: '50px'}} className="card-header pt-0 pb-0 pl-3 pr-3 d-flex justify-content-between ">
                  <h3 className="card-title font-weight-bolder mt-4">Entregas</h3>
                  <select style={{height: '30px', width: '100px'}} id="status" className="card-select-style mt-3" onChange={(e) => {setEst({ ...est, estado: e.target.value })}} >
                           <option value="provas">Provas</option>
                           <option value="trabalhos">Trabalhos</option>
                        </select>
               </div>
               <div className="card-body pt-2 mt-n3 pr-2 pl-2 pb-2">
			<div style={{height: '500px'}} className="tab-content mt-5">
                {(est.estado === 'provas')? 
                    <DataGrid
                       rows={prova}
                       columns={columnprova}
                       pageSize={10}
                       rowsPerPageOptions={[10]}
                       disableColumnFilter
                       disableColumnMenu
                       hideFooter={true}
                       headerHeight={20}
                    />
            :
                    <DataGrid
                       rows={trabalho}
                       columns={columntrabalho}
                       pageSize={10}
                       rowsPerPageOptions={[10]}
                       disableColumnFilter
                       disableColumnMenu
                       hideFooter={true}
                       headerHeight={20}
                    />
            }
			        
			</div>
		</div>
        </div>
    </div>
      
      <Modal show={addShow} onHide={() => showAdd(false)} className="modal-dialog-scrollable">
      <Modal.Header className="pb-0 pt-1 pr-0">
        <span>Enviar Arquivo</span>
        <Button variant="link" onClick={() => showAdd(false)}><i style={{fontSize: '1.3rem', color: 'black'}} className="fa fa-times" aria-hidden="true"></i></Button>
      </Modal.Header>
      <Modal.Body className=" pb-3 pl-3 pr-3">
        <span className="mt-2 pt-2">{tipo}: {arquivo}</span>
        <br/>
        <span className="mt-2 pt-2">Matéria: {materia}</span>

      </Modal.Body>
      <Modal.Footer>
      <div className="input-group d-flex justify-content-between">
        <input type="file" accept="file/*" className="btn btn-secondary" multiple="multiple" ></input>
          <button id="uploadbutton" style={{display: 'block'}} type='button' className="btn btn-success float-right mt-1">UPLOAD</button>
          <button id="loading" style={{display: 'none'}} className="btn btn-success float-right mt-1" type="button" disabled>
              <span className="spinner-border spinner-border-sm"  role="status" aria-hidden="true"></span>
              <span className="ml-2">UPLOAD</span>
          </button>
           </div>
      </Modal.Footer>
  </Modal>
</>
      );
   
   
}

export default EntregasDesktop;