
import { OwlStandingsController } from "../controllers/standings/owl-standings.controller";
import { OwlScheduleController } from "../controllers/schedule/owl-schedule.controller";
import { OwlMatchStatsController } from '../controllers/matchStats/owl-match-stats.controller'
import { OwlPlayerStatsController } from "../controllers/playerStats/owl-player-stats.controller";

export class Routes {   
    
    public standingsController: OwlStandingsController = new OwlStandingsController();
    public scheduleController: OwlScheduleController = new OwlScheduleController();
    public matchStatsController: OwlMatchStatsController = new OwlMatchStatsController();
    public playerStatsController: OwlPlayerStatsController = new OwlPlayerStatsController();


    public routes(app): void {   

    app.route('/standings')
        .get(this.standingsController.getStandings);

    app.route('/schedule')
        .get(this.scheduleController.getSchedule);

    app.route('/match/:id/:number')
        .get(this.matchStatsController.getMatchStats)
    
    app.route('/player/:id')
        .get(this.playerStatsController.getMatchStats)
        
    }
}