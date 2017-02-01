// load this in the shell with the following command
//  load('defineConnecto.js')

var connectTo = function (port, dbName) {
  if (!port) {
    port = 27017
  }
  if (!dbName) {
    dbName = "test";
  }

  db.connect('localhost:'+port+'/'+dbName);
  return db;
}
