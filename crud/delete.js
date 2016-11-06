//delete the collection
db.posts.drop();S
//remove documents but not the collection and indexes
db.posts.remove({user: "fabian"});
// remove a single documnet
db.posts.remove({user:'jesus'},true)
