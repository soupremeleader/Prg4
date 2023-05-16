import '../css/style.css'
import {Engine, Vector, Scene} from "excalibur"
import {ResourceLoader } from './resources.js'
import { Player } from "./objectClasses/Player.js";
import { Door } from "./objectClasses/Door.js";
import {Collectable} from "./objectClasses/Collectable.js";
import {GatheredItemsMenu} from "./scenes/GatheredItemsMenu.js";

export class Game extends Engine {

    constructor() {
        super()
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true);
    }

    startGame() {
        const player = new Player("menuScene");
        player.pos = new Vector(400, 300);

        const toOutsideDoor = new Door(100, 100, "outsideScene");
        toOutsideDoor.pos = new Vector(250, 150);

        const toInsideDoor = new Door(100, 100, "root");
        toInsideDoor.pos = new Vector(250, 150);

        const collectable = new Collectable("flowers",10, 10);
        collectable.pos = new Vector(550, 250);

        const outsideScene = new Scene();
        this.add("outsideScene", outsideScene);
        outsideScene.add(player);

        outsideScene.add(toInsideDoor);

        const menuScene = new GatheredItemsMenu();
        this.add("menuScene", menuScene);

        this.add(player);
        this.add(toInsideDoor);
        this.add(toOutsideDoor);
        this.add(collectable);
    }
}

new Game()
