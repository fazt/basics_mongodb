// INSERT
db.article.insert({title: 'Hello World'});
var post = {
  title: 'nuevo Post',
  content: 'mi contenido del post',
  date: new Date()
};
db.blog.insert(post);

// Insert Multiple Documents en una collecion
db.test.insert([{"_id":0},{"_id":1},{"_id":2}]);
// despues del error ya no inserta documentos
db.test.insert([{"_id":0},{"_id":1},{"_id":2},{"_id":2},{"_id":3}]);
// para continuar con el resto de documentos, se puede usar continueOnError, la shell no soporta pero los drives si
// para insertar multiples documentos en multiples colecciones se usa mongoimport
// revisar el peso de los documentos
var documento = db.test.find({"_id":1});
Object.bsonsize(documento);

// SAVE
db.posts.save({title: 'hello',user:'fabian'});
// UPDATE
// create a new document if not matches
db.posts.update({
  'user': 'fabian'
  },{
  title: 'first Post',user: 'fabian'
  },{
    upsert: true
  });
