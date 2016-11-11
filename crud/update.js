
//multi: update every document, by default update method update just a single document
db.posts.update({
  "user": 'fabian'
},{
  $set: {
    "title": "second post"
    }
  },{
    multi: true
})

// save, si encuenra coincidencia actualiza el documneto,
// si no lo crea
db.posts.save({
  "_id" : ObjectId("581d7fd1d8b8d2be618c83c1"),
  "title": 'first document',
  'user': 'jesus'
});

// findOneAndUpdate()
// findByIdAndUpdate()

var post = {
  title: 'nuevo post',
  content: 'contenido del post',
  date: new Date()
};
db.blog.insert(post);
post.comments = [];
db.blog.update({title:/post/}, post);


// Actualizando documento
db.people.insert({
  "name": "Fabian",
  "friends": 0,
  "enemies": 3
});

var fabian = db.people.find({"name": /abian/});
fabian.relationships = {"friends": fabian.friends, "enemies": fabian.enemies };
fabian.username = fabian.name;

delete fabian.friends;
delete fabian.enemies;
delete fabian.name;

db.users.update({"name": "Fabian"},fabian);
