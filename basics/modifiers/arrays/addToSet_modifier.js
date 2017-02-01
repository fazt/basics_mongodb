// se puede usar addToSet para prevenir duplicados
use test;

db.users.drop();

db.users.insert({
  username: "fabian"
});

db.users.update(
  {username:"fabian"},
  { username: "fabian",
    "emails": [
    "fabian@example.com",
    "fabian@gmail.com",
    "fabian@hotmail.com"
  ]}
);

db.users.update(
  {username:"fabian"},
  {"$addToSet":{"emails":"fabian22s@yahoo.com"}
  }
);

// you can use it with $each

db.users.update(
  {"username": "fabian"},
  {"$addToSet": {
    "emails":{
      $each:["jesus@com.com", "jesuscom@com.com"]
    }
  }}
);
db.users.find().pretty();
