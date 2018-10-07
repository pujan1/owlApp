const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();
const schedulesController = {};

schedulesController.get = (req, res) => {

  OWL.getSchedule().then(response => {
    res.json(response.data);
  });
};

export default schedulesController;