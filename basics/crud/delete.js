//remove documents but not the collection and indexes
db.posts.remove({});
db.posts.remove({user: "fabian"});
// remove a single documnet
db.posts.remove({user:'jesus'},true)

//delete the collection more faster
db.posts.drop();

// remove speed
for(var i = 0; i<100000; i++){
  db.test.insert({"foo":"bar", "baz": i, "z": 10 - i});
}

// mide el tiempo de remover una collection
var timesRemove = function(){
  var start = (new Date()).getTime();

  // db.test.remove({});
  db.test.drop();
  db.test.findOne(); //se asegura que se haya removido antes de continuar
  var timeDiff = (new Date()).getTime() - start;

  print('remove took: '+ timeDiff + 'ms');
  //in my laptop is: "remove took(remove) : 1446ms"
  //in my laptop is: "remove took(drop) : 2ms"
}
