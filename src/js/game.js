import '../css/style.css'
import {Engine, Vector, Scene} from "excalibur"
import {ResourceLoader, Resources } from './resources.js'
import { Player } from "./objectClasses/Player.js";
import { Door } from "./objectClasses/Door.js";
import {Collectable} from "./objectClasses/Collectable.js";
import {Inventory} from "./objectClasses/Inventory.js";
import {InterActable} from "./objectClasses/InterActable.js";

export class Game extends Engine {

    constructor() {
        super({
            height: screen.height,
            width: screen.width
        })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true);
    }

    startGame() {
        localStorage.clear();

        const player = new Player();
        player.pos = new Vector(400, 300);

        const toOutsideDoor = new Door(100, 100, "outsideScene");
        toOutsideDoor.pos = new Vector(250, 150);

        const toInsideDoor = new Door(100, 100, "root");
        toInsideDoor.pos = new Vector(250, 150);

        const feather = new Collectable("feather", 30, 38, Resources.Feather);
        feather.pos = new Vector(550, 250);

        const wateringCan = new Collectable("watering can", 100, 100, Resources.WateringCan);
        wateringCan.pos = new Vector(200, 400);

        const fallenStar = new Collectable("fallen star", 30, 30, Resources.FallenStars);
        fallenStar.pos = new Vector( 500, 500);

        const telescope = new InterActable("telescope", 50, 50, Resources.Telescope, fallenStar);
        telescope.pos = new Vector(700, 100);

        const glass = new Collectable("glass bottle", 40, 40, Resources.Glass);
        glass.pos = new Vector(500, 400);

        const leaf = new Collectable("leaf", 30, 30, Resources.Leaf);
        leaf.pos = new Vector(550,450);

        const plant = new InterActable("plant", 50, 60, Resources.Plant, leaf);
        plant.pos = new Vector(700, 400);


        const inventory = new Inventory();
        inventory.pos = new Vector(screen.width/2, (screen.height - 250));

        const outsideScene = new Scene();
        this.add("outsideScene", outsideScene);

        outsideScene.add(player);
        outsideScene.add(toInsideDoor);
        outsideScene.add(inventory);


        this.add(player);
        this.add(toOutsideDoor);
        this.add(feather);
        this.add(wateringCan);
        this.add(telescope);
        this.add(glass);
        this.add(plant);
        this.add(inventory);
    }
}

new Game()
