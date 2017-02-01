use test;

db.blog.posts.drop();

firstPost = {
  "content": '...',
  "comments": [
    {
      "comment":"good post",
      "author": "Fabian",
      "votes": 0
    },
    {
      "comment":"bad post",
      "author": "Jesus",
      "votes": 0
    },
    {
      "comment":"doesnt matter",
      "author": "Isaac",
      "votes": 0
    }
  ]
};

db.blog.posts.insert(firstPost);
db.blog.posts.find().pretty();

// to increment the votes for the first comment
// first I get it the Id of the post
var blog = db.blog.posts.findOne();

// then I update it
db.blog.posts.update(
  {_id: blog._id},
  {"$inc": {"comments.0.votes": 1} }
);

// the '$' allows to update a element an any position
// for instance, to replace Jesus without to know his position
db.blog.posts.update(
  {"comments.author": "Jesus"},
  {"$set": {"comments.$.author": "Jim"}}
);
db.blog.posts.find().pretty();
