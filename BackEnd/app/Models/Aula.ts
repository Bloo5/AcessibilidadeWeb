import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Aula extends BaseModel {

   public static readonly _fieldAuId                  = 'auid';
   public static readonly _fieldAuDescricao           = 'audescricao';
   public static readonly _fieldAuMidia               = 'aumidia';
   public static readonly _fieldAuAlteracao           = 'aualteracao';
   public static readonly _fieldAuExclusao            = 'auexclusao';

   public static table = 'Aula';

   @column({isPrimary:true, columnName: 'auid', serializeAs: 'auid' })
   public AuId: number

   @column({ columnName: 'audescricao', serializeAs: 'audescricao' })
   public AuDescricao: string

   @column({ columnName: 'aumidia', serializeAs: 'aumidia' })
   public AuMidia: string

   @column.dateTime({autoUpdate:true, columnName: 'aualteracao', serializeAs: 'aualteracao' })
   public AuAlteracao    : DateTime ;

   @column.dateTime({ columnName: 'auexclusao', serializeAs: 'auexclusao' })
   public AuExclusao    : DateTime ;

   @column({ columnName: 'matid', serializeAs: 'matid' })
   public MatId : number

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Aula._fieldAuExclusao  )
   }
   
   public delete = async () => {
      this.AuExclusao = DateTime.local()
      await this.save()
   }


}
