import axios from "axios";

const ncsApii = axios.create({
    baseURL: "http://10.1.1.27:8080",
    auth: { username: "0c40248eeeff630d421291f8170075ac753d3abf", password: "" }
  });

export default {
   ncsGet: async (numb, setProduto) => {
      await ncsApii.get(`/TtableProduto/${numb}`)
      .then(function ( response){
         setProduto(response.data);
         // console.log(response.data);
      })
   }
}