import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Disciplina extends BaseModel {

   public static readonly _fieldMatId                 = 'matid';
   public static readonly _fieldMatDescricao                = 'matdescricao';
   public static readonly _fieldMatAlteracao                 = 'matalteracao';
   public static readonly _fieldMatExclusao                 = 'matexclusao';

   public static table = 'Disciplina';

   @column({isPrimary:true, columnName: 'matid', serializeAs: 'matid' })
   public MatId: number

   @column({ columnName: 'matdescricao', serializeAs: 'matdescricao' })
   public MatDescricao: string

   @column.dateTime({autoUpdate:true, columnName: 'matalteracao', serializeAs: 'matalteracao' })
   public MatAlteracao    : DateTime ;

   @column.dateTime({columnName: 'matexclusao', serializeAs: 'matexclusao' })
   public MatExclusao    : DateTime ;

   @column({ columnName: 'curid', serializeAs: 'curid' })
   public CurId : number

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Disciplina._fieldMatExclusao  )
   }
   
   public delete = async () => {
      this.MatExclusao = DateTime.local()
      await this.save()
   }


}
