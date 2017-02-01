// This example would limit the array to the last 10 elements pushed. Slices must always
// be negative numbers.
use test;

db.stock.movies.drop();

db.stock.movies.insert({title: 'terror'});

// definir una longitud de items con $slice
db.stock.movies.update({title: "terror"},{
  "$push":{
    "top10":{
      "$each": ["Nightmare on Elm Street", "saw"],
      "$slice": -10
    }
  }
});

db.stock.movies.find().pretty();

db.test.movies.update({title: "terror"},{
  "$push":{
    "top10":{
      "$each": ["Nightmare on Elm Street", "saw"],
      "$slice": -10,
      "$sort": {"hourly": -1}
    }
  }
});
