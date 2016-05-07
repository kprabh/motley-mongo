module.exports = function container (get, set) {
  return function connectMongo (cb) {
    var MongoClient = get('vendor.mongodb').MongoClient
    var options = get('conf.db.mongo')
    get('console').log('motley-mongo: connecting...')
    MongoClient.connect(options.url, function (err, db) {
      if (err) return cb(err)
      set('@db.mongo.db', db)
      if (options.username) {
        db.authenticate(options.username, options.password, function (err, result) {
          if (err) return cb(err)
          get('console').log('motley-mongo: connected to ' + options.url)
          cb()
        })
      }
      else cb()
    })
  }
}