// suppose we hava a game
use test;
// dropping database if exists
db.games.drop();
// define an object game
var game = {
  name: 'pinball',
  user: 'fabian'
};
// insert a new doc game
db.games.insert(game);
db.games.find().pretty();

// aument a score in 50, it will create
db.games.update(
  {user: 'fabian'},
  {$inc: {'score': 30}}
);
db.games.find().pretty();

// update by 10000
db.games.update(
  {user: 'fabian'},
  {$inc: {'score': 10000}}
);
db.games.find().pretty();
