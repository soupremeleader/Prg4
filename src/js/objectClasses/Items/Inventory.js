import {Actor, CollisionType, SpriteSheet, Input, Vector} from "excalibur";
import {Resources} from "../../resources.js";
import {InventoryItem} from "./InventoryItem/InventoryItem.js";
import {GlassBottleInventoryItem} from "./InventoryItem/GlassBottleInventoryItem.js";

const INPUT_KEY_ONE = Input.Keys.Digit1;
const INPUT_KEY_TWO = Input.Keys.Digit2;
const INPUT_KEY_THREE = Input.Keys.Digit3;
const INPUT_KEY_FOUR = Input.Keys.Digit4;
const INPUT_KEY_FIVE = Input.Keys.Digit5;
const INPUT_KEY_SIX = Input.Keys.Digit6;

let inventorySlot1Highlighted, inventorySlot2Highlighted, inventorySlot3Highlighted, inventorySlot4Highlighted, inventorySlot5Highlighted, inventorySlot6Highlighted;
export class Inventory extends Actor {
    inventory;
    feather;
    leaf;
    stars;
    glass;
    wateringCan;
    inventoryActors;


    constructor() {
        super({
            collisionType: CollisionType.Passive,
            height: 50,
            width: 290,
        })
        this.inventory = [["feather", false], ["fallen star", false], ["leaf", false], ["watering can", false], ["glass bottle", false]];
        this.initGraphics();
    }

    onPostUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(INPUT_KEY_ONE)) {
            this.graphics.use(inventorySlot1Highlighted);
            localStorage.setItem("inventorySlot", "1");
        } else if (engine.input.keyboard.wasPressed(INPUT_KEY_TWO)) {
            this.graphics.use(inventorySlot2Highlighted);
            localStorage.setItem("inventorySlot", "2");
        } else if (engine.input.keyboard.wasPressed(INPUT_KEY_THREE)) {
            this.graphics.use(inventorySlot3Highlighted);
            localStorage.setItem("inventorySlot", "3");
        } else if (engine.input.keyboard.wasPressed(INPUT_KEY_FOUR)) {
            this.graphics.use(inventorySlot4Highlighted);
            localStorage.setItem("inventorySlot", "4");
        } else if (engine.input.keyboard.wasPressed(INPUT_KEY_FIVE)) {
            this.graphics.use(inventorySlot5Highlighted);
            localStorage.setItem("inventorySlot", "5");
        } else if (engine.input.keyboard.wasPressed(INPUT_KEY_SIX)) {
            this.graphics.use(inventorySlot6Highlighted);
            localStorage.setItem("inventorySlot", "6");
        }

        for (let i = 0; i < this.inventory.length; i++) {
            if (localStorage.getItem(this.inventory[i][0]) === "true" && !this.inventory[i][1]) {
                this.inventory[i][1] = true;
                engine.add(this.inventoryActors[i]);
                console.log(engine.currentScene.actors);
            }
                // console.log(this.inventory[i][1])
            if (localStorage.getItem(this.inventory[i][0]) === "false" && this.inventory[i][1]) {
                this.inventory[i][1] = false;
                this.leaf = new InventoryItem("leaf", 40, 40, 1, 1, Resources.DriedLeaf);
                this.leaf.pos = new Vector((screen.width/2 - 72), (screen.height - 200));
                this.inventoryActors[2] = this.leaf;
            }
        }
    }

    initGraphics = () => {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.ToolBar,
            grid: {
                rows: 6,
                columns: 1,
                spriteWidth: 290,
                spriteHeight: 50,
            }
        });
        inventorySlot6Highlighted = spriteSheet.getSprite(0, 0);
        if (!inventorySlot6Highlighted) return;
        inventorySlot6Highlighted.width = 290;
        inventorySlot6Highlighted.height = 50;

        inventorySlot5Highlighted = spriteSheet.getSprite(0, 1);
        if (!inventorySlot5Highlighted) return;
        inventorySlot5Highlighted.width = 290;
        inventorySlot5Highlighted.height = 50;

        inventorySlot4Highlighted = spriteSheet.getSprite(0, 2);
        if (!inventorySlot4Highlighted) return;
        inventorySlot4Highlighted.width = 290;
        inventorySlot4Highlighted.height = 50;

        inventorySlot3Highlighted = spriteSheet.getSprite(0, 3);
        if (!inventorySlot3Highlighted) return;
        inventorySlot3Highlighted.width = 290;
        inventorySlot3Highlighted.height = 50;

        inventorySlot2Highlighted = spriteSheet.getSprite(0, 4);
        if (!inventorySlot2Highlighted) return;
        inventorySlot2Highlighted.width = 290;
        inventorySlot2Highlighted.height = 50;

        inventorySlot1Highlighted = spriteSheet.getSprite(0, 5);
        if (!inventorySlot1Highlighted) return;
        inventorySlot1Highlighted.width = 290;
        inventorySlot1Highlighted.height = 50;
        this.graphics.use(inventorySlot1Highlighted);

        this.feather = new InventoryItem("feather", 40, 40, 1, 1, Resources.Feather);
        this.feather.pos = new Vector((screen.width/2 - 120), (screen.height - 200));

        this.leaf = new InventoryItem("leaf", 40, 40, 1, 1, Resources.GreenLeaf);
        this.leaf.pos = new Vector((screen.width/2 - 72), (screen.height - 200));

        this.stars = new InventoryItem("stars", 40, 40, 1, 1, Resources.Stars);
        this.stars.pos = new Vector((screen.width/2 - 24), (screen.height - 200));

        this.glass = new GlassBottleInventoryItem("glass", 40, 40, 1, 1, Resources.Glass);
        this.glass.pos = new Vector((screen.width/2 + 24), (screen.height - 200));

        this.wateringCan = new InventoryItem("wateringCan", 40, 40, 1, 1, Resources.WateringCan);
        this.wateringCan.pos = new Vector((screen.width/2 + 72), (screen.height - 200));

        this.inventoryActors = [this.feather, this.stars, this.leaf, this.wateringCan, this.glass];

    }
}