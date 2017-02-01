// to see all documents
db.article.find();
db.article.find().pretty();
// to see one document
db.blog.findOne();
// SELECT * FROM posts WHERE title LIKES %mongo%;
db.posts.find({title: /mongo/ });

// post = {title:'whatever',num: 15}
db.posts.find({num: {$gt: 14}});
