use test;
db.coll.drop();
// when we create new docs, MDB puts in right next on the privious one one disk.
db.coll.insert({x: 1});
db.coll.insert({x: 2});
db.coll.insert({x: 3});
// look at the document's order
db.coll.find();

// if a document gets bigger, it will move to another part of the collection
db.coll.update({x:2},{$set:{x:22}})
db.coll.find();
