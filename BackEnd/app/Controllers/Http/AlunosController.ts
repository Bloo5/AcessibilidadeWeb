import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


export default class AlunosController {
  public async alunos(ctx: HttpContextContract) {

     
      let sql =
      `select usunome, aluid, usucidade, usufederacao, usucelular, usutelefone,
      usuemail, alurg, alucpf
      from "Usuario" usu
        left join "Alunos" alu on alu.usuid = usu.usuid
        where aluid = :codigo
         `;
     
         //const records = await NcsPersistencia.executaQuery(  sql, ctx.params.id );
         const records = await Database.rawQuery(sql, {codigo: ctx.params.id} )
       
         if( records.rowCount > 0 )
            return records.rows[0];
  }
}
