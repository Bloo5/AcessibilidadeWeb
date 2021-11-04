import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Nota extends BaseModel {

   public static readonly _fieldNotId                  = 'notid';
   public static readonly _fieldNotTrab1          = 'nottrab1';
   public static readonly _fieldNotProva1              = 'notprova1';
   public static readonly _fieldNotTrab2          = 'nottrab2';
   public static readonly _fieldNotProva2              = 'notprova2';
   public static readonly _fieldNotSub              = 'notsub';
   public static readonly _fieldNotAlteracao           = 'notalteracao';
   public static readonly _fieldNotExclusao            = 'notexclusao';

   public static table = 'Nota';

   @column({isPrimary:true, columnName: 'notid', serializeAs: 'notid' })
   public NotId: number

   @column({ columnName: 'nottrab1', serializeAs: 'nottrab1' })
   public NotTrab1 : number

   @column({ columnName: 'notprova1', serializeAs: 'notprova1' })
   public NotProva1 : number

   @column({ columnName: 'nottrab2', serializeAs: 'nottrab2' })
   public NotTrab2 : number

   @column({ columnName: 'notprova2', serializeAs: 'notprova2' })
   public NotProva2 : number

   @column({ columnName: 'notsub', serializeAs: 'notsub' })
   public NotSub : number

   @column.dateTime({autoUpdate:true, columnName: 'notalteracao', serializeAs: 'notalteracao' })
   public NotAlteracao    : DateTime ;

   @column.dateTime({columnName: 'notexclusao', serializeAs: 'notexclusao' })
   public NotExclusao    : DateTime ;

   @column({ columnName: 'matcid', serializeAs: 'matcid' })
   public MatCId : number


   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( this._fieldNotExclusao)
   }
   
   public delete = async () => {
      this.NotExclusao = DateTime.local()
      await this.save()
   }


}
