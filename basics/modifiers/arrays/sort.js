// This will sort all of the objects in the array by their "rating" field and then keep the
// first 10. Note that you must include "$each"; you cannot just "$slice" or "$sort" an
// array with "$push
use test;

db.movies.drop();

db.movies.insert({genre: 'terror'});

db.movies.update({genre: 'terror'},{
  $push: {
    "top10": {
      $each: [{"name" : "Nightmare on Elm Street", "rating" : 6.6},
              {"name" : "Saw", "rating" : 4.3}],
      $slice: -10,
      $sort: {rating: -1}
    }
  }
});

db.movies.find().pretty();
