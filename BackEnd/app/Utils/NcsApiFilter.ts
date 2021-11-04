import NcsFunctions from "App/Utils/NcsFunctions";
import { RequestContract } from '@ioc:Adonis/Core/Request';
import NcsPersistencia from "App/Utils/NcsPersistencia";


type Filter = {
   searchType: string,
   values: Array<string>,
   field: string
}

type Order = {
   field: string,
   direction: string
}

export class Pagination {
   rows: number = 100;
   rowStart: number = 0;
}

export class FilterApi {
   public filters    : Array<Filter>   = [];
   public orders     : Array<Order>    = [];
   public pagination : Pagination      = new Pagination(); //{ rows: number, rowStart: number } = { rows: 100, rowStart: 1}
   /*
   constructor({ filters, orders, pagination }){
      this.filters = filters;
      this.orders = orders;
      this.pagination = pagination;
   }
   */
};



export default class NcsApiFilter { // abstract class NcsQuery {
   
   public static strToOperator( str : string ) {
      str = str.toLowerCase();

           if( str == 'greater'        ) return '>';
      else if( str == 'greaterorequal' ) return '>=';
      else if( str == 'less'           ) return '<';
      else if( str == 'lessorequal'    ) return '<=';
      else if( str == 'notequal'       ) return '<>';
      else if( str == 'equal'          ) return '=';
   }

   public static getFilterApi( request : RequestContract ) : FilterApi {
      const data     = request.only(['pagination', 'filters', 'order'])
      const filter   = new FilterApi()
      
      if( data.pagination ) {
         filter.pagination          = data.pagination;
         filter.pagination.rows     = ( filter.pagination.rows     ) ? filter.pagination.rows      : 100;
         filter.pagination.rowStart = ( filter.pagination.rowStart ) ? filter.pagination.rowStart  : 0;
      }

      if( data.filters )         
         filter.filters    = data.filters;

      if( data.order )         
         filter.orders     = data.order;

      return filter;         
   }

   public static async loadRecordsWithFilter( connection : string, sql : string, filter : FilterApi ){
      
      var newSql        = "";
      var indexLoop     = 0;      
      var parametros    = {};
      var rowsCount     = -1;
      var list          = [];
      
      while ( ( indexLoop < 2 ) && ( rowsCount != 0 ) ) {
         newSql = `select ${ ( indexLoop == 0 ) ? "count(*) as qtde" : "*" } \nfrom \n( \n   ${sql} \n) as nq \nwhere 1=1`;

         filter.filters.forEach(( filtro, index ) => {
            const searchType = filtro.searchType;

            if( [ 'starting', 'ending', 'containing' ].includes( searchType ) ) {
               
               newSql = newSql.concat( '\n  and ( ' );

               filtro.values.forEach(( value, index ) => {
                  newSql = newSql.concat( '\n        '  + ( (index == 0) ? '' : ' or ' ));
                  newSql = newSql.concat( '( ' + filtro.field + ' ilike ' );
                  newSql = newSql.concat( "'"+ ( (searchType != 'starting') ? '%' : '' )  + value + ( (searchType != 'ending') ? '%' : '' ) + "' )");
               })

               newSql = newSql.concat('  ) ')
            }
            else if ( ['in', 'notin'].includes( searchType ) ){
             //newSql = newSql.concat( '  and ( ' + filtro.field + ( (searchType == 'in') ? '' : 'not' ) + ' in( :' + filtro.field + ' ) )' );               
               newSql = newSql.concat( '  and ( ' + filtro.field + ( (searchType == 'in') ? ' = ' : ' <> ' ) + 'any( :' + filtro.field + ' ) )' );
               parametros[ filtro.field ] = filtro.values;
            }
            else if( ['between'].includes( searchType ) ){
               if( typeof( filtro.values[0] ) == 'number' ) {
                  newSql = newSql.concat( '  and ( ' + filtro.field + ' between ' + filtro.values[0] + ' and ' + filtro.values[1]  + ' )' );               
               }
               else if( NcsFunctions.isDate( filtro.values[0] ) ){
                  newSql = newSql.concat( '  and ( ' + filtro.field + ' between ' + filtro.values[0] + ' and ' + filtro.values[1]  + ' )' );               
               }
            }
            else {
               let chave = filtro.field + index;
               newSql = newSql.concat( '\n  and ( ' + filtro.field + ' ' + this.strToOperator( searchType ) + ' :' + chave +' )' );
               parametros[ chave ] = filtro.values[0];
            }
         }); 

         if ( indexLoop > 0 ) {
            var strOrdem = '';
            filter.orders.forEach( order => {
               strOrdem = strOrdem.concat( ( strOrdem ) ? ', ' : '');
               strOrdem = strOrdem.concat( order.field + ' ' + order.direction );            
            });

            if( strOrdem ){
               newSql = newSql.concat('\norder by ' + strOrdem);
            }

            newSql = newSql.concat('\nlimit ' + filter.pagination.rows + ' offset ' + filter.pagination.rowStart );

         }

         const records = await NcsPersistencia.executaQuery( connection, newSql, parametros );
         
         if( indexLoop == 0 )
            rowsCount = Number( records.rows[0].qtde );
         else
            list = records.rows;
         
         indexLoop++;  
      } 
      
      return { data: list, recordsTotal: rowsCount, recordsFiltered: list.length }
   }
   

}