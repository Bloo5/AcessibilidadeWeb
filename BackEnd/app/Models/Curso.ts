import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Curso extends BaseModel {

   public static readonly _fieldCurId                  = 'curid';
   public static readonly _fieldCurDescricao           = 'curdescricao';
   public static readonly _fieldCurAlteracao           = 'curalteracao';
   public static readonly _fieldCurExclusao            = 'curexclusao';

   public static table = 'Curso';

   @column({isPrimary:true, columnName: 'curid', serializeAs: 'curid' })
   public CurId: number

   @column({ columnName: 'curdescricao', serializeAs: 'curdescricao' })
   public CurDescricao: string

   @column.dateTime({autoUpdate:true, columnName: 'curalteracao', serializeAs: 'curalteracao' })
   public CurAlteracao    : DateTime ;

   @column.dateTime({columnName: 'curexclusao', serializeAs: 'curexclusao' })
   public CurExclusao    : DateTime ;

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Curso._fieldCurExclusao  )
   }
   
   public delete = async () => {
      this.CurExclusao = DateTime.local()
      await this.save()
   }


}
