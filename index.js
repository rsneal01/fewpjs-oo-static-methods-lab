class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(str){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let newArray = str.split(" ")
    for (let n=0; n < newArray.length; n++){
      if ( n == 0 ) {
        result.push( this.capitalize( newArray[ n ] ) )
      } else {
      if (exceptions.includes(newArray[n])){
        result.push(newArray[n])
      } else {
        result.push(this.capitalize(newArray[n]));
      }
    }
  }
    return result.join(" ");
}
}
  





done()