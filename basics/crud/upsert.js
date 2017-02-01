// if no document is found that matches the update criteria,
// a new document will be created by combining the criteria and updated docu‐
// ments.
use test;

db.analytics.drop();

var blog = db.analytics.findOne({url: '/blog'});

if (blog) {
  blog.pageviews++;
  db.analytics.save(blog);
}else{
  db.analytics.save({url: '/blog', pageviews: 1});
}

db.analytics.find().pretty();

db.analytics.update(
  {"url":"/blog"},
  {"$inc": {"pageviews": 1}},
  true
);
db.analytics.find().pretty();


// find a key and update  it
db.analytics.update(
  {"pageviews": 20},
  {"$inc": {"pageviews": 1}},
  true
);
