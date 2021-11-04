import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Trabalho extends BaseModel {

   public static readonly _fieldTrabId                  = 'trabid';
   public static readonly _fieldTrabDescricao           = 'trabdescricao';
   public static readonly _fieldTrabAlteracao           = 'trabalteracao';
   public static readonly _fieldTrabExclusao            = 'trabexclusao';
   public static readonly _fieldTrabEntrega             = 'trabentrega';
   public static readonly _fieldTrabStatus              = 'trabstatus';



   public static table = 'Trabalho';

   @column({isPrimary:true, columnName: 'trabid', serializeAs: 'trabid' })
   public TrabId: number

   @column({ columnName: 'trabdescricao', serializeAs: 'trabdescricao' })
   public TrabDescricao: string

   @column.dateTime({autoUpdate:true, columnName: 'trabalteracao', serializeAs: 'trabalteracao' })
   public TrabAlteracao    : DateTime ;

   @column.dateTime({ columnName: 'trabexclusao', serializeAs: 'trabexclusao' })
   public TrabExclusao    : DateTime ;
   
   @column.dateTime({columnName: 'trabentrega', serializeAs: 'trabentrega' })
   public TrabEntrega    : DateTime ;

   @column({ columnName: 'trabstatus', serializeAs: 'trabstatus' })
   public TrabStatus: string

   @column({ columnName: 'matcid', serializeAs: 'matcid' })
   public MatCId : number

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Trabalho._fieldTrabExclusao  )
   }
   
   public delete = async () => {
      this.TrabExclusao = DateTime.local()
      await this.save()
   }


}
