// db.version.find();
db.getCollection('version').find();

// iterar sobre collections
var collections = ['posts','comments','authors'];

for (var i in collections){
  print(db.blog[collections[i]]);
}
// en luegar de hacer print(db.posts);print(db.comments);print(db.authors);

// accediento a nombres extraños
// db.@#&! es ilegal pero, db["@#&!"] funciona!
var name = "@#&!";

db[name].find();
