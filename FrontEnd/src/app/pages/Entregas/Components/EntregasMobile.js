import React, { useState } from "react";
import { Button, Modal} from "react-bootstrap";

//import Api from "../../../../services/Api";


const EntregasMobile = () => {

  const [est, setEst] = useState({estado: 'provas'})
  const [addShow, showAdd] = useState(false)
  const [arquivo, setArquivo] = useState()
  const [tipo, setTipo] = useState('Prova')
  const [materia, setMateria] = useState()



  const trabalhos = [
    {id: 1, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'entregue', matdescricao: '{matdescricao}'},
    {id: 2, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'perdido', matdescricao: '{matdescricao}'},
    {id: 3, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'faltando', matdescricao: '{matdescricao}'},
    {id: 4, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'entregue', matdescricao: '{matdescricao}'},
    {id: 5, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'perdido', matdescricao: '{matdescricao}'},
    {id: 6, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'faltando', matdescricao: '{matdescricao}'},
    {id: 7, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'entregue', matdescricao: '{matdescricao}'},
    {id: 8, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'faltando', matdescricao: '{matdescricao}'},
    {id: 9, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'entregue', matdescricao: '{matdescricao}'},
    {id: 10, trabdescricao: '{trabdescricao}', trabentrega: '{trabentrega}', trabstatus:'faltando', matdescricao: '{matdescricao}'},
 ]

 const provas = [
    {id:1, prodescricao: '{prodescricao}', proentrega: 'proentrega', matdescricao: '{matdescricao}', prostatus:'entregue'},
    {id:2, prodescricao: '{prodescricao}', proentrega: 'proentrega', matdescricao: '{matdescricao}', prostatus:'faltando'},
    {id:3, prodescricao: '{prodescricao}', proentrega: 'proentrega', matdescricao: '{matdescricao}', prostatus:'entregue'},
    {id:4, prodescricao: '{prodescricao}', proentrega: 'proentrega', matdescricao: '{matdescricao}', prostatus:'perdido'},
    {id:5, prodescricao: '{prodescricao}', proentrega: 'proentrega', matdescricao: '{matdescricao}', prostatus:'faltando'},
    {id:6, prodescricao: '{prodescricao}', proentrega: 'proentrega', matdescricao: '{matdescricao}', prostatus:'faltando'},
    {id:7, prodescricao: '{prodescricao}', proentrega: 'proentrega', matdescricao: '{matdescricao}', prostatus:'perdido'},
    {id:8, prodescricao: '{prodescricao}', proentrega: 'proentrega', matdescricao: '{matdescricao}', prostatus:'entregue'},
 ]


      return (
      <>

       

          <div className="col-12 pl-0 pr-0 ">
              <div className="card pl-0 pr-0">
              <div style={{height: '50px'}} className="card-header pt-0 pb-1 pl-3 pr-3 d-flex justify-content-between">
                        <h3 className="card-title font-weight-bolder mt-4">Entregas</h3>
                        <select style={{height: '30px', width: '100px'}} id="status" className="card-select-style mt-3" defaultValue="provas" onChange={(e) => {setEst({ ...est, estado: e.target.value })}} >
                           <option value='provas'>Provas</option>
                           <option value="trabalhos">Trabalhos</option>
                        </select>
                     </div>
                     <div className="card-body pt-2 mt-n3 pb-2 pl-2 pr-2 bg-secondary d-flex justify-content-between flex-wrap">
      {(est.estado === 'provas')? 
      provas.map(row => (
                        
                        <div key={row.id} className="card pl-0 pr-0 mt-3 mb-5 col-sm-12 col-md-6">
                                      <div style={{height: '20px'}} className="card-header pt-3 pl-3 pr-3 bg-info d-flex justify-content-between">
                                          <p className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.prodescricao}</p>
                                          <p className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.matdescricao}</p>
                                      </div>
                          <div className="pl-1 pt-4 pb-3">
                            <p className="text-dark-75 font-weight-bolder ml-1 mb-1 font-size-md">Data: {row.proentrega}</p>
                            <p className="text-dark-75 font-weight-bolder ml-1 mb-1 font-size-md">Status: {row.prostatus}</p>
                          </div>	
          
                          <div className=" d-flex justify-content-end pt-2 pb-2">
                              <button style={{width: '80px'}} onClick={() => {showAdd(true); setArquivo(row.prodescricao); setMateria(row.matdescricao); setTipo('prova')}} className="btn btn-info pb-2 mr-8 mb-2">Enviar</button>
                          </div>
                    </div>	              
          ))
      :
trabalhos.map(row => (
                    <div key={row.id} className="card pl-0 pr-0 mt-3 mb-5 col-sm-12 col-md-6">
                                  <div style={{height: '20px'}} className="card-header pt-3 pl-3 pr-3 bg-info d-flex justify-content-between">
                                      <p className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.trabdescricao}</p>
                                      <p className="text-dark-75 font-weight-bolder  mb-1 font-size-lg">{row.matdescricao}</p>
                                  </div>
                      <div className="pl-1 pt-4 pb-3">
                                      <p className="text-dark-75 font-weight-bolder ml-1 mb-1 font-size-md">Data: {row.trabentrega}</p>
                        <p className="text-dark-75 font-weight-bolder ml-1 mb-1 font-size-md">Status: {row.trabstatus}</p>
                      </div>	
      
                      <div className=" d-flex justify-content-end pt-2 pb-2">
                      <button style={{width: '80px'}} onClick={() => {showAdd(true); setArquivo(row.trabdescricao); setMateria(row.matdescricao); setTipo('trabalho')}} className="btn btn-info pb-2 mr-8 mb-2">Enviar</button>
                      </div>
                </div>	
      ))
}
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

export default EntregasMobile;