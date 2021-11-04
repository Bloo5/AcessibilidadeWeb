import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


export default class ProvasController {
  public async provas(ctx: HttpContextContract) {

     let sql = 
      `select prodescricao, matdescricao, prostatus, prodata, matc.matcid, matc.aluid
      from "Prova" pro
      left join "DisciplinasCursada" matc on pro.matcid = matc.matcid
      left join "Disciplina" mat on mat.matid = matc.matid
      where aluid = :codigo`;
 
     
         //const records = await NcsPersistencia.executaQuery(  sql, ctx.params.id );
         const records = await Database.rawQuery(sql,  { codigo: ctx.params.id})
       
        // if( records.rowCount > 0 )
           // return records.rows[0];
           return records.rows
  }
}

  