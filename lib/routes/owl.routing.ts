
import { StandingsController } from "../controllers/owl.controller";
export class Routes {   
    
    public standingsController: StandingsController = new StandingsController();
    public routes(app): void {   

    app.route('/standings')
        .get(this.standingsController.getStanding);
        
    }
}