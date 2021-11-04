import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


export default class InformativosController {
  public async informativos(ctx: HttpContextContract) {

      let sql = 
      `select infdescricao, matdescricao, inftexto, mat.matid, cur.curid, curdescricao
      from "Informativo" inf 
      left join "Disciplina" mat on mat.matid = inf.matid 
      left join "Curso" cur on cur.curid = inf.curid
      left join "DisciplinasCursada" matc on matc.matid = mat.matid  
      where matc.aluid = :codigo`;

      const records = await Database.rawQuery(sql,  { codigo: ctx.params.id})
       
      return records.rows
}


  public async geral() {

      let sql = 
      `select infdescricao,  inftexto, cur.curid, curdescricao
      from "Informativo" inf
      left join "Curso" cur on cur.curid = inf.curid 
      where cur.curid =3`;

      const records = await Database.rawQuery(sql)
       
      return records.rows
}
}
