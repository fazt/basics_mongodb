use test;

db.numbers.drop();

var numbers = {
  integers: [1,2,3,4]
};

db.numbers.insert(numbers);

db.numbers.find().pretty();

// use pop to remove end
db.numbers.update({},{$pop: {"integers": 1}});

// use pop to remove a element at the beginning
db.numbers.update({},{$pop: {"integers": -1}});

db.numbers.find().pretty();
