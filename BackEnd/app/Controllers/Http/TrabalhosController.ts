import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


export default class AlunosController {
  public async trabalhos(ctx: HttpContextContract) {

     
      let sql =
      `select trabdescricao, matdescricao, trabstatus, trabentrega, matc.matcid,
      matc.aluid
      from "Trabalho" trab
      left join "DisciplinasCursada" matc on trab.matcid = matc.matcid 
      left join "Disciplina" mat on mat.matid = matc.matid
      where aluid = :codigo      
         `;
     
         //const records = await NcsPersistencia.executaQuery(  sql, ctx.params.id );
         const records = await Database.rawQuery(sql, {codigo: ctx.params.id} )
       
            return records.rows
  }
}
