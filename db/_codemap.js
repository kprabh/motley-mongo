module.exports = {
  _ns: 'motley',
  _folder: 'db',

  'connectMongo': require('./connectMongo'),
  'createMongoCollection': require('./createMongoCollection'),
  '@createCollection': '#createMongoCollection',

  'mongo.db': null
}