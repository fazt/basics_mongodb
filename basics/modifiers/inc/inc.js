// no se puede modifiacr el Id al usar modificadores
// inc es parecido a set pero solo se puede usar con integer, long, double
use test;

db.analytics.drop();

var website = {
  url: "www.google.com",
  "views": 10
};

db.analytics.insert(website);
db.analytics.update(
  {"url": "www.google.com"},
  {"$inc": {"views": 1}}
);

// "$inc" is similar to "$set", but it is designed for incrementing (and decrementing)
// numbers. "$inc" can be used only on values of type integer, long, or double. If it is used
// on any other type of value, it will fail. This includes types that many languages will
// automatically cast into numbers, like nulls, booleans, or strings of numeric characters:

db.games.insert({game:"pintball", "user": "jesus", "score": "1"});
db.games.update(
  {'user': 'jesus'},
  {'$inc': {score: 1}}
);
// cannot aply to a non-numeric type
