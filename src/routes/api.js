import express from "express";
import standingsController from "../controllers/standings.controller";
import schedulesController from "../controllers/schedules.controller";
import playersController from "../controllers/players.controller";
import liveMatchController from "../controllers/live-match.controller";
import statsController from "../controllers/stats.controller";
const routes = express();

routes.get("/", (req, res) => res.send("Invalid Endpoint"));

routes.get("/standings", standingsController.get);
routes.get("/schedules", schedulesController.get);
routes.get("/live-match", liveMatchController.get);
routes.get("/players/:id", playersController.get);
routes.get("/stats/:id", statsController.get);

export default routes;
