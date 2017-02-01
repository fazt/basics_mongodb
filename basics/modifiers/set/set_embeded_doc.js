// usando $set en documentos embebidos
use test;

db.posts.drop();

var post = {
  title: "post1",
  author: {
    "name": "fabian",
    "lastname": "napa"
  }
}
// insert document
db.posts.insert(post);
db.posts.find().pretty();

// update document
db.posts.update(
  {title: "post1"},
  {"$set": {"author.name": "Fabian Jesus"}}
);
db.posts.find().pretty();
