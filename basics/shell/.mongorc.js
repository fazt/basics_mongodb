// este archivo se ejecuta cada vez que se inicia la consola
// colocarlo en el home directory
var compliment = ['atractivo','inteligente','como batman'];

var index = Math.floor( Math.random() * compliment.length);

print('Hola, luces particularmente '+compliment[index]+' Hoy!');

// also you can remove dangerous functions, to prevent fat-fingering
// var no = function() {
//   print('Not on my watch');
// }

// prevent dropping database

// db.dropDatabase = DB.prototype.dropDatabase = no;
//
// // prevent dropping collections
// DBCollection.proptotype.drop = no;
//
// // prevent dropping indexes
// DBCollection.prototype.dropIndex = no;


// PROMPT 1

// prompt = function(){
//   return (new Date()) + '>';
// }

// PROMPT 2
prompt = function (){
  if(typeof db === 'undefined'){
    return '(nodb)>';
  }
  try{
    db.runCommand({getLastError:1});
  }catch(e){
    print(e);
  }

  return db+'>';
}
