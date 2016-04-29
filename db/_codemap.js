module.exports = {
  _ns: 'motley',
  _folder: 'db',

  'connectMongo': require('./connectMongo'),
  'createMongoCollection': require('./createMongoCollection'),
  '@createCollection': '#db.createMongoCollection',

  'mongo.db': null
}