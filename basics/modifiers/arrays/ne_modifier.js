use test;

db.papers.drop();

var authors = {
  "authors": ["author1","author2","author3"]
};

// agregar items si no existen con $ne
db.papers.insert(authors);

db.papers.update({"authors": {"$ne": "Ritchie"}},{
  "$push": {"authors cited": "Ritchie"}
});

db.papers.find().pretty();
