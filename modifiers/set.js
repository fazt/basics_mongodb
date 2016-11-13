// modificardor Set
var user = {
  name: "fabian",
  age: 30,
  sex: "male",
  location: "California"
}
db.test.insert(user);
db.test.update({"name": "fabian"},{"$set": {"favorite book": "Sherlock holmes."}})
db.test.update({"name": "fabian"},{"$set": {"favorite book": ["Sherlock holmes", "war and peace"]}})

// usando $set en documentos embebidos
var post = {
  title: "post1",
  author: {
    "name": "fabian",
    "lastname": "napa"
  }
}

db.test.insert(post);
db.test.update({title: "post1"},{"$set": {"author.name": "Fabian Jesus"}})
