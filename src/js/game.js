import '../css/style.css'
import {Engine, Vector, Scene, CollisionType, Actor} from "excalibur"
import {ResourceLoader, Resources } from './resources.js'
import { Player } from "./objectClasses/Player.js";
import { Door } from "./objectClasses/Items/Door.js";
import {Collectable} from "./objectClasses/Items/Collectable/Collectable.js";
import {Inventory} from "./objectClasses/Items/Inventory.js";
import {Droppable} from "./objectClasses/Items/Droppable/Droppable.js";
import {DryingRack} from "./objectClasses/Items/Droppable/DryingRack.js";
import {GrowingPlant} from "./objectClasses/Items/Droppable/GrowingPlant.js";
import {FallenStar} from "./objectClasses/Items/Collectable/FallenStar.js";
import {BrowningLeaf} from "./objectClasses/Items/Collectable/BrowningLeaf.js";
import {Crow} from "./objectClasses/Items/Droppable/Crow.js";
import {Background} from "./BackGroundClass.js";
import {StartButton} from "./objectClasses/StartButton.js";

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

        const toOutsideDoor = new Door("door", 100, 100, 1, 1, Resources.Door, CollisionType.Passive, "outsideScene");
        toOutsideDoor.pos = new Vector(250, 150);

        const toInsideDoor = new Door("door", 100, 100, 1, 1, Resources.Door, CollisionType.Passive, "root");
        toInsideDoor.pos = new Vector(250, 150);

        const feather = new Collectable("feather", 30, 38, 1, 1, Resources.Feather, CollisionType.Passive);
        feather.pos = new Vector(550, 250);

        const wateringCan = new Collectable("watering can", 100, 100, 1, 1, Resources.WateringCan, CollisionType.Fixed);
        wateringCan.pos = new Vector(200, 400);

        const fallenStar = new FallenStar("fallen star", 30, 30, 1, 1, Resources.FallenStars, CollisionType.Passive);
        fallenStar.pos = new Vector( 500, 500);

        const telescope = new Droppable("telescope", 50, 50, 1, 1, Resources.Telescope, CollisionType.Fixed, fallenStar);
        telescope.pos = new Vector(700, 100);

        const glass = new Collectable("glass bottle", 40, 40, 1, 1, Resources.Glass, CollisionType.Passive);
        glass.pos = new Vector(800, 400);

        const leaf = new BrowningLeaf("leaf", 30, 30, 4, 1, Resources.BrownLeaf, CollisionType.Passive);
        leaf.pos = new Vector(550,450);

        const plant = new GrowingPlant("plant", 110, 98, 3, 1, Resources.GrowingPlant, CollisionType.Fixed, leaf);
        plant.pos = new Vector(700, 400);

        const dryingRack = new DryingRack("drying rack", 80, 80, 1, 1, Resources.DryingRack, CollisionType.Fixed);
        dryingRack.pos = new Vector(300, 500);

        const crow = new Crow("crow", 50, 50, 2, 1, Resources.Crow, CollisionType.Fixed, feather);
        crow.pos = new Vector(600, 300);

        const inventory = new Inventory();
        inventory.pos = new Vector(screen.width/2, (screen.height - 250));



        const outsideScene = new Scene();
        this.add("outsideScene", outsideScene);
        //
        // outsideScene.add(player);
        // outsideScene.add(toInsideDoor);
        // outsideScene.add(inventory);


        outsideScene.add(player);
        outsideScene.add(toOutsideDoor);
        outsideScene.add(wateringCan);
        outsideScene.add(telescope);
        outsideScene.add(glass);
        outsideScene.add(plant);
        outsideScene.add(inventory);
        outsideScene.add(dryingRack);
        outsideScene.add(crow);

        const sun = new Actor({width: Resources.Sun.width, height:Resources.Sun.width, collisionType: CollisionType.Fixed, pos: new Vector(screen.width*7/10, screen.height*3/16)});
        sun.graphics.use(Resources.Sun.toSprite());
        sun.scale = new Vector(1.5* screen.width / (Resources.Background.width), 1.5 *screen.width / (Resources.Background.width));

        const background = new Background(screen.width, screen.height, 2, Resources.Background);

        const startScenePlayer = new Player("startScreen");
        startScenePlayer.pos = new Vector(screen.width/8, screen.height*3/4)
        const startScene = new Scene()
        this.add("startScreen", startScene);

        const startButton = new StartButton(400, 200, Resources.StartButton, "outsideScene");
        startButton.pos = new Vector(screen.width/2, screen.height/2);

        startScene.add(background);
        startScene.add(sun);
        startScene.add(startScenePlayer);
        startScene.add(startButton);


        this.goToScene("startScreen");
    }
}

new Game()
