
import { OwlStandingsController } from "../controllers/standings/owl-standings.controller";
import { OwlScheduleController } from "../controllers/schedule/owl-schedule.controller";
export class Routes {   
    
    public standingsController: OwlStandingsController = new OwlStandingsController();
    public scheduleController: OwlScheduleController = new OwlScheduleController();
    public routes(app): void {   

    app.route('/standings')
        .get(this.standingsController.getStandings);

    app.route('/schedule')
        .get(this.scheduleController.getSchedule);

        
    }
}