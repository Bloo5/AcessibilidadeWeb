import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Informativo extends BaseModel {

   public static readonly _fieldInfId                  = 'infid';
   public static readonly _fieldInfDescricao           = 'infdescricao';
   public static readonly _fieldInfTexto               = 'inftexto';
   public static readonly _fieldInfAlteracao           = 'infalteracao';
   public static readonly _fieldInfExclusao            = 'infexclusao';

   public static table = 'Informativo';

   @column({isPrimary:true, columnName: 'infid', serializeAs: 'infid' })
   public InfId: number

   @column({ columnName: 'infdescricao', serializeAs: 'infdescricao' })
   public InfDescricao: string

   @column({ columnName: 'inftexto', serializeAs: 'inftexto' })
   public InfTexto: string

   @column.dateTime({autoUpdate:true, columnName: 'infalteracao', serializeAs: 'infalteracao' })
   public InfAlteracao    : DateTime ;

   @column.dateTime({columnName: 'infexclusao', serializeAs: 'infexclusao' })
   public InfExclusao    : DateTime ;

   @column({ columnName: 'matid', serializeAs: 'matid' })
   public MatId : number

   @column({ columnName: 'curid', serializeAs: 'curid' })
   public CurId : number

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Informativo._fieldInfExclusao  )
   }
   
   public delete = async () => {
      this.InfExclusao = DateTime.local()
      await this.save()
   }


}
