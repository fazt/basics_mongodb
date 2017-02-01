// $push an object in an array

db.blog.post.insert({
  title: "A blog Post"
, content: "..."
});
db.blog.post.update({title: "A blog Post"}, {
  "$push": {
    "comments":{
        "name": "joe"
      , "email":"joe@mail.com"
      , "content": "nice post."
    }
  }
});
db.blog.post.update({title: "A blog Post"}, {
  "$push": {
    "comments":{
        "name": "fabian"
      , "email":"fabian@mail.com"
      , "content": "good post."
    }
  }
});

//  multiple values in operation
db.stock.tickes.insert({name: "test"});
db.stock.tickes.update({name: "test"}, {"$push": {"hourly":{"$each": [1,2,3,4,5,6,7,8,9]}}});

// previene que solo se ingrese cierto numero de items
// slice limita a 10 elementos,$slice siempre debe ser negativo
db.movies.find({genre: "action"},{
  $push: {
    "top10":{
      "$each": ["movie1", "movie2", "movie3"],
      "$slice": -10
    }
  }
});
// $short
db.movies.find({"genre": "action"}, {
  "$push": {
    "top10": {
      $each: [
        {"name": "movie 1", "rating": 6.6},
        {"name": "movie 2", "rating": 4.3}
      ],
      "$slice": -10,
      "$sort": {"rating": -1}
    }
  }
});
