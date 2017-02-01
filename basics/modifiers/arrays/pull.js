use test;

db.lists.drop();

db.lists.insert({"todo" : ["dishes", "laundry", "dry cleaning"]});

db.lists.find().pretty();

db.lists.update(
  {},
  {$pull: {"todo": "laundry"}}
);

db.lists.find().pretty();
