import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


export default class AulasController {
  public async notas(ctx: HttpContextContract) {

     
      let sql =
      `select notid, matc.matcid, nottrab1 , notprova1 , notprova2 , nottrab2 , notsub, matcstatus, matdescricao, matc.matcid
      from "Nota" n
      left join "DisciplinasCursada" matc on matc.matcid = n.matcid 
      left join "Disciplina" mat on mat.matid = matc.matid
      where matc.aluid = :codigo`;
     
         const records = await Database.rawQuery(sql,  { codigo: ctx.params.id})
      

        // if( records.rowCount > 0 )
           // return records.rows[0];
           return records.rows
  }
}