// the simplest typeof update a doc is replace the match with a new one
  use test
  db.users.drop();

  var account = {
    name: 'fabian',
    friends: 32,
    enemies: 4
  };

db.users.insert(account);

db.users.find().pretty();
// we want to move friends and enemies to a relationships subdocument

var fabian = db.users.findOne({name: 'fabian'});
fabian.relationships ={
  friends: fabian.friends,
  enemies: fabian.enemies
};

delete fabian.friends;
delete fabian.enemies;
db.users.update({name: 'fabian' }, fabian);
db.users.find().pretty();
