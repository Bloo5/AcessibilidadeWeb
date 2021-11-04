import { BaseModel, beforeFetch, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Alunos extends BaseModel {

   public static readonly _fieldAluId                 = 'aluid';
   public static readonly _fieldAluEndereco                = 'aluendereco';
   public static readonly _fieldAluRG                 = 'alurg';
   public static readonly _fieldAluCPF                 = 'alucpf';
   public static readonly _fieldAluAlteracao                 = 'alualteracao';
   public static readonly _fieldAluExclusao                 = 'aluexclusao';

   public static table = 'alunos';

   @column({isPrimary:true, columnName: 'aluid', serializeAs: 'aluid' })
   public AluId: number

   @column({ columnName: 'aluendereco', serializeAs: 'aluendereco' })
   public AluEndereco: string

   @column({ columnName: 'alurg', serializeAs: 'alurg' })
   public AluRG: string

   @column({ columnName: 'alucpf', serializeAs: 'alucpf' })
   public AluCPF: string

   @column.dateTime({autoUpdate:true, columnName: 'alualteracao', serializeAs: 'alualteracao' })
   public AluAlteracao    : DateTime ;

   @column.dateTime({columnName: 'aluexclusao', serializeAs: 'aluexclusao' })
   public AluExclusao    : DateTime ;

   @column({ columnName: 'usuid', serializeAs: 'usuid' })
   public UsuId : number

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Alunos._fieldAluExclusao  )
   }
   
   public delete = async () => {
      this.AluExclusao = DateTime.local()
      await this.save()
   }


}
