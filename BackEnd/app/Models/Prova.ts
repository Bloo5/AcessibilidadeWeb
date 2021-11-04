import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Prova extends BaseModel {

   public static readonly _fieldProId                  = 'proid';
   public static readonly _fieldProDescricao           = 'prodescricao';
   public static readonly _fieldProMidia               = 'promidia';
   public static readonly _fieldProAlteracao           = 'proalteracao';
   public static readonly _fieldProExclusao            = 'proexclusao';
   public static readonly _fieldProStatus            = 'prostatus';
   public static readonly _fieldProData            = 'prodata';



   public static table = 'Prova';

   @column({isPrimary:true, columnName: 'proid', serializeAs: 'proid' })
   public ProId: number

   @column({ columnName: 'prodescricao', serializeAs: 'prodescricao' })
   public ProDescricao: string

   @column.dateTime({autoUpdate:true, columnName: 'proalteracao', serializeAs: 'proalteracao' })
   public ProAlteracao    : DateTime ;

   @column.dateTime({ columnName: 'proexclusao', serializeAs: 'proexclusao' })
   public ProExclusao    : DateTime ;
   
   @column.dateTime({columnName: 'prodata', serializeAs: 'prodata' })
   public ProData    : DateTime ;

   @column({ columnName: 'prostatus', serializeAs: 'prostatus' })
   public ProStatus: string

   @column({ columnName: 'matcid', serializeAs: 'matcid' })
   public MatCId : number

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Prova._fieldProExclusao  )
   }
   
   public delete = async () => {
      this.ProExclusao = DateTime.local()
      await this.save()
   }


}
