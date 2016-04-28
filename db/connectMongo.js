module.exports = function container (get, set) {
  return function task (cb) {
    var MongoClient = get('vendor.mongodb').MongoClient;
    var options = get('conf.db.mongo');
    MongoClient.connect(options.url, function (err, db) {
      if (err) return cb(err);
      set('@db.mongo.db', db);
      cb();
    });
  }
};