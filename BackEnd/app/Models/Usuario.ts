import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeFetch, beforeSave, beforeFind, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class Usuario extends BaseModel {

   public static readonly _fieldUsuId                 = 'usuid';
   public static readonly _fieldUsuNome                 = 'usunome';
   public static readonly _fieldUsuEmail                 = 'usuemail';
   public static readonly _fieldUsuSenha                 = 'ususenha';
   public static readonly _fieldUsuStatus                 = 'usustatus';
   public static readonly _fieldUsuAlteracao                 = 'usualteracao';
   public static readonly _fieldUsuExclusao                 = 'usuexclusao';
   public static readonly _fieldUsuCidade                 = 'usucidade';
   public static readonly _fieldUsuFederacao                 = 'usufederacao';
   public static readonly _fieldUsuTelefone                 = 'usutelefone';
   public static readonly _fieldUsuCelular                 = 'usucelular';
   public static table = 'usuario';

   @column({isPrimary:true, columnName: 'usuid', serializeAs: 'usuid' })
   public UsuId: number

   @column({ columnName: 'usunome', serializeAs: 'usunome' })
   public UsuNome: string

   @column({ columnName: 'usuemail', serializeAs: 'usuemail' })
   public UsuEmail: string

   @column({ columnName: 'ususenha', serializeAs: 'ususenha' })
   public UsuSenha: string

   @column({ columnName: 'usustatus', serializeAs: 'usustatus' })
   public UsuStatus: string

   @column.dateTime({autoUpdate:true, columnName: 'usualteracao', serializeAs: 'usualteracao' })
   public UsuAlteracao    : DateTime ;

   @column.dateTime({columnName: 'usuexclusao', serializeAs: 'usuexclusao' })
   public UsuExclusao    : DateTime ;

   @column({ columnName: 'usucidade', serializeAs: 'usucidade' })
   public UsuCidade: string

   @column({ columnName: 'usufederacao', serializeAs: 'usufederacao' })
   public UsuFederacao: string

   @column({ columnName: 'usutelefone', serializeAs: 'usutelefone' })
   public UsuTelefone: string

   @column({ columnName: 'usucelular', serializeAs: 'usucelular' })
   public UsuCelular: string

   @beforeFind()
   @beforeFetch()
   public static ignoreDeleted(query: ModelQueryBuilderContract<typeof BaseModel>) {
      query.whereNull( Usuario._fieldUsuExclusao  )
   }
   
   public delete = async () => {
      this.UsuExclusao = DateTime.local()
      await this.save()
   }

   @beforeSave()
   public static async hashPassword(usuario: Usuario) {
      if (usuario.$dirty.password) {
         usuario.UsuSenha = await Hash.make(usuario.UsuSenha)
      }
   }
}
