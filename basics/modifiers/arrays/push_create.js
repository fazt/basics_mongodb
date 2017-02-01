use test;

db.blogs.drop();

db.blogs.insert({
  'title': 'my first blog',
  content: 'lorem ipsum'
});

db.blogs.find().pretty();

db.blogs.update({'title': 'my first blog'},{
  $push: {'comments':{
    'name': 'joe',
    "email": "joe@mail.com",
    "content": "lorem ipsum"
  }}
});

db.blogs.find().pretty();

db.blogs.update({'title': 'my first blog'},{
  $push: {'comments':{
    name: 'jesus',
    email: 'jesus@emai.com',
    content:'lorem ipsum 2'
  }}
});
db.blogs.find().pretty();
