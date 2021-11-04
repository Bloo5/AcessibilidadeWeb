import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class DisciplinaCursada extends BaseModel {

   public static readonly _fieldMatCId                   = 'matcid';
   public static readonly _fieldMatCAlteracao            = 'matcalteracao';
   public static readonly _fieldMatCExclusao             = 'matcexclusao';
   public static readonly _fieldMatCStatus               = 'matcstatus';


   public static table = 'DisciplinaCursada';

   @column({isPrimary:true, columnName: 'matid', serializeAs: 'matid' })
   public MatCId: number

   @column.dateTime({autoUpdate:true, columnName: 'matalteracao', serializeAs: 'matalteracao' })
   public MatCAlteracao    : DateTime ;

   @column.dateTime({columnName: 'matexclusao', serializeAs: 'matexclusao' })
   public MatCExclusao    : DateTime ;

   @column({ columnName: 'matstatus', serializeAs: 'matstatus' })
   public MatStatus : string

   @column({ columnName: 'matid', serializeAs: 'matid' })
   public MatId : number

   @column({ columnName: 'aluid', serializeAs: 'aluid' })
   public AluId : number

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( DisciplinaCursada._fieldMatCExclusao  )
   }
   
   public delete = async () => {
      this.MatCExclusao = DateTime.local()
      await this.save()
   }


}
