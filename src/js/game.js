import '../css/style.css'
import {Engine, Vector, Scene, CollisionType, Actor} from "excalibur"
import {ResourceLoader, Resources } from './resources.js'
import { Player } from "./objectClasses/Player.js";
import { Door } from "./objectClasses/Items/Door.js";
import {Collectable} from "./objectClasses/Items/Collectable/Collectable.js";
import {Inventory} from "./objectClasses/Items/Inventory.js";
import {DryingRack} from "./objectClasses/Items/Droppable/DryingRack.js";
import {GrowingPlant} from "./objectClasses/Items/Droppable/GrowingPlant.js";
import {FallenStar} from "./objectClasses/Items/Collectable/FallenStar.js";
import {BrowningLeaf} from "./objectClasses/Items/Collectable/BrowningLeaf.js";
import {Crow} from "./objectClasses/Items/Droppable/Crow.js";
import {Background} from "./BackGroundClass.js";
import {StartButton} from "./objectClasses/StartButton.js";
import {OutsideBackground} from "./objectClasses/OutsideBackground.js";
import {TilemapPlacement} from "./TilemapPlacement.js";
import {Telescope} from "./objectClasses/Items/Droppable/Telescope.js";
import {InsideScene} from "./objectClasses/InsideScene.js";
import {NonPlayer} from "./objectClasses/NonPlayer.js";

export class Game extends Engine {

    constructor() {
        super({
            height: visualViewport.height,
            width: visualViewport.width,
        })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(false);
    }

    startGame() {
        localStorage.clear();

        const player = new Player();
        player.pos = new Vector(710, 420);

        const outsideSky = new Background(visualViewport.width, visualViewport.height, 2, Resources.OutsideSky, -7);

        const outsideBackground = new OutsideBackground(visualViewport.width, visualViewport.height, 1, 1, Resources.OutsideBackground, CollisionType.PreventCollision);
        outsideBackground.pos = new Vector(visualViewport.width/2, visualViewport.height/2)

        const toInsideDoor = new Door("door", 80, 100, 1, 1, Resources.Door, "insideScene");
        toInsideDoor.pos = new Vector(710, 400);

        const feather = new Collectable("feather", 30, 38, 1, 1, Resources.Feather, CollisionType.Passive);
        feather.pos = new Vector(917, 510);

        const wateringCan = new Collectable("watering can", 100, 100, 1, 1, Resources.WateringCan, CollisionType.Fixed);
        wateringCan.pos = new Vector(174, 500);

        const fallenStar = new FallenStar("fallen star", 40, 52, 5, 1, Resources.BlinkingStar, CollisionType.Passive);
        fallenStar.pos = new Vector( 1150, 300);

        const telescope = new Telescope("telescope", 100, 100, 1, 1, Resources.Telescope, CollisionType.Fixed, fallenStar);
        telescope.pos = new Vector(930, 210);

        const glass = new Collectable("glass bottle", 40, 40, 1, 1, Resources.Glass, CollisionType.Passive);
        glass.pos = new Vector(160, 540);

        const leaf = new BrowningLeaf("leaf", 30, 30, 4, 1, Resources.BrownLeaf, CollisionType.Passive);
        leaf.pos = new Vector(470, 625)

        const plant = new GrowingPlant("plant", 200, 170, 3, 1, Resources.GrowingPlant, CollisionType.Fixed, leaf);
        plant.pos = new Vector(470, 625);

        const dryingRack = new DryingRack("drying rack", 80, 110, 1, 1, Resources.DryingRack, CollisionType.Fixed);
        dryingRack.pos = new Vector(600, 440)

        const crow = new Crow("crow", 50, 50, 2, 1, Resources.Crow, CollisionType.Fixed, feather);
        crow.pos = new Vector(917, 510);

        const inventory = new Inventory();
        inventory.pos = new Vector(visualViewport.width/2, (screen.height - 200));

        const outsideScene = new Scene();
        this.add("outsideScene", outsideScene);

        outsideScene.add(outsideSky);
        outsideScene.add(outsideBackground);
        outsideScene.add(dryingRack);
        outsideScene.add(player);
        outsideScene.add(toInsideDoor);
        outsideScene.add(wateringCan);
        outsideScene.add(telescope);
        outsideScene.add(glass);
        outsideScene.add(plant);
        outsideScene.add(inventory);

        outsideScene.add(crow);

        new TilemapPlacement(this, outsideScene);


        const insideBackground = new OutsideBackground(visualViewport.width, visualViewport.height, 1, 1, Resources.InsideBackground, CollisionType.PreventCollision);
        insideBackground.pos = new Vector(visualViewport.width/2, visualViewport.height/2);

        const insideLeaf = new NonPlayer("leaf", -530, -530, 1, 1, Resources.DriedLeaf);
        insideLeaf.pos = new Vector(screen.width/2-85, screen.height/2);
        insideLeaf.rotation = -1/3;

        const insideInk = new NonPlayer("stars", 350, 250, 1, 1, Resources.InsideInkBottle);
        insideInk.pos = new Vector(1320, 520);

        const insideFeather = new NonPlayer("feather", -190, -290, 1, 1, Resources.Feather);
        insideFeather.pos = new Vector(1070, 510);
        insideFeather.rotation = 1/5;

        const insideScene = new InsideScene(insideLeaf, insideInk, insideFeather);
        this.add("insideScene", insideScene);

        insideScene.add(insideBackground);
        insideScene.add(insideLeaf);
        insideScene.add(insideInk);
        insideScene.add(insideFeather);

        const sun = new Actor({width: Resources.Sun.width, height:Resources.Sun.width, collisionType: CollisionType.Fixed, pos: new Vector(screen.width*7/10, screen.height*3/16)});
        sun.graphics.use(Resources.Sun.toSprite());
        sun.scale = new Vector(1.5* screen.width / (Resources.StartGrass.width), 1.5 *screen.width / (Resources.StartGrass.width));

        const startGrass = new Background(screen.width, screen.height, 2, Resources.StartGrass, -110);

        const startSky = new Background(screen.width, screen.height, 2, Resources.StartSky, -40);

        const startScenePlayer = new Player("startScreen");
        startScenePlayer.pos = new Vector(screen.width/8, screen.height*3/4)
        const startScene = new Scene()
        this.add("startScreen", startScene);

        const startButton = new StartButton(400, 200, Resources.StartButton, "outsideScene");
        startButton.pos = new Vector(screen.width/2, screen.height/2);

        startScene.add(startSky);
        startScene.add(startGrass);
        startScene.add(sun);
        startScene.add(startScenePlayer);
        startScene.add(startButton);


        this.goToScene("startScreen");
    }
}

new Game()
