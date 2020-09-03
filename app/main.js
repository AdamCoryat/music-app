import SongsController from "./Controllers/SongsController.js";
import MySongsController from "./Controllers/MySongsController.js";

class App {
  songsController = new SongsController();
  mySongsController = new MySongsController()
}

window["app"] = new App();
