import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


export default class DisciplinasController {
  public async disciplinas(ctx: HttpContextContract) {

     
     let sql = 
      `select matdescricao, matprofessor, matcstatus, matc.aluid, mat.matid
      from "Disciplina" mat
      left join "DisciplinasCursada" matc on matc.matid = mat.matid
      where aluid = :codigo`; 

         //const records = await NcsPersistencia.executaQuery(  sql, ctx.params.id );
         const records = await Database.rawQuery(sql,  { codigo: ctx.params.id})

        // if( records.rowCount > 0 )
           // return records.rows[0];
           return records.rows
  }
}


