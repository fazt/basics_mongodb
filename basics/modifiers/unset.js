use test;

db.users.drop();

var user = {
  name: "fabian",
  website: "www.google.com"
};

//insert doc
db.users.insert(user);
db.users.find();

//update doc
db.users.update(
  {name: "fabian"},
  {"$unset": {website: 1}}
);
db.users.find();
