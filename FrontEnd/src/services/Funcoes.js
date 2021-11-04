import {format} from 'date-fns';


export function dateSet(datanf) {
    if(datanf){
    const data = new Date (datanf)
  const dataf = format(data, "dd'/'MM'/'yyyy")
  return dataf
    }
    
 }