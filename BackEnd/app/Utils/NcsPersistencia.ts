import Database from "@ioc:Adonis/Lucid/Database";
import { RawQueryBindings } from "@ioc:Adonis/Lucid/DatabaseQueryBuilder";

export default class NcsPersistencia {

   public static async nextID( connection: string, table: string, key: string, incRecords: number = 1, tableSelect: string = '' ) {
      table       = table.toUpperCase();
      tableSelect = tableSelect.toUpperCase();
      key         = key.toUpperCase();

      const record = await Database.connection( connection )
      .rawQuery( 'select nextID( :table, :table, :key, :incRecords ) as ID', {
         table: table,
         tableSelect: tableSelect,
         key: key,
         incRecords: incRecords
      });
      

      if( record.rowCount > 0 ) {
         return record.rows[0].id;
      }

      return -1
   }

   public static async executaQuery( connection: string, sql: string, parametros?: RawQueryBindings ){
      const newParametros = this.addDefaultParametros( parametros );
      return await Database.connection( connection ).rawQuery( sql, newParametros );
   }

   /**
   * Returns o sql com os parametros
   */
   public static loadSqlParametros( sql: string, parametros: RawQueryBindings) : string {
      const newParametros = this.addDefaultParametros( parametros );
      return Database.rawQuery( sql, newParametros ).toQuery();
   }

   private static addDefaultParametros( parametros? : RawQueryBindings) : RawQueryBindings {
      let defaultParametros = {
         pS: 'S',
         pN: 'N',
         pVirgula: ',',
         pVazio: ''
      };

      return { ...defaultParametros, ...parametros };
   }
}
