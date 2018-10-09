const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();
const playersController = {};

playersController.get = (req, res) => {
  OWL.getLiveMatch().then(response => {
    res.json(response.data);
  });
};

export default playersController;