module.exports = {
  _ns: 'motley',
  _folder: 'hooks',

  'boot[]': '#db.connectMongo',
  'close[]': '#db.closeMongo'
}