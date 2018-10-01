
import { OwlStandingsController } from "../controllers/standings/owl-standings.controller";
import { OwlScheduleController } from "../controllers/schedule/owl-schedule.controller";
import { OwlMatchStatsController } from '../controllers/matchStats/owl-match-stats.controller'
import { OwlPlayerStatsController } from "../controllers/playerStats/owl-player-stats.controller";
import { OwlStatsController } from "../controllers/stats/owl-stats.controller";

export class Routes {   
    
    public standingsController: OwlStandingsController = new OwlStandingsController();
    public scheduleController: OwlScheduleController = new OwlScheduleController();
    public matchStatsController: OwlMatchStatsController = new OwlMatchStatsController();
    public playerStatsController: OwlPlayerStatsController = new OwlPlayerStatsController();
    public statsController: OwlStatsController = new OwlStatsController();


    public routes(app): void {   

    app.route('/api/standings')
        .get(this.standingsController.getStandings);

    app.route('/api/schedule')
        .get(this.scheduleController.getSchedule);

    app.route('/api/match/:id/:number')
        .get(this.matchStatsController.getMatchStats)
    
    app.route('/api/player/:id')
        .get(this.playerStatsController.getMatchStats)
    
    app.route('/api/stats/:type')
        .get(this.statsController.getStats)
        
    }
}