const OverwatchLeague = require("overwatchleague");
const OWL = new OverwatchLeague();
const liveMatchController = {};

liveMatchController.get = (req, res) => {
  OWL.getLiveMatch().then(response => {
    res.json(response.data);
  });
};

export default liveMatchController;
