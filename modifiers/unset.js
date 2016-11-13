var user = {
  name: "fabian",
  website: "www.google.com"
};

db.test.insert(user);
db.test.update({name: "fabian"}, {"$unset": {website: 1}})
