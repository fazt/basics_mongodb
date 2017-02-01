 use test;

db.tester.insert({x: 1});

var timeInc = function () {
  var start = (new Date()).getTime();

  for(var i =0; i<=100000; i++){
    db.tester.update({}, {'$inc': {x: 1}});
    db.getLastError();
  }

  var timeDiff = (new Date()).getTime() - start;

  print('updates took: ' + timeDiff + 'ms');
}

timeInc();

db.tester.find()
