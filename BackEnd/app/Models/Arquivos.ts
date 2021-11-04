import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Arquivos extends BaseModel {

   public static readonly _fieldAqId                 = 'aqid';
   public static readonly _fieldAqDescricao                 = 'aqdescricao';
   public static readonly _fieldAqMatId                 = 'aqmatid';
   public static readonly _fieldAqCaminho                 = 'aqcaminho';
   public static readonly _fieldAqAlteracao                 = 'aqalteracao';
   public static readonly _fieldAqExclusao                 = 'aqexclusao';

   public static table = 'arquivos';

   @column({isPrimary:true, columnName: 'aqid', serializeAs: 'aqid' })
   public AqId: number

   @column({ columnName: 'aqdescricao', serializeAs: 'aqdescricao' })
   public AqDescricao: string

   @column({ columnName: 'aqcaminho', serializeAs: 'aqcaminho' })
   public AqCaminho: string

   @column.dateTime({autoUpdate:true, columnName: 'aqalteracao', serializeAs: 'aqalteracao' })
   public AqAlteracao    : DateTime ;

   @column.dateTime({columnName: 'aqexclusao', serializeAs: 'aqexclusao' })
   public AqExclusao    : DateTime ;

   @column({ columnName: 'matid', serializeAs: 'matid' })
   public MatId : number

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Arquivos._fieldAqExclusao  )
   }
   
   public delete = async () => {
      this.AqExclusao = DateTime.local()
      await this.save()
   }


}
