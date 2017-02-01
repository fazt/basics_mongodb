// helper functions
function randomAge() {
  return Math.floor(Math.random() * 70)
}

// dropping collections
db.users.drop();

// creating three documents with the same data
var count = 0;
while (count < 3) {
  db.users.insert({name: 'fabian',age: randomAge()})
  count++;
}

// reading collection
db.users.find().pretty();

// now we can increment the 'fabian' second document of his age by one
var fabian = db.users.findOne({name: 'fabian'});
fabian.age++;
db.users.update({name: 'fabian'}, fabian);
