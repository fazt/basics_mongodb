// $set modifier sets the value of a field
use test;

db.users.drop();

var user = {
  name: "fabian",
  age: 30,
  sex: "male",
  location: "California"
};

db.users.insert(user);
db.users.update(
  {"name": "fabian"},
  {"$set": {"favorite book": "Sherlock holmes."}}
);
db.users.find().pretty();

//second update
db.users.update(
  {"name": "fabian"},
  {"$set": {"favorite book": ["Sherlock holmes", "war and peace"]}}
);
db.users.find().pretty();
