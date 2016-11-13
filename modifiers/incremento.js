// no se puede modifiacr el Id al usar modificadores
// inc es parecido a set pero solo se puede usar con integer, long, double
var website = {
  url: "www.google.com",
  "views": 10
};

db.test.insert(website);
db.test.update({"url": "www.google.com"}, {"$inc": {"views": 1}});

db.games.insert({game:"pintball", "user": "fabian"});
db.games.update({"game":"pintball", "user":"fabian"},{"$inc": {"score":30}});
db.games.update({"game":"pintball", "user":"fabian"},{"$inc": {"score":10000}});
