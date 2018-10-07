const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();


const standingsController = {};

standingsController.get = (req, res) => {

  OWL.getStandings().then(response => {
    res.json(response.data);
  });

};

export default standingsController;