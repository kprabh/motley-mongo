module.exports = function container (get, set) {
  return function closeMongo (cb) {
    var db = get('db.mongo.db')
    if (db) {
      get('console').log('motley-mongo: closing connection...')
      db.close(function (err) {
        if (err) return cb(err)
        get('console').log('motley-mongo: connection closed.')
        cb()
      })
    }
    else setImmediate(cb)
  }
}