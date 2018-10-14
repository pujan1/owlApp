import { MongoClient } from "mongodb";
var url = "mongodb://pujan:pujan123@ds249311.mlab.com:49311/owlapp";

const statsController = {};

statsController.get = (req, res) => {
  let id = { esports_match_id: 10525 };
  MongoClient.connect(
    url,
    function(err, db) {
      if (err) throw err;
      console.log("Database connected!");
      let dbo = db.db("owlapp");
      dbo
        .collection("hero_stats")
        .find(id)
        .toArray((err, docs) => {
          res.send(docs);
        });
    }
  );
};

export default statsController;
