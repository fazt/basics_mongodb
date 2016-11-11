bson
add hoc querys
mongodb indexing
replica set
sharding - vertical scaling, horizontal scaling


dataTypes
json solo posee los siguientes tipos: null, boolean, string, numeric,array ,object.
no posee Date, no posee decimales, ni enteros, no distingue entre 32 -64 bits
se debe tenr consideraciones con Date, Array ,y documentos embebidos, id_ ObjectId

mongodb operators
db
mongo <dbname>
use <dbname>

show dbs
show collections

conectar a mongo en diferente maquina:
mongo some-host:300000/mydb

no conectarse a ninguna bd:
mongo --nodb
conn = new Mongo("some-host:30000")
db = conn.getDB('test')

db.help() o db.help

run scripts
mongo script1.js script2.js

ejecutar en un puerto non-default:host/port
mongo --quiet server-1:30000/foo script1.js script2.js

carga scripts desde la shell()
load("script1.js")

run ejecuta comandos nativos(no soporta pipes), :
run('pwd')
run('ls','-l')

definir el editor, para ediciones complejas:
<!-- se puede colocar en .mongorc.js para no volver a setearlo -->
EDITOR = '/usr/bin/emacs'
<!-- var hola = {title: 'mi primera edicion'} -->
<!-- edit hola -->


## Inconvenientes en nombrs de collections
- version es una palabra reservada
  db.version
  alternativa es: db.getCollection('version')
  db.getCollection('users').find()

- en javascript: x.y es igual a x[y]:
  db.version es lo mismo que db[version]

##Inserciones
### Validaciones
  - al insertar revisa que los ids no se repitan
  - los documentos deben ser menores de 16MB
  - para ver el tamaño: Object.bsonsize(documento)
