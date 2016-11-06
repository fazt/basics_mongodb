// INSERT
db.article.insert({title: 'Hello World'});
var post = {
  title: 'nuevo Post',
  content: 'mi contenido del post',
  date: new Date()
};
db.blog.insert(post);
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
