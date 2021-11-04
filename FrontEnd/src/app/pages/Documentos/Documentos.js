import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
//import Api from "../../../../services/Api";

const MateriaDesktop = () => {

    const [est, setEst] = useState({estado: 'todos'})
    const [livro, setLivro] = useState([])
    const [pdf, setPDF] = useState([])
    const [powerpoint, setPowerPoint] = useState([])
    const [Outros, setOutros] = useState([])


    
   useEffect(() => {
    const documentos = [
      {id: 1, aqtipo: 'pdf', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 2, aqtipo: 'livro', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 3, aqtipo: 'powerpoint', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 4, aqtipo: 'livro', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 5, aqtipo: 'livro', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 7, aqtipo: 'pdf', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 8, aqtipo: 'pdf', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 9, aqtipo: 'powerpoint', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 10, aqtipo: 'powerpoint', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
      {id: 11, aqtipo: 'imagem', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
   ]
        loadBonusNum(documentos)
   }, []);



    const column =[   
      { field: 'aqdescricao', headerName: 'Nome', minWidth: 100, sortable: false, flex: 2 },
        { field: 'aqtipo', headerName: 'Tipo', minWidth:100, flex: 1},
      { field: 'aqinclusao', headerName: 'Data', minWidth:100, flex: 1},
      { field: '', headerName: '', minWidth:100, flex:1, sortable: false,
      renderCell: (params) => (
        <button className="btn btn-info mt-2 mb-1" style={{width: '100%'}} type="button">Download</button>
          )
      },
    ]

    const documentos = [
        {id: 1, aqtipo: 'pdf', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 2, aqtipo: 'livro', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 3, aqtipo: 'powerpoint', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 4, aqtipo: 'livro', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 5, aqtipo: 'livro', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 7, aqtipo: 'pdf', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 8, aqtipo: 'pdf', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 9, aqtipo: 'powerpoint', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 10, aqtipo: 'powerpoint', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
        {id: 11, aqtipo: 'imagem', aqdescricao: '{aqdescricao}', aqinclusao: '{aqinclusao}'},
     ]

     function loadBonusNum(array){
      var i = 0;
      var liv = []
      var pd = []
      var pp = []
      var ou= []

      array.forEach(function(object){
          i++
          if(object.aqtipo === 'livro'){
              object.id=i
              liv.push(object)
          } else if (object.aqtipo === 'pdf'){
              object.id=i
              pd.push(object)
          } else if (object.aqtipo === 'powerpoint'){
            object.id=i
            pp.push(object)
        } else {
          object.id=i
          ou.push(object)
        }
      })
      setLivro(liv)
      setPDF(pd)
      setPowerPoint(pp)
      setOutros(ou)
  }


      return (

    <div className="col-12 p-0">
        <div className="card pl-0 pr-0">
        <div style={{height: '50px'}} className="card-header pt-0 pb-0 pl-3 pr-3 d-flex justify-content-between ">
                  <h3 className="card-title font-weight-bolder mt-4">Documentos</h3>
                  <select style={{height: '30px', width: '100px'}} id="status" className="card-select-style mt-3" onChange={(e) => {setEst({ ...est, estado: e.target.value })}} >
                           <option value="todos" selected>Todos</option>
                           <option value="livro">Livros</option>
                           <option value="pdf">PDF</option>
                           <option value="powerpoint">PowerPoint</option>
                           <option value="outros">Outros</option>
                        </select>
               </div>
               <div className="card-body pt-2 mt-n3 pr-2 pl-2 pb-2">
			<div style={{height: '500px'}} className="tab-content mt-5">
                {(est.estado === 'todos')? 
                    <DataGrid
                       rows={documentos}
                       columns={column}
                       pageSize={10}
                       rowsPerPageOptions={[10]}
                       disableColumnFilter
                       disableColumnMenu
                       hideFooter={true}
                       headerHeight={20}
                    />

            : (est.estado === 'livro')?
                    <DataGrid
                       rows={livro}
                       columns={column}
                       pageSize={10}
                       rowsPerPageOptions={[10]}
                       disableColumnFilter
                       disableColumnMenu
                       hideFooter={true}
                       headerHeight={20}
                    />
            : (est.estado === 'powerpoint')?
            <DataGrid
            rows={powerpoint}
            columns={column}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableColumnFilter
            disableColumnMenu
            hideFooter={true}
            headerHeight={20}/>
            : (est.estado === 'pdf')?
            <DataGrid
            rows={pdf}
            columns={column}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableColumnFilter
            disableColumnMenu
            hideFooter={true}
            headerHeight={20}/>
            :
            <DataGrid
            rows={Outros}
            columns={column}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableColumnFilter
            disableColumnMenu
            hideFooter={true}
            headerHeight={20}/>
            }
			        
			</div>
		</div>
        </div>
    </div>
      
    

      );
   
   
}

export default MateriaDesktop;