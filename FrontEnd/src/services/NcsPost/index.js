// import axios from "axios";

// // axios.defaults.baseURL = 'http://10.1.1.27:3333/api';

// const ncsApiPost = axios.create({
//     baseURL: "http://10.1.1.27:8080",
//     auth: { username: "0c40248eeeff630d421291f8170075ac753d3abf", password: "" }
//   });

// export default {
// //Pesquisa para Produto.js. Trazendo todos os produtos da tabela com limite.
//   ncsPost:  (setProduto, txt, filtros, rLimit, setRTotal) => {
//     ncsApiPost.post("/TtableProduto/busca",{ 
//       pagination: {
//         rowStart: 0,
//         rows: rLimit
//       },
//       filters: filtros 
//     })
//     .then( function ( response ){
//       let produtos = response.data.data;
//       let totalProd = response.data.recordsTotal;
//       setRTotal(totalProd);
//       setProduto(produtos);
//     //  console.log('Deu Bom',produtos);
//     //  console.log('Deu Bom não',filtros);
//     })
//     .catch( function ( response){console.log( 'Deu ruim na ncsPost 2', response );});
//   }
// }