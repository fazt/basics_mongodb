// save is a shell function that lets you insert a document if it doesn’t exist and update it if
// it does

use test;

db.foo.drop();

db.foo.insert({name: 'test'});

x = db.foo.findOne();
x.num = 45;
db.foo.save(x);

db.foo.find();
