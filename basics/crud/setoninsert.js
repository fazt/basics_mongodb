// only sets the value of a field when the document is being inserted
use test;

db.users.drop();

// upsert
db.users.update({}, {"$setOnInsert": {"createdAt":new Date()}}, true);

db.users.find().pretty();

// If we run this update again, it will match the existing document, nothing will be inserted,
// and so the "createdAt" field will not be changed:
