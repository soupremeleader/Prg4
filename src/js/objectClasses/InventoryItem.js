import {NonPlayer} from "./NonPlayer.js";
import {Vector} from "excalibur";

export class InventoryItem extends NonPlayer {
    name;

    constructor(name, newWidth, newHeight, resource) {
        super(resource);
        this.name = name;
        this.graphics.use(resource.toSprite());
        this.scale = new Vector(newWidth / resource.width, newHeight / resource.height);
    }

    interAct(engine) {
        //TODO
    }
}