
import { OwlStandingsController } from "../controllers/standings/owl-standings.controller";
export class Routes {   
    
    public standingsController: OwlStandingsController = new OwlStandingsController();
    public routes(app): void {   

    app.route('/standings')
        .get(this.standingsController.getStanding);
        
    }
}