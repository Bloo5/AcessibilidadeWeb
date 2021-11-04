import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


export default class AulasController {
  public async aulas(ctx: HttpContextContract) {

     
      let sql =
      `select auid, mat.matid, matdescricao, aumidia, audescricao, autexto
      from "Aula" au
      left join "Disciplina" mat on au.matid = mat.matid
         where mat.matid = :codigo`;
     
         const records = await Database.rawQuery(sql,  { codigo: ctx.params.id})

        // if( records.rowCount > 0 )
           // return records.rows[0];
           return records.rows
  }
}
