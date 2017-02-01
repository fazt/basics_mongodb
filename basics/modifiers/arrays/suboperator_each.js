use test;

db.stock.drop();

// se puede insertar multiples valores con $each
db.stock.movies.insert({"title":"MOVIE 1"});

db.stock.movies.update({title: "MOVIE 1"},{
  "$push":{
    "hourly":{
      "$each":[562.776, 562.790, 559.123]
    }
  }
});

db.stock.movies.find().pretty();
