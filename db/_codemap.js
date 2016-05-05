module.exports = {
  _ns: 'motley',
  _folder: 'db',

  'connectMongo': require('./connectMongo'),
  'createMongoCollection': require('./createMongoCollection'),
  'closeMongo': require('./closeMongo'),
  '@createCollection': '#db.createMongoCollection',

  'mongo.db': null
}