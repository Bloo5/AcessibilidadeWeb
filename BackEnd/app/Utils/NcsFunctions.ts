export default class NcsFunctions {

   public static sleep(ms) {
      return new Promise((resolve) => { setTimeout(resolve, ms); });
   }

   public static isDate( str ) {
      if(isNaN(str) && !isNaN(Date.parse(str)))
          return true;
      else return false;
  }   

  public static isNumber(str){
   if(isNaN( str )){
      return false;
      } else {
         return true; 
      }
   }
}
