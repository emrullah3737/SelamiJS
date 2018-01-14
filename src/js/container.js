import config from "./config";

import Bottle from "bottlejs";
import {AppFactory, ModuleFactory} from "Factories/Services";
import $ from "jquery";

const bottle = new Bottle();

bottle.value("config", config);

bottle.factory("AppService", AppFactory);
bottle.factory("ModuleService", ModuleFactory);
const App = bottle.container.AppService;
window.App = App;
App.run();

export default App;
