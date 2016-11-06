db.posts.find({"user":{$in: ['fabian','jesus']}});
db.posts.find({$or: [{"user":"fabian"},{"user":"jesus"}]});
