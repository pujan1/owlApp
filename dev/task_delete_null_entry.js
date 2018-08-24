var MongoClient = require('mongodb').MongoClient
, assert = require('assert');
const request = require('request');

const url = 'mongodb://localhost:27017';
const dbName = 'owlApp';


MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  console.log("Connected successfully to server");
  const db = client.db(dbName);
  findDocuments(db, function() {
    client.close();
  });
});


const findDocuments = function(db, callback) {
  const collection = db.collection('hero_stats');

  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}